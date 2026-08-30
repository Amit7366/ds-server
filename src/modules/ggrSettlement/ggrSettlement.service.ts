import mongoose from 'mongoose';
import {
  BillingPlan,
  BillingRegion,
  DEFAULT_BILLING_PLAN,
  DEFAULT_BILLING_REGION,
  UserRole,
} from '../../utils/constants';
import { NotFoundError, ValidationError, ForbiddenError } from '../../utils/errors';
import { ApiQuotation } from '../apiQuotation/apiQuotation.model';
import { GameCatalogue } from '../game/gameCatalogue.model';
import { GameTransaction } from '../game/transaction.model';
import { buildTimestampMongoFilter } from '../game/timestamp-filter';
import { User, IUserDocument } from '../user/user.model';
import {
  GgrSettlement,
  IGgrSettlementLine,
  IGgrUnmatchedLine,
} from './ggrSettlement.model';
import {
  listMonthsInclusive,
  matchQuotationsForGame,
  monthDateBounds,
  previousCalendarMonth,
  QuotationMatchSource,
  resolveLineRate,
  yearMonth,
} from './ggrSettlement.rates';
import { buildSettlementPdf, SettlementPdfSource } from './ggrSettlement.pdf';
import { ListSettlementsQuery } from './ggrSettlement.validation';

function parseAmount(value: string | undefined | null): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function roundMoney(value: number): number {
  return Math.round(value * 10000) / 10000;
}

function toQuotationSource(doc: {
  _id: mongoose.Types.ObjectId;
  supplier: string;
  supplierKey: string;
  type: string;
  typeKey: string;
  rateMode?: QuotationMatchSource['rateMode'];
  asia: QuotationMatchSource['asia'];
  row?: QuotationMatchSource['row'];
  currencyOverrides?: QuotationMatchSource['currencyOverrides'];
  providerKeys?: string[];
  sortOrder?: number;
}): QuotationMatchSource {
  return {
    id: doc._id.toString(),
    supplier: doc.supplier,
    supplierKey: doc.supplierKey,
    type: doc.type,
    typeKey: doc.typeKey,
    rateMode: doc.rateMode ?? 'percent',
    asia: doc.asia,
    row: doc.row ?? null,
    currencyOverrides: doc.currencyOverrides ?? [],
    providerKeys: doc.providerKeys ?? [],
    sortOrder: doc.sortOrder ?? 0,
  };
}

function assertSettlementAccess(actor: { id: string; role: string } | undefined, ownerId: string) {
  if (!actor) return;
  if (actor.role === UserRole.SUPER_ADMIN) return;
  if (actor.id === ownerId) return;
  throw new ForbiddenError('You cannot view this GGR report');
}

export type SettlementPreview = {
  userId: string;
  name: string;
  prefix: string;
  email: string;
  month: string;
  billingRegion: string;
  currentBalance: number;
  lines: IGgrSettlementLine[];
  unmatched: IGgrUnmatchedLine[];
  totalGgr: number;
  alreadySettled: boolean;
  settledId?: string;
};

async function findMonthlyUser(userId: string): Promise<IUserDocument> {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new NotFoundError('User not found');
  }
  const user = await User.findById(userId);
  if (!user || user.role !== UserRole.USER) {
    throw new NotFoundError('User not found');
  }
  if (user.billingPlan !== BillingPlan.MONTHLY) {
    throw new ValidationError('User is not on the monthly GGR plan');
  }
  return user;
}

async function loadMonthlyUsers(userId?: string): Promise<IUserDocument[]> {
  if (userId) {
    return [await findMonthlyUser(userId)];
  }
  return User.find({ role: UserRole.USER, billingPlan: BillingPlan.MONTHLY });
}

async function computeForUser(
  user: IUserDocument,
  month: string,
): Promise<Omit<SettlementPreview, 'alreadySettled' | 'settledId'>> {
  const { fromDate, toDate } = monthDateBounds(month);
  const timestampFilter = buildTimestampMongoFilter(fromDate, toDate);
  const filter: Record<string, unknown> = { prefix: user.prefix };
  if (timestampFilter) Object.assign(filter, timestampFilter);

  const [transactions, quotationDocs] = await Promise.all([
    GameTransaction.find(filter)
      .select('game_uid currency_code bet_amount win_amount')
      .lean(),
    ApiQuotation.find().lean(),
  ]);

  const quotations = quotationDocs.map((doc) => toQuotationSource(doc));

  const gameUids = [...new Set(transactions.map((row) => row.game_uid).filter(Boolean))];
  const games = gameUids.length
    ? await GameCatalogue.find({ gameCode: { $in: gameUids } })
        .select('gameCode providerKey provider game_type types')
        .lean()
    : [];
  const gameByCode = new Map(games.map((game) => [game.gameCode, game]));

  type MatchBucket = {
    quotation: QuotationMatchSource;
    surcharge: QuotationMatchSource | null;
    currency: string;
    totalBets: number;
    totalWins: number;
  };
  const matched = new Map<string, MatchBucket>();
  const unmatched = new Map<string, IGgrUnmatchedLine>();

  const addUnmatched = (
    gameUid: string,
    currency: string,
    bets: number,
    wins: number,
    reason: string,
    providerKey = '',
    gameType = '',
  ) => {
    const key = `${gameUid}::${currency}::${reason}`;
    const current = unmatched.get(key);
    if (current) {
      current.totalBets = roundMoney(current.totalBets + bets);
      current.totalWins = roundMoney(current.totalWins + wins);
      return;
    }
    unmatched.set(key, {
      gameUid,
      providerKey,
      gameType,
      currency,
      totalBets: roundMoney(bets),
      totalWins: roundMoney(wins),
      reason,
    });
  };

  for (const tx of transactions) {
    const bets = parseAmount(tx.bet_amount);
    const wins = parseAmount(tx.win_amount);
    const currency = (tx.currency_code || 'USD').trim().toUpperCase() || 'USD';
    const game = gameByCode.get(tx.game_uid);

    if (!game) {
      addUnmatched(tx.game_uid, currency, bets, wins, 'game_not_in_catalogue');
      continue;
    }

    const providerKey = game.providerKey || game.provider || '';
    const match = matchQuotationsForGame(
      providerKey,
      game.game_type,
      game.types ?? [],
      quotations,
    );
    if (!match.regular) {
      addUnmatched(
        tx.game_uid,
        currency,
        bets,
        wins,
        'no_quotation_for_provider',
        providerKey,
        game.game_type,
      );
      continue;
    }

    const key = `${match.regular.id}::${currency}`;
    const current = matched.get(key);
    if (current) {
      current.totalBets += bets;
      current.totalWins += wins;
    } else {
      matched.set(key, {
        quotation: match.regular,
        surcharge: match.surcharge,
        currency,
        totalBets: bets,
        totalWins: wins,
      });
    }
  }

  const region = user.billingRegion ?? DEFAULT_BILLING_REGION;
  const lines: IGgrSettlementLine[] = [...matched.values()].map((bucket) => {
    const profit = Math.max(roundMoney(bucket.totalBets - bucket.totalWins), 0);
    const resolved = resolveLineRate({
      quotation: bucket.quotation,
      surcharge: bucket.surcharge,
      region,
      currency: bucket.currency,
      profit,
    });
    return {
      supplier: bucket.quotation.supplier,
      supplierKey: bucket.quotation.supplierKey,
      type: bucket.quotation.type,
      currency: bucket.currency,
      totalBets: roundMoney(bucket.totalBets),
      totalWins: roundMoney(bucket.totalWins),
      profit,
      rate: resolved.rate,
      rateSource: resolved.rateSource,
      volumeTier: resolved.volumeTier,
      ggr: roundMoney(profit * (resolved.rate / 100)),
    };
  });

  lines.sort((a, b) => a.supplier.localeCompare(b.supplier) || a.currency.localeCompare(b.currency));

  return {
    userId: user._id.toString(),
    name: user.name,
    prefix: user.prefix,
    email: user.email,
    month,
    billingRegion: region,
    currentBalance: user.ggrBalance ?? 0,
    lines,
    unmatched: [...unmatched.values()].sort((a, b) => a.gameUid.localeCompare(b.gameUid)),
    totalGgr: roundMoney(lines.reduce((sum, line) => sum + line.ggr, 0)),
  };
}

let autoSettleInFlight: Promise<{
  settled: number;
  skipped: number;
  months: string[];
  results: Array<Record<string, unknown>>;
}> | null = null;

export class GgrSettlementService {
  async preview(month: string, userId?: string) {
    const users = await loadMonthlyUsers(userId);
    const existing = await GgrSettlement.find({
      month,
      userId: { $in: users.map((user) => user._id) },
    }).lean();
    const existingByUser = new Map(existing.map((row) => [row.userId.toString(), row]));

    const items: SettlementPreview[] = [];
    for (const user of users) {
      const computed = await computeForUser(user, month);
      const settled = existingByUser.get(user._id.toString());
      items.push({
        ...computed,
        alreadySettled: Boolean(settled),
        settledId: settled?._id.toString(),
      });
    }

    return {
      month,
      items,
      totals: {
        users: items.length,
        alreadySettled: items.filter((item) => item.alreadySettled).length,
        pending: items.filter((item) => !item.alreadySettled).length,
        totalGgr: roundMoney(items.reduce((sum, item) => sum + item.totalGgr, 0)),
        unmatchedGroups: items.reduce((sum, item) => sum + item.unmatched.length, 0),
      },
    };
  }

  async settle(input: { month?: string; userId?: string; force?: boolean }) {
    const month = input.month || previousCalendarMonth();
    const users = await loadMonthlyUsers(input.userId);
    const results: Array<Record<string, unknown>> = [];

    for (const user of users) {
      const existing = await GgrSettlement.findOne({ userId: user._id, month });
      if (existing && !input.force) {
        results.push({
          userId: user._id.toString(),
          prefix: user.prefix,
          skipped: true,
          reason: 'already_settled',
          settlement: existing.toSafeObject(),
        });
        continue;
      }

      if (existing && input.force) {
        await User.collection.updateOne({ _id: user._id }, [
          {
            $set: {
              ggrBalance: {
                $add: [{ $ifNull: ['$ggrBalance', 0] }, existing.deducted],
              },
              updatedAt: new Date(),
            },
          },
        ]);
        await existing.deleteOne();
        const refreshed = await User.findById(user._id);
        if (refreshed) {
          user.ggrBalance = refreshed.ggrBalance;
        }
      }

      const computed = await computeForUser(user, month);
      const previousBalance = user.ggrBalance ?? 0;
      const deducted = Math.min(computed.totalGgr, previousBalance);
      const newBalance = roundMoney(Math.max(0, previousBalance - deducted));

      await User.collection.updateOne({ _id: user._id }, {
        $set: { ggrBalance: newBalance, updatedAt: new Date() },
      });

      const settlement = await GgrSettlement.create({
        userId: user._id,
        prefix: user.prefix,
        month,
        billingRegion: computed.billingRegion,
        lines: computed.lines,
        unmatched: computed.unmatched,
        totalGgr: computed.totalGgr,
        deducted,
        previousBalance,
        newBalance,
        status: 'settled',
        settledAt: new Date(),
      });

      results.push({
        userId: user._id.toString(),
        prefix: user.prefix,
        skipped: false,
        settlement: settlement.toSafeObject(),
      });
    }

    return {
      month,
      settled: results.filter((row) => !row.skipped).length,
      skipped: results.filter((row) => row.skipped).length,
      results,
    };
  }

  async list(query: ListSettlementsQuery) {
    const filter: Record<string, unknown> = {};
    if (query.month) filter.month = query.month;
    if (query.userId) {
      if (!mongoose.Types.ObjectId.isValid(query.userId)) {
        throw new ValidationError('Invalid userId');
      }
      filter.userId = query.userId;
    }
    if (query.search) {
      const regex = new RegExp(query.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.prefix = regex;
    }

    const skip = (query.page - 1) * query.limit;
    const [items, total] = await Promise.all([
      GgrSettlement.find(filter).sort({ settledAt: -1 }).skip(skip).limit(query.limit),
      GgrSettlement.countDocuments(filter),
    ]);

    const userIds = [...new Set(items.map((item) => item.userId.toString()))];
    const users = await User.find({ _id: { $in: userIds } }).select('name email prefix');
    const userById = new Map(users.map((user) => [user._id.toString(), user]));

    return {
      items: items.map((item) => {
        const owner = userById.get(item.userId.toString());
        return {
          ...item.toSafeObject(),
          name: owner?.name ?? '',
          email: owner?.email ?? '',
        };
      }),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / Math.max(query.limit, 1))),
      },
    };
  }

  async getById(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundError('Settlement not found');
    }
    const settlement = await GgrSettlement.findById(id);
    if (!settlement) {
      throw new NotFoundError('Settlement not found');
    }
    const owner = await User.findById(settlement.userId).select('name email prefix');
    return {
      ...settlement.toSafeObject(),
      name: owner?.name ?? '',
      email: owner?.email ?? '',
    };
  }

  async getLatestForUser(userId: string) {
    if (!mongoose.Types.ObjectId.isValid(userId)) return null;
    const settlement = await GgrSettlement.findOne({ userId }).sort({ settledAt: -1 });
    return settlement ? settlement.toSafeObject() : null;
  }

  async autoSettleDueMonths() {
    if (autoSettleInFlight) return autoSettleInFlight;
    autoSettleInFlight = this.runAutoSettleDueMonths().finally(() => {
      autoSettleInFlight = null;
    });
    return autoSettleInFlight;
  }

  private async runAutoSettleDueMonths() {
    const throughMonth = previousCalendarMonth();
    const users = await loadMonthlyUsers();
    const aggregated = {
      settled: 0,
      skipped: 0,
      months: [] as string[],
      results: [] as Array<Record<string, unknown>>,
    };

    for (const user of users) {
      if (!user.monthlySince) {
        user.monthlySince = new Date();
        await User.updateOne({ _id: user._id }, { $set: { monthlySince: user.monthlySince } });
      }
      const months = listMonthsInclusive(yearMonth(user.monthlySince), throughMonth);
      for (const month of months) {
        if (!aggregated.months.includes(month)) aggregated.months.push(month);
        const result = await this.settle({ month, userId: user._id.toString(), force: false });
        aggregated.settled += result.settled;
        aggregated.skipped += result.skipped;
        aggregated.results.push(...result.results);
      }
    }

    aggregated.months.sort();
    return aggregated;
  }

  async getPdf(
    id: string,
    actor?: { id: string; role: string },
  ) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundError('Settlement not found');
    }
    const settlement = await GgrSettlement.findById(id);
    if (!settlement) {
      throw new NotFoundError('Settlement not found');
    }
    assertSettlementAccess(actor, settlement.userId.toString());
    const owner = await User.findById(settlement.userId).select('name email prefix');
    const source: SettlementPdfSource = {
      prefix: settlement.prefix,
      month: settlement.month,
      name: owner?.name ?? '',
      email: owner?.email ?? '',
      billingRegion: settlement.billingRegion,
      previousBalance: settlement.previousBalance,
      totalGgr: settlement.totalGgr,
      deducted: settlement.deducted,
      newBalance: settlement.newBalance,
      lines: settlement.lines,
      unmatched: settlement.unmatched,
      settledAt: settlement.settledAt,
    };
    const buffer = await buildSettlementPdf(source);
    return { buffer, filename: `${source.prefix}-${source.month}-ggr.pdf` };
  }

  async getReportPdf(input: {
    month: string;
    userId: string;
    actor?: { id: string; role: string };
  }) {
    assertSettlementAccess(input.actor, input.userId);
    if (!mongoose.Types.ObjectId.isValid(input.userId)) {
      throw new NotFoundError('User not found');
    }
    const user = await User.findById(input.userId);
    if (!user || user.role !== UserRole.USER) {
      throw new NotFoundError('User not found');
    }

    const existing = await GgrSettlement.findOne({ userId: user._id, month: input.month });
    if (existing) {
      return this.getPdf(existing._id.toString(), input.actor);
    }

    if ((user.billingPlan ?? DEFAULT_BILLING_PLAN) !== BillingPlan.MONTHLY) {
      throw new ValidationError('No monthly GGR report for this user and month');
    }

    const computed = await computeForUser(user, input.month);
    const source: SettlementPdfSource = {
      prefix: user.prefix,
      month: input.month,
      name: user.name,
      email: user.email,
      billingRegion: computed.billingRegion,
      previousBalance: computed.currentBalance,
      totalGgr: computed.totalGgr,
      deducted: 0,
      newBalance: computed.currentBalance,
      lines: computed.lines,
      unmatched: computed.unmatched,
      draft: true,
    };
    const buffer = await buildSettlementPdf(source);
    return { buffer, filename: `${source.prefix}-${source.month}-ggr.pdf` };
  }
}

export const ggrSettlementService = new GgrSettlementService();
