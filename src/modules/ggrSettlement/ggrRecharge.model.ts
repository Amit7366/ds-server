import mongoose, { Document, Model, Schema, Types } from 'mongoose';

export interface IGgrRecharge {
  userId: Types.ObjectId;
  prefix: string;
  amount: number;
  note: string;
  previousBalance: number;
  newBalance: number;
  createdBy?: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGgrRechargeDocument extends IGgrRecharge, Document {
  toSafeObject(): Record<string, unknown>;
}

export interface IGgrRechargeModel extends Model<IGgrRechargeDocument> {}

const ggrRechargeSchema = new Schema<IGgrRechargeDocument, IGgrRechargeModel>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    prefix: { type: String, required: true, uppercase: true, index: true },
    amount: { type: Number, required: true, min: 0 },
    note: { type: String, default: '', trim: true, maxlength: 500 },
    previousBalance: { type: Number, required: true, default: 0 },
    newBalance: { type: Number, required: true, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  },
  {
    timestamps: true,
    collection: 'ggrrecharges',
  },
);

ggrRechargeSchema.index({ createdAt: -1 });

ggrRechargeSchema.methods.toSafeObject = function toSafeObject(this: IGgrRechargeDocument) {
  return {
    id: this._id.toString(),
    userId: this.userId.toString(),
    prefix: this.prefix,
    amount: this.amount,
    note: this.note ?? '',
    previousBalance: this.previousBalance ?? 0,
    newBalance: this.newBalance ?? 0,
    createdBy: this.createdBy ? this.createdBy.toString() : null,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const GgrRecharge: IGgrRechargeModel =
  (mongoose.models.GgrRecharge as IGgrRechargeModel) ||
  mongoose.model<IGgrRechargeDocument, IGgrRechargeModel>('GgrRecharge', ggrRechargeSchema);
