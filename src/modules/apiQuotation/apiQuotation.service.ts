import mongoose from 'mongoose';
import { ApiQuotation, IApiQuotationDocument, IRateTier } from './apiQuotation.model';
import { buildSupplierKey, buildTypeKey } from './apiQuotation.keys';
import {
  CreateQuotationInput,
  ListQuotationsQuery,
  UpdateQuotationInput,
} from './apiQuotation.validation';
import { ConflictError, NotFoundError } from '../../utils/errors';

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function assertObjectId(id: string): void {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError('Quotation not found');
  }
}

async function findQuotationOrThrow(id: string): Promise<IApiQuotationDocument> {
  assertObjectId(id);
  const quotation = await ApiQuotation.findById(id);
  if (!quotation) {
    throw new NotFoundError('Quotation not found');
  }
  return quotation;
}

async function assertKeyAvailable(
  supplierKey: string,
  typeKey: string,
  excludeId?: string,
): Promise<void> {
  const filter: Record<string, unknown> = { supplierKey, typeKey };
  if (excludeId) {
    filter._id = { $ne: excludeId };
  }
  const exists = await ApiQuotation.exists(filter);
  if (exists) {
    throw new ConflictError('A quotation for this supplier and type already exists');
  }
}

function normalizeCurrencies(values: string[] | undefined): string[] {
  return (values ?? [])
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean);
}

function cloneTier(tier: IRateTier): IRateTier {
  return {
    under10k: tier.under10k,
    from10kTo1M: tier.from10kTo1M,
    over1M: tier.over1M,
  };
}

export class ApiQuotationService {
  async listQuotations(query: ListQuotationsQuery) {
    const filter: Record<string, unknown> = {};

    if (query.type) {
      filter.typeKey = buildTypeKey(query.type);
    }
    if (query.search) {
      const regex = new RegExp(escapeRegex(query.search), 'i');
      filter.$or = [
        { supplier: regex },
        { supplierKey: regex },
        { type: regex },
        { typeKey: regex },
        { specialInstructions: regex },
        { currency: regex },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const [items, total] = await Promise.all([
      ApiQuotation.find(filter)
        .sort({ sortOrder: 1, supplier: 1, type: 1 })
        .skip(skip)
        .limit(query.limit),
      ApiQuotation.countDocuments(filter),
    ]);

    return {
      items: items.map((item) => item.toSafeObject()),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / Math.max(query.limit, 1))),
      },
    };
  }

  async listFilters() {
    const types = await ApiQuotation.distinct('type');
    return {
      types: types.filter(Boolean).sort((a, b) => a.localeCompare(b)),
    };
  }

  async getQuotationById(id: string) {
    const quotation = await findQuotationOrThrow(id);
    return quotation.toSafeObject();
  }

  async createQuotation(input: CreateQuotationInput) {
    const supplier = input.supplier.trim();
    const type = input.type.trim();
    const supplierKey = buildSupplierKey(supplier);
    const typeKey = buildTypeKey(type);

    if (!supplierKey || !typeKey) {
      throw new ConflictError('Supplier and type must contain letters or numbers');
    }

    await assertKeyAvailable(supplierKey, typeKey);

    const quotation = await ApiQuotation.create({
      supplier,
      supplierKey,
      type,
      typeKey,
      currency: (input.currency ?? 'USD').trim().toUpperCase(),
      rateMode: input.rateMode ?? 'percent',
      asia: cloneTier(input.asia),
      row: input.row ? cloneTier(input.row) : null,
      specialInstructions: (input.specialInstructions ?? '').trim(),
      currencyOverrides: (input.currencyOverrides ?? []).map((item) => ({
        currencies: normalizeCurrencies(item.currencies),
        label: (item.label ?? '').trim(),
        under10k: item.under10k,
        from10kTo1M: item.from10kTo1M,
        over1M: item.over1M,
      })),
      sortOrder: input.sortOrder ?? 0,
    });

    return quotation.toSafeObject();
  }

  async updateQuotation(id: string, input: UpdateQuotationInput) {
    const quotation = await findQuotationOrThrow(id);

    if (input.supplier !== undefined) {
      quotation.supplier = input.supplier.trim();
    }
    if (input.type !== undefined) {
      quotation.type = input.type.trim();
    }
    if (input.currency !== undefined) {
      quotation.currency = input.currency.trim().toUpperCase();
    }
    if (input.rateMode !== undefined) {
      quotation.rateMode = input.rateMode;
    }
    if (input.asia !== undefined) {
      quotation.set('asia', cloneTier(input.asia));
    }
    if (input.row !== undefined) {
      quotation.set('row', input.row ? cloneTier(input.row) : null);
    }
    if (input.specialInstructions !== undefined) {
      quotation.specialInstructions = input.specialInstructions.trim();
    }
    if (input.currencyOverrides !== undefined) {
      quotation.set(
        'currencyOverrides',
        input.currencyOverrides.map((item) => ({
          currencies: normalizeCurrencies(item.currencies),
          label: (item.label ?? '').trim(),
          under10k: item.under10k,
          from10kTo1M: item.from10kTo1M,
          over1M: item.over1M,
        })),
      );
    }
    if (input.sortOrder !== undefined) {
      quotation.sortOrder = input.sortOrder;
    }

    const nextSupplierKey = buildSupplierKey(quotation.supplier);
    const nextTypeKey = buildTypeKey(quotation.type);
    if (!nextSupplierKey || !nextTypeKey) {
      throw new ConflictError('Supplier and type must contain letters or numbers');
    }

    if (nextSupplierKey !== quotation.supplierKey || nextTypeKey !== quotation.typeKey) {
      await assertKeyAvailable(nextSupplierKey, nextTypeKey, quotation._id.toString());
      quotation.supplierKey = nextSupplierKey;
      quotation.typeKey = nextTypeKey;
    }

    await quotation.save();
    return quotation.toSafeObject();
  }

  async deleteQuotation(id: string) {
    const quotation = await findQuotationOrThrow(id);
    const snapshot = quotation.toSafeObject();
    await quotation.deleteOne();
    return snapshot;
  }
}

export const apiQuotationService = new ApiQuotationService();
