import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import {
  DEFAULT_GGR_DEDUCTION_PERCENT,
  ServiceType,
  UserRole,
  UserStatus,
} from '../../utils/constants';

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  prefix: string;
  apiSecretHash: string;
  apiSecretEncrypted?: string | null;
  whitelistDomain: string;
  whitelistIp: string;
  ggrBalance: number;
  ggrDeductionPercent: number;
  status: UserStatus;
  serviceType: ServiceType;
  createdBy?: Types.ObjectId | null;
  refreshTokenHash?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {
  toSafeObject(extra?: Record<string, unknown>): Record<string, unknown>;
}

export interface IUserModel extends Model<IUserDocument> {
  normalizeEmail(email: string): string;
}

const userSchema = new Schema<IUserDocument, IUserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 255,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
      default: UserRole.USER,
    },
    prefix: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      minlength: 5,
      maxlength: 5,
    },
    apiSecretHash: {
      type: String,
      required: true,
      select: false,
    },
    apiSecretEncrypted: {
      type: String,
      default: null,
      select: false,
    },
    whitelistDomain: {
      type: String,
      default: '',
      trim: true,
      maxlength: 255,
    },
    whitelistIp: {
      type: String,
      default: '',
      trim: true,
      maxlength: 255,
    },
    ggrBalance: {
      type: Number,
      default: 0,
      min: 0,
    },
    ggrDeductionPercent: {
      type: Number,
      default: DEFAULT_GGR_DEDUCTION_PERCENT,
      min: 0,
      max: 100,
    },
    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },
    serviceType: {
      type: String,
      enum: Object.values(ServiceType),
      default: ServiceType.STAGING,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    refreshTokenHash: {
      type: String,
      default: null,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.index({ role: 1, status: 1 });
userSchema.index({ createdAt: -1 });

userSchema.statics.normalizeEmail = function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
};

userSchema.methods.toSafeObject = function toSafeObject(
  this: IUserDocument,
  extra: Record<string, unknown> = {},
) {
  return {
    id: this._id.toString(),
    name: this.name,
    email: this.email,
    phone: this.phone,
    role: this.role,
    prefix: this.prefix,
    whitelistDomain: this.whitelistDomain,
    whitelistIp: this.whitelistIp,
    ggrBalance: this.ggrBalance ?? 0,
    ggrDeductionPercent: this.ggrDeductionPercent ?? DEFAULT_GGR_DEDUCTION_PERCENT,
    status: this.status,
    serviceType: this.serviceType,
    createdBy: this.createdBy ? this.createdBy.toString() : null,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    ...extra,
  };
};

export const User = mongoose.model<IUserDocument, IUserModel>('User', userSchema);
