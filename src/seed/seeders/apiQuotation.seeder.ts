import { apiQuotationSeedRows } from '../../data/apiQuotationData';
import { buildSupplierKey, buildTypeKey } from '../../modules/apiQuotation/apiQuotation.keys';
import { ApiQuotation } from '../../modules/apiQuotation/apiQuotation.model';
import { ensureCollection } from '../helpers';
import { Seeder } from '../types';

export const apiQuotationSeeder: Seeder = {
  name: 'apiquotation',
  async run(ctx) {
    await ensureCollection(ApiQuotation, ctx);

    const docs = apiQuotationSeedRows.map((row, index) => {
      const supplier = row.supplier.trim();
      const type = row.type.trim();
      return {
        supplier,
        supplierKey: buildSupplierKey(supplier),
        type,
        typeKey: buildTypeKey(type),
        currency: (row.currency ?? 'USD').trim().toUpperCase(),
        rateMode: row.rateMode ?? 'percent',
        asia: row.asia,
        row: row.row,
        specialInstructions: (row.specialInstructions ?? '').trim(),
        currencyOverrides: (row.currencyOverrides ?? []).map((item) => ({
          currencies: item.currencies.map((code) => code.trim().toUpperCase()),
          label: item.label ?? '',
          under10k: item.under10k,
          from10kTo1M: item.from10kTo1M,
          over1M: item.over1M,
        })),
        sortOrder: index,
      };
    });

    const seen = new Set<string>();
    for (const doc of docs) {
      const key = `${doc.supplierKey}::${doc.typeKey}`;
      if (seen.has(key)) {
        throw new Error(`Duplicate quotation key in seed data: ${key}`);
      }
      seen.add(key);
    }

    const result = await ApiQuotation.bulkWrite(
      docs.map((doc) => ({
        updateOne: {
          filter: { supplierKey: doc.supplierKey, typeKey: doc.typeKey },
          update: { $set: doc },
          upsert: true,
        },
      })),
      { ordered: false },
    );

    ctx.logger.info(
      `Upserted ${result.upsertedCount}, updated ${result.modifiedCount} (${docs.length} total from Huidu quotation)`,
    );
  },
};
