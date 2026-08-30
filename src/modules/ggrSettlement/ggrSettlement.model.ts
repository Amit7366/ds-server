import mongoose, { Document, Model, Schema, Types } from 'mongoose';

export type GgrVolumeTier = 'under10k' | 'from10kTo1M' | 'over1M';

export interface IGgrSettlementLine {
  supplier: string;
  supplierKey: string;
  type: string;
  currency: string;
  totalBets: number;
  totalWins: number;
  profit: number;
  rate: number;
  rateSource: string;
  volumeTier: GgrVolumeTier;
  ggr: number;
}

export interface IGgrUnmatchedLine {
  gameUid: string;
  providerKey: string;
  gameType: string;
  currency: string;
  totalBets: number;
  totalWins: number;
  reason: string;
}

export interface IGgrSettlement {
  userId: Types.ObjectId;
  prefix: string;
  month: string;
  billingRegion: string;
  lines: IGgrSettlementLine[];
  unmatched: IGgrUnmatchedLine[];
  totalGgr: number;
  deducted: number;
  previousBalance: number;
  newBalance: number;
  status: 'settled';
  settledAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGgrSettlementDocument extends IGgrSettlement, Document {
  toSafeObject(): Record<string, unknown>;
}

export interface IGgrSettlementModel extends Model<IGgrSettlementDocument> {}

const lineSchema = new Schema<IGgrSettlementLine>(
  {
    supplier: { type: String, required: true },
    supplierKey: { type: String, required: true },
    type: { type: String, required: true },
    currency: { type: String, required: true },
    totalBets: { type: Number, required: true },
    totalWins: { type: Number, required: true },
    profit: { type: Number, required: true },
    rate: { type: Number, required: true },
    rateSource: { type: String, default: '' },
    volumeTier: { type: String, required: true },
    ggr: { type: Number, required: true },
  },
  { _id: false },
);

const unmatchedSchema = new Schema<IGgrUnmatchedLine>(
  {
    gameUid: { type: String, required: true },
    providerKey: { type: String, default: '' },
    gameType: { type: String, default: '' },
    currency: { type: String, required: true },
    totalBets: { type: Number, required: true },
    totalWins: { type: Number, required: true },
    reason: { type: String, required: true },
  },
  { _id: false },
);

const ggrSettlementSchema = new Schema<IGgrSettlementDocument, IGgrSettlementModel>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    prefix: { type: String, required: true, uppercase: true, index: true },
    month: { type: String, required: true },
    billingRegion: { type: String, required: true },
    lines: { type: [lineSchema], default: [] },
    unmatched: { type: [unmatchedSchema], default: [] },
    totalGgr: { type: Number, required: true, default: 0 },
    deducted: { type: Number, required: true, default: 0 },
    previousBalance: { type: Number, required: true, default: 0 },
    newBalance: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['settled'], default: 'settled' },
    settledAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    collection: 'ggrsettlements',
  },
);

ggrSettlementSchema.index({ userId: 1, month: 1 }, { unique: true });
ggrSettlementSchema.index({ month: 1, settledAt: -1 });

ggrSettlementSchema.methods.toSafeObject = function toSafeObject(
  this: IGgrSettlementDocument,
) {
  return {
    id: this._id.toString(),
    userId: this.userId.toString(),
    prefix: this.prefix,
    month: this.month,
    billingRegion: this.billingRegion,
    lines: this.lines ?? [],
    unmatched: this.unmatched ?? [],
    totalGgr: this.totalGgr ?? 0,
    deducted: this.deducted ?? 0,
    previousBalance: this.previousBalance ?? 0,
    newBalance: this.newBalance ?? 0,
    status: this.status,
    settledAt: this.settledAt,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const GgrSettlement: IGgrSettlementModel =
  (mongoose.models.GgrSettlement as IGgrSettlementModel) ||
  mongoose.model<IGgrSettlementDocument, IGgrSettlementModel>(
    'GgrSettlement',
    ggrSettlementSchema,
  );
