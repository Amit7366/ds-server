import {
  CreateUserInput,
  ListMyTransactionsQuery,
  ListUsersQuery,
  UpdateUserInput,
} from './user.validation';
import mongoose from 'mongoose';
import { User, IUserDocument } from './user.model';
import { DEFAULT_GGR_DEDUCTION_PERCENT, DEFAULT_USER_CURRENCY, UserRole } from '../../utils/constants';
import {
  decryptApiSecret,
  encryptApiSecret,
  generateApiSecret,
  generatePrefix,
  hashApiSecret,
  hashPassword,
  maskSecret,
} from '../../utils/crypto';
import { AppError, ConflictError, NotFoundError } from '../../utils/errors';
import { transactionService } from '../game/transaction.service';

async function ensureUniquePrefix(preferred?: string): Promise<string> {
  if (preferred) {
    const exists = await User.exists({ prefix: preferred.toUpperCase() });
    if (exists) {
      throw new ConflictError('Prefix already in use');
    }
    return preferred.toUpperCase();
  }

  for (let attempt = 0; attempt < 20; attempt += 1) {
    const candidate = generatePrefix();
    const exists = await User.exists({ prefix: candidate });
    if (!exists) {
      return candidate;
    }
  }

  throw new ConflictError('Unable to generate a unique prefix. Please try again.');
}

function withCredentialMeta(user: IUserDocument, hasEncrypted?: boolean) {
  return user.toSafeObject({
    apiSecretMasked: maskSecret('00000000000000000000000000000000'),
    hasApiSecret: true,
    canRevealSecret: Boolean(hasEncrypted ?? user.apiSecretEncrypted),
  });
}

export class UserService {
  async createUser(input: CreateUserInput, createdById?: string) {
    const email = User.normalizeEmail(input.email);
    const existing = await User.exists({ email });
    if (existing) {
      throw new ConflictError('Email already registered');
    }

    const prefix = await ensureUniquePrefix(input.prefix);
    const apiSecretPlain = generateApiSecret();
    const [passwordHash, apiSecretHash] = await Promise.all([
      hashPassword(input.password),
      hashApiSecret(apiSecretPlain),
    ]);
    const apiSecretEncrypted = encryptApiSecret(apiSecretPlain);

    const user = await User.create({
      name: input.name,
      email,
      phone: input.phone,
      password: passwordHash,
      role: UserRole.USER,
      prefix,
      apiSecretHash,
      apiSecretEncrypted,
      whitelistDomain: input.whitelistDomain ?? '',
      whitelistIp: input.whitelistIp ?? '',
      ggrBalance: input.ggrBalance ?? 0,
      ggrDeductionPercent: input.ggrDeductionPercent ?? DEFAULT_GGR_DEDUCTION_PERCENT,
      currency: input.currency ?? DEFAULT_USER_CURRENCY,
      status: input.status,
      serviceType: input.serviceType,
      createdBy: createdById ?? null,
    });

    return {
      user: withCredentialMeta(user, true),
      apiSecret: apiSecretPlain,
    };
  }

  async listUsers(query: ListUsersQuery) {
    const filter: Record<string, unknown> = {
      role: UserRole.USER,
    };

    if (query.status) {
      filter.status = query.status;
    }
    if (query.serviceType) {
      filter.serviceType = query.serviceType;
    }
    if (query.search) {
      const regex = new RegExp(query.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [{ name: regex }, { email: regex }, { prefix: regex }, { phone: regex }];
    }

    const skip = (query.page - 1) * query.limit;
    const [items, total] = await Promise.all([
      User.find(filter)
        .select('+apiSecretEncrypted')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(query.limit),
      User.countDocuments(filter),
    ]);

    return {
      items: items.map((u: IUserDocument) =>
        withCredentialMeta(u, Boolean(u.apiSecretEncrypted)),
      ),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / query.limit)),
      },
    };
  }

  async getUserById(id: string) {
    const user = await User.findById(id).select('+apiSecretEncrypted');
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return withCredentialMeta(user, Boolean(user.apiSecretEncrypted));
  }

  async getUserDetails(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundError('User not found');
    }

    const user = await User.findById(id).select('+apiSecretEncrypted');
    if (!user || user.role !== UserRole.USER) {
      throw new NotFoundError('User not found');
    }

    const stats = await transactionService.summarizeForPrefix({
      prefix: user.prefix,
      ggrDeductionPercent: user.ggrDeductionPercent,
    });

    return {
      user: withCredentialMeta(user, Boolean(user.apiSecretEncrypted)),
      stats,
    };
  }

  async getProfile(id: string) {
    const user = await User.findById(id).select('+apiSecretEncrypted');
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return withCredentialMeta(user, Boolean(user.apiSecretEncrypted));
  }

  async listMyTransactions(userId: string, query: ListMyTransactionsQuery) {
    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const listed = await transactionService.listForDashboard({
      prefix: user.prefix,
      ggrDeductionPercent: user.ggrDeductionPercent,
      page: query.page,
      limit: query.limit,
      fromDate: query.fromDate,
      toDate: query.toDate,
      playerId: query.playerId,
    });

    return {
      currentGgrBalance: user.ggrBalance ?? 0,
      ggrDeductionPercent: listed.ggrDeductionPercent,
      currency: user.currency ?? DEFAULT_USER_CURRENCY,
      items: listed.items,
      pagination: listed.pagination,
      stats: listed.stats,
    };
  }

  async updateUser(id: string, input: UpdateUserInput) {
    const user = await User.findById(id).select('+apiSecretEncrypted');
    if (!user) {
      throw new NotFoundError('User not found');
    }

    if (input.name !== undefined) user.name = input.name;
    if (input.phone !== undefined) user.phone = input.phone;
    if (input.whitelistDomain !== undefined) user.whitelistDomain = input.whitelistDomain;
    if (input.whitelistIp !== undefined) user.whitelistIp = input.whitelistIp;
    if (input.ggrBalance !== undefined) user.ggrBalance = input.ggrBalance;
    if (input.ggrDeductionPercent !== undefined) {
      user.ggrDeductionPercent = input.ggrDeductionPercent;
    }
    if (input.currency !== undefined) user.currency = input.currency;
    if (input.status !== undefined) user.status = input.status;
    if (input.serviceType !== undefined) user.serviceType = input.serviceType;
    if (input.password) {
      user.password = await hashPassword(input.password);
    }

    await user.save();
    return withCredentialMeta(user, Boolean(user.apiSecretEncrypted));
  }

  async revealApiSecret(id: string) {
    const user = await User.findById(id).select('+apiSecretEncrypted');
    if (!user) {
      throw new NotFoundError('User not found');
    }
    if (!user.apiSecretEncrypted) {
      throw new AppError(
        'Secret cannot be revealed for this account. Regenerate to create a new copyable secret.',
        409,
      );
    }

    try {
      const apiSecret = decryptApiSecret(user.apiSecretEncrypted);
      return {
        user: withCredentialMeta(user, true),
        apiSecret,
        apiSecretMasked: maskSecret(apiSecret),
      };
    } catch {
      throw new AppError('Failed to decrypt API secret. Please regenerate.', 500);
    }
  }

  async regenerateApiSecret(id: string) {
    const user = await User.findById(id).select('+apiSecretHash +apiSecretEncrypted');
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const apiSecretPlain = generateApiSecret();
    user.apiSecretHash = await hashApiSecret(apiSecretPlain);
    user.apiSecretEncrypted = encryptApiSecret(apiSecretPlain);
    await user.save();

    return {
      user: withCredentialMeta(user, true),
      apiSecret: apiSecretPlain,
    };
  }
}

export const userService = new UserService();
