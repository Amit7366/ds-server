import mongoose from 'mongoose';
import { UserRole } from '../../utils/constants';
import { NotFoundError, ValidationError } from '../../utils/errors';
import { User } from '../user/user.model';
import { GgrRecharge } from './ggrRecharge.model';

function roundMoney(value: number): number {
  return Math.round(value * 10000) / 10000;
}

export type ListRechargesQuery = {
  page: number;
  limit: number;
  userId?: string;
  search?: string;
};

export class GgrRechargeService {
  async recharge(input: { userId: string; amount: number; note?: string; createdBy?: string }) {
    if (!mongoose.Types.ObjectId.isValid(input.userId)) {
      throw new NotFoundError('User not found');
    }
    const amount = roundMoney(input.amount);
    if (!(amount > 0)) {
      throw new ValidationError('Recharge amount must be greater than 0');
    }

    const user = await User.findOneAndUpdate(
      { _id: input.userId, role: UserRole.USER },
      { $inc: { ggrBalance: amount }, $set: { updatedAt: new Date() } },
      { new: true },
    );
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const newBalance = roundMoney(user.ggrBalance ?? 0);
    const previousBalance = roundMoney(newBalance - amount);

    const record = await GgrRecharge.create({
      userId: user._id,
      prefix: user.prefix,
      amount,
      note: (input.note ?? '').trim(),
      previousBalance,
      newBalance,
      createdBy: input.createdBy && mongoose.Types.ObjectId.isValid(input.createdBy)
        ? input.createdBy
        : null,
    });

    return {
      recharge: {
        ...record.toSafeObject(),
        name: user.name,
        email: user.email,
      },
      user: user.toSafeObject(),
    };
  }

  async list(query: ListRechargesQuery) {
    const filter: Record<string, unknown> = {};
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
      GgrRecharge.find(filter).sort({ createdAt: -1 }).skip(skip).limit(query.limit),
      GgrRecharge.countDocuments(filter),
    ]);

    const userIds = [
      ...new Set([
        ...items.map((item) => item.userId.toString()),
        ...items.map((item) => item.createdBy?.toString()).filter(Boolean) as string[],
      ]),
    ];
    const users = await User.find({ _id: { $in: userIds } }).select('name email prefix');
    const userById = new Map(users.map((user) => [user._id.toString(), user]));

    return {
      items: items.map((item) => {
        const owner = userById.get(item.userId.toString());
        const actor = item.createdBy ? userById.get(item.createdBy.toString()) : null;
        return {
          ...item.toSafeObject(),
          name: owner?.name ?? '',
          email: owner?.email ?? '',
          createdByName: actor?.name ?? 'Super admin',
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
}

export const ggrRechargeService = new GgrRechargeService();
