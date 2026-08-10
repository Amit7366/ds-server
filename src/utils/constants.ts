export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  USER = 'user',
}

export enum UserStatus {
  ACTIVE = 'active',
  PAUSE = 'pause',
}

export enum ServiceType {
  STAGING = 'staging',
  LIVE = 'live',
}

export enum UserCurrency {
  BDT = 'BDT',
  INR = 'INR',
  USD = 'USD',
  EUR = 'EUR',
  PHP = 'PHP',
}

export const USER_ROLES = Object.values(UserRole);
export const USER_STATUSES = Object.values(UserStatus);
export const SERVICE_TYPES = Object.values(ServiceType);
export const USER_CURRENCIES = Object.values(UserCurrency);

/** Default account currency when a user has no explicit override. */
export const DEFAULT_USER_CURRENCY = UserCurrency.BDT;

export function resolveUserCurrency(currency?: string | null): UserCurrency {
  if (currency && USER_CURRENCIES.includes(currency as UserCurrency)) {
    return currency as UserCurrency;
  }
  return DEFAULT_USER_CURRENCY;
}

/** Default GGR deduction rate (%) when a user has no explicit override. */
export const DEFAULT_GGR_DEDUCTION_PERCENT = 8;

export function resolveGgrDeductionRate(percent?: number | null): number {
  const value =
    typeof percent === 'number' && Number.isFinite(percent)
      ? percent
      : DEFAULT_GGR_DEDUCTION_PERCENT;
  return value / 100;
}
