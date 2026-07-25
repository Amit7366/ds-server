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
