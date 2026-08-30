import { User } from '../user/user.model';
import { ChangePasswordInput, LoginInput } from '../user/user.validation';
import { UserStatus, UserRole } from '../../utils/constants';
import { comparePassword, hashPassword } from '../../utils/crypto';
import { ForbiddenError, UnauthorizedError, ValidationError } from '../../utils/errors';
import {
  signAccessToken,
  signRefreshToken,
  TokenPayload,
  verifyRefreshToken,
} from '../../utils/jwt';
import bcrypt from 'bcryptjs';
import { ggrSettlementService } from '../ggrSettlement/ggrSettlement.service';

export class AuthService {
  private buildPayload(user: { _id: { toString(): string }; email: string; role: TokenPayload['role'] }): TokenPayload {
    return {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };
  }

  async login(input: LoginInput) {
    const email = User.normalizeEmail(input.email);
    const user = await User.findOne({ email }).select('+password +refreshTokenHash');

    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const valid = await comparePassword(input.password, user.password);
    if (!valid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused. Contact your administrator.');
    }

    const payload = this.buildPayload(user);
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    user.refreshTokenHash = await hashPassword(refreshToken);
    await user.save();

    if (user.role === UserRole.SUPER_ADMIN) {
      void ggrSettlementService.autoSettleDueMonths().catch((error) => {
        console.error('[ggr] auto-settle after login failed', error);
      });
    }

    return {
      user: user.toSafeObject(),
      accessToken,
      refreshToken,
    };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedError('Refresh token required');
    }

    let decoded;
    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch {
      throw new UnauthorizedError('Invalid or expired refresh token');
    }

    const user = await User.findById(decoded.sub).select('+refreshTokenHash');
    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedError('Invalid refresh token');
    }

    const matches = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!matches) {
      throw new UnauthorizedError('Invalid refresh token');
    }

    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused');
    }

    if (decoded.role && user.role !== decoded.role) {
      throw new UnauthorizedError('Token role mismatch');
    }

    if (decoded.email && user.email !== decoded.email) {
      throw new UnauthorizedError('Token identity mismatch');
    }

    const payload = this.buildPayload(user);
    const accessToken = signAccessToken(payload);
    const newRefreshToken = signRefreshToken(payload);

    user.refreshTokenHash = await hashPassword(newRefreshToken);
    await user.save();

    return {
      user: user.toSafeObject(),
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  async logout(userId: string) {
    await User.findByIdAndUpdate(userId, { refreshTokenHash: null });
  }

  async changePassword(userId: string, input: ChangePasswordInput) {
    const user = await User.findById(userId).select('+password');
    if (!user) {
      throw new UnauthorizedError('User not found');
    }

    const valid = await comparePassword(input.currentPassword, user.password);
    if (!valid) {
      throw new ValidationError('Current password is incorrect');
    }

    if (input.currentPassword === input.newPassword) {
      throw new ValidationError('New password must be different from current password');
    }

    user.password = await hashPassword(input.newPassword);
    user.refreshTokenHash = null;
    await user.save();
  }

  async me(userId: string) {
    const user = await User.findById(userId);
    if (!user) {
      throw new UnauthorizedError('User not found');
    }
    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused');
    }
    return user.toSafeObject();
  }
}

export const authService = new AuthService();
