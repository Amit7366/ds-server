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

export const USER_ROLES = Object.values(UserRole);
export const USER_STATUSES = Object.values(UserStatus);
export const SERVICE_TYPES = Object.values(ServiceType);

/** Default GGR deduction rate (%) when a user has no explicit override. */
export const DEFAULT_GGR_DEDUCTION_PERCENT = 8;

export function resolveGgrDeductionRate(percent?: number | null): number {
  const value =
    typeof percent === 'number' && Number.isFinite(percent)
      ? percent
      : DEFAULT_GGR_DEDUCTION_PERCENT;
  return value / 100;
}
