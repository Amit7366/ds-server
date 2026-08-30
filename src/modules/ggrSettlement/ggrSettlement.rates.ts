import { BillingRegion } from '../../utils/constants';
import { IApiQuotation, IRateTier } from '../apiQuotation/apiQuotation.model';
import { resolveEffectiveProviderKeys } from '../apiQuotation/apiQuotation.providers';
import { GgrVolumeTier } from './ggrSettlement.model';

export type QuotationMatchSource = Pick<
  IApiQuotation,
  | 'supplier'
  | 'supplierKey'
  | 'type'
  | 'typeKey'
  | 'rateMode'
  | 'asia'
  | 'row'
  | 'currencyOverrides'
  | 'providerKeys'
  | 'sortOrder'
> & { id: string };

export function compactProviderKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function yearMonth(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function previousCalendarMonth(now = new Date()): string {
  const date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  return yearMonth(date);
}

export function listMonthsInclusive(start: string, end: string): string[] {
  const valid = /^\d{4}-(0[1-9]|1[0-2])$/;
  if (!valid.test(start) || !valid.test(end) || start > end) return [];

  const months: string[] = [];
  let [year, month] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  while (year < endYear || (year === endYear && month <= endMonth)) {
    months.push(`${year}-${String(month).padStart(2, '0')}`);
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }
  return months;
}

export function monthDateBounds(month: string): { fromDate: string; toDate: string } {
  const [year, monthNum] = month.split('-').map(Number);
  const lastDay = new Date(year, monthNum, 0).getDate();
  return {
    fromDate: `${month}-01`,
    toDate: `${month}-${String(lastDay).padStart(2, '0')}`,
  };
}

export function pickVolumeTier(profit: number): GgrVolumeTier {
  if (profit < 10_000) return 'under10k';
  if (profit <= 1_000_000) return 'from10kTo1M';
  return 'over1M';
}

export function catalogueIsLive(gameType: string, types: string[] = []): boolean {
  const primary = gameType.trim().toLowerCase();
  if (primary === 'live' || primary.includes('live')) return true;
  return types.some((type) => type.trim().toLowerCase() === 'live');
}

function quotationIsLive(typeKey: string): boolean {
  return typeKey.includes('live');
}

function sortByOrder(a: QuotationMatchSource, b: QuotationMatchSource): number {
  return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
}

export function matchQuotationsForGame(
  providerKey: string,
  gameType: string,
  types: string[],
  quotations: QuotationMatchSource[],
): { regular: QuotationMatchSource | null; surcharge: QuotationMatchSource | null } {
  const provider = compactProviderKey(providerKey);
  if (!provider) return { regular: null, surcharge: null };

  const candidates = quotations.filter((quotation) =>
    resolveEffectiveProviderKeys(quotation).includes(provider),
  );
  if (candidates.length === 0) return { regular: null, surcharge: null };

  const live = catalogueIsLive(gameType, types);
  const typed = live
    ? candidates.filter((quotation) => quotationIsLive(quotation.typeKey))
    : candidates.filter((quotation) => !quotationIsLive(quotation.typeKey));
  const pool = (typed.length > 0 ? typed : candidates).slice().sort(sortByOrder);
  const regulars = pool.filter((quotation) => quotation.rateMode !== 'surcharge');
  const surcharges = pool.filter((quotation) => quotation.rateMode === 'surcharge');

  const pickLive = (list: QuotationMatchSource[]) =>
    list.find((item) => item.typeKey === 'live-casino') ||
    list.find((item) => quotationIsLive(item.typeKey)) ||
    list[0] ||
    null;

  const pickSlots = (list: QuotationMatchSource[]) =>
    list.find((item) => item.typeKey === 'slots') ||
    list.find((item) => !quotationIsLive(item.typeKey)) ||
    list[0] ||
    null;

  return live
    ? { regular: pickLive(regulars), surcharge: pickLive(surcharges) }
    : { regular: pickSlots(regulars), surcharge: null };
}

function tierValue(tier: IRateTier | null | undefined, volume: GgrVolumeTier): number | null {
  if (!tier) return null;
  const value = tier[volume];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

export function resolveLineRate(input: {
  quotation: QuotationMatchSource;
  surcharge?: QuotationMatchSource | null;
  region: BillingRegion;
  currency: string;
  profit: number;
}): { rate: number; rateSource: string; volumeTier: GgrVolumeTier } {
  const volumeTier = pickVolumeTier(input.profit);
  const currency = input.currency.trim().toUpperCase();
  const override = (input.quotation.currencyOverrides ?? []).find((item) =>
    (item.currencies ?? []).map((code) => code.toUpperCase()).includes(currency),
  );
  const regionTier =
    input.region === BillingRegion.ROW
      ? input.quotation.row ?? input.quotation.asia
      : input.quotation.asia;

  let rate = override
    ? tierValue(override, volumeTier)
    : tierValue(regionTier, volumeTier);
  let rateSource = override
    ? `override:${currency}`
    : input.region === BillingRegion.ROW
      ? input.quotation.row
        ? 'row'
        : 'asia (ROW fallback)'
      : 'asia';

  if (rate == null) {
    rate = 0;
    rateSource = 'missing-tier';
  }

  if (input.surcharge) {
    const surchargeOverride = (input.surcharge.currencyOverrides ?? []).find((item) =>
      (item.currencies ?? []).map((code) => code.toUpperCase()).includes(currency),
    );
    const surchargeRegion =
      input.region === BillingRegion.ROW
        ? input.surcharge.row ?? input.surcharge.asia
        : input.surcharge.asia;
    const extra =
      (surchargeOverride
        ? tierValue(surchargeOverride, volumeTier)
        : tierValue(surchargeRegion, volumeTier)) ?? 0;
    rate += extra;
    rateSource = `${rateSource} + surcharge`;
  }

  return { rate, rateSource, volumeTier };
}
