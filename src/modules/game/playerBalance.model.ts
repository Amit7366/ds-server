import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPlayerBalance {
  member_account: string;
  currency_code: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IPlayerBalanceDocument = IPlayerBalance & Document;

const playerBalanceSchema = new Schema<IPlayerBalanceDocument>(
  {
    member_account: { type: String, required: true, trim: true, index: true },
    currency_code: { type: String, required: true, trim: true, default: 'BDT' },
    balance: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'player_balance',
  },
);

playerBalanceSchema.index({ member_account: 1, currency_code: 1 }, { unique: true });

export const PlayerBalance: Model<IPlayerBalanceDocument> =
  mongoose.models.PlayerBalance ||
  mongoose.model<IPlayerBalanceDocument>('PlayerBalance', playerBalanceSchema);
