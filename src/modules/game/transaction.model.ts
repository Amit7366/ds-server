import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IGameTransaction {
  agency_uid: string;
  serial_number: string;
  currency_code: string;
  game_uid: string;
  member_account: string;
  /** Last 5 chars of member_account when present (user prefix). */
  prefix: string;
  bet_amount: string;
  win_amount: string;
  timestamp: string;
  game_round: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IGameTransactionDocument = IGameTransaction & Document;

const gameTransactionSchema = new Schema<IGameTransactionDocument>(
  {
    agency_uid: { type: String, required: true, trim: true, index: true },
    serial_number: { type: String, required: true, trim: true },
    currency_code: { type: String, required: true, trim: true, default: 'BDT' },
    game_uid: { type: String, required: true, trim: true, index: true },
    member_account: { type: String, required: true, trim: true, index: true },
    prefix: { type: String, default: '', uppercase: true, trim: true, index: true },
    bet_amount: { type: String, default: '0' },
    win_amount: { type: String, default: '0' },
    timestamp: { type: String, required: true, trim: true, index: true },
    game_round: { type: String, default: '' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

gameTransactionSchema.index({ serial_number: 1 }, { unique: true });
gameTransactionSchema.index({ prefix: 1, timestamp: -1 });
gameTransactionSchema.index({ agency_uid: 1, timestamp: -1 });

export const GameTransaction: Model<IGameTransactionDocument> =
  mongoose.models.GameTransaction ||
  mongoose.model<IGameTransactionDocument>('GameTransaction', gameTransactionSchema);
