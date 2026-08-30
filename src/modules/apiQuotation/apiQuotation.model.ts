import mongoose, { Document, Model, Schema } from 'mongoose';

export type QuotationRateMode = 'percent' | 'surcharge';

export interface IRateTier {
  under10k: number;
  from10kTo1M: number;
  over1M: number;
}

export interface ICurrencyOverride extends IRateTier {
  currencies: string[];
  label: string;
}

export interface IApiQuotation {
  supplier: string;
  supplierKey: string;
  type: string;
  typeKey: string;
  currency: string;
  rateMode: QuotationRateMode;
  asia: IRateTier;
  row: IRateTier | null;
  specialInstructions: string;
  currencyOverrides: ICurrencyOverride[];
  providerKeys: string[];
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IApiQuotationDocument extends IApiQuotation, Document {
  toSafeObject(): Record<string, unknown>;
}

export interface IApiQuotationModel extends Model<IApiQuotationDocument> {}

const rateTierSchema = new Schema<IRateTier>(
  {
    under10k: { type: Number, required: true, min: 0, max: 100 },
    from10kTo1M: { type: Number, required: true, min: 0, max: 100 },
    over1M: { type: Number, required: true, min: 0, max: 100 },
  },
  { _id: false },
);

const currencyOverrideSchema = new Schema<ICurrencyOverride>(
  {
    currencies: [{ type: String, trim: true, uppercase: true }],
    label: { type: String, default: '', trim: true },
    under10k: { type: Number, required: true, min: 0, max: 100 },
    from10kTo1M: { type: Number, required: true, min: 0, max: 100 },
    over1M: { type: Number, required: true, min: 0, max: 100 },
  },
  { _id: false },
);

const apiQuotationSchema = new Schema<IApiQuotationDocument, IApiQuotationModel>(
  {
    supplier: { type: String, required: true, trim: true },
    supplierKey: { type: String, required: true, trim: true, index: true },
    type: { type: String, required: true, trim: true },
    typeKey: { type: String, required: true, trim: true, index: true },
    currency: { type: String, required: true, trim: true, uppercase: true, default: 'USD' },
    rateMode: {
      type: String,
      enum: ['percent', 'surcharge'],
      default: 'percent',
    },
    asia: { type: rateTierSchema, required: true },
    row: { type: rateTierSchema, default: null },
    specialInstructions: { type: String, default: '', trim: true },
    currencyOverrides: { type: [currencyOverrideSchema], default: [] },
    providerKeys: [{ type: String, trim: true, lowercase: true }],
    sortOrder: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    collection: 'apiquotation',
  },
);

apiQuotationSchema.index({ supplierKey: 1, typeKey: 1 }, { unique: true });
apiQuotationSchema.index({ sortOrder: 1, supplier: 1 });
apiQuotationSchema.index({ supplier: 1 });
apiQuotationSchema.index({ providerKeys: 1 });

function rateToSafe(tier: IRateTier | null | undefined): IRateTier | null {
  if (!tier || typeof tier.under10k !== 'number') return null;
  return {
    under10k: tier.under10k,
    from10kTo1M: tier.from10kTo1M,
    over1M: tier.over1M,
  };
}

apiQuotationSchema.methods.toSafeObject = function toSafeObject(
  this: IApiQuotationDocument,
) {
  return {
    id: this._id.toString(),
    supplier: this.supplier,
    supplierKey: this.supplierKey,
    type: this.type,
    typeKey: this.typeKey,
    currency: this.currency,
    rateMode: this.rateMode,
    asia: rateToSafe(this.asia),
    row: rateToSafe(this.row),
    specialInstructions: this.specialInstructions ?? '',
    currencyOverrides: (this.currencyOverrides ?? []).map((item) => ({
      currencies: item.currencies ?? [],
      label: item.label ?? '',
      under10k: item.under10k,
      from10kTo1M: item.from10kTo1M,
      over1M: item.over1M,
    })),
    providerKeys: this.providerKeys ?? [],
    sortOrder: this.sortOrder ?? 0,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const ApiQuotation: IApiQuotationModel =
  (mongoose.models.ApiQuotation as IApiQuotationModel) ||
  mongoose.model<IApiQuotationDocument, IApiQuotationModel>(
    'ApiQuotation',
    apiQuotationSchema,
  );
