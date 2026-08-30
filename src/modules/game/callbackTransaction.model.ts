import mongoose, { Document, Model, Schema } from 'mongoose';

export type CallbackTransactionStatus = 'completed';

export interface ICallbackGameTransaction {
  serial_number: string;
  member_account: string;
  /** Last 5 chars of member_account when present (user prefix). */
  prefix: string;
  bet_amount: number;
  win_amount: number;
  game_uid: string;
  game_round: string;
  currency_code: string;
  timestamp: string;
  balance_before: number;
  balance_after: number;
  status: CallbackTransactionStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type ICallbackGameTransactionDocument = ICallbackGameTransaction & Document;

const callbackGameTransactionSchema = new Schema<ICallbackGameTransactionDocument>(
  {
    serial_number: { type: String, required: true, trim: true },
    member_account: { type: String, required: true, trim: true, index: true },
    prefix: { type: String, default: '', uppercase: true, trim: true, index: true },
    bet_amount: { type: Number, required: true, default: 0 },
    win_amount: { type: Number, required: true, default: 0 },
    game_uid: { type: String, required: true, trim: true, index: true },
    game_round: { type: String, default: '' },
    currency_code: { type: String, required: true, trim: true, default: 'BDT' },
    timestamp: { type: String, required: true, trim: true, index: true },
    balance_before: { type: Number, required: true, default: 0 },
    balance_after: { type: Number, required: true, default: 0 },
    status: { type: String, required: true, default: 'completed', trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'game_transactions',
  },
);

callbackGameTransactionSchema.index({ serial_number: 1 }, { unique: true });
callbackGameTransactionSchema.index({ member_account: 1, createdAt: -1 });

export const CallbackGameTransaction: Model<ICallbackGameTransactionDocument> =
  mongoose.models.CallbackGameTransaction ||
  mongoose.model<ICallbackGameTransactionDocument>(
    'CallbackGameTransaction',
    callbackGameTransactionSchema,
  );
