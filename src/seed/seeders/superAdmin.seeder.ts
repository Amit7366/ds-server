import { env } from '../../config/env';
import { User } from '../../modules/user/user.model';
import { UserRole, UserStatus, ServiceType } from '../../utils/constants';
import {
  generateApiSecret,
  generatePrefix,
  hashApiSecret,
  hashPassword,
  encryptApiSecret,
} from '../../utils/crypto';
import { seedIfEmpty } from '../helpers';
import { Seeder } from '../types';

export const superAdminSeeder: Seeder = {
  name: 'super_admin',
  async run(ctx) {
    const email = User.normalizeEmail(env.SUPER_ADMIN_EMAIL);

    await seedIfEmpty(
      User,
      { email },
      async () => {
        const apiSecretPlain = generateApiSecret();
        const [password, apiSecretHash] = await Promise.all([
          hashPassword(env.SUPER_ADMIN_PASSWORD),
          hashApiSecret(apiSecretPlain),
        ]);
        const apiSecretEncrypted = encryptApiSecret(apiSecretPlain);

        let prefix = generatePrefix();
        // Extremely unlikely collision; retry a few times
        for (let i = 0; i < 10; i += 1) {
          const taken = await User.exists({ prefix });
          if (!taken) break;
          prefix = generatePrefix();
        }

        await User.create({
          name: env.SUPER_ADMIN_NAME,
          email,
          phone: '0000000000',
          password,
          role: UserRole.SUPER_ADMIN,
          prefix,
          apiSecretHash,
          apiSecretEncrypted,
          whitelistDomain: '',
          whitelistIp: '',
          status: UserStatus.ACTIVE,
          serviceType: ServiceType.LIVE,
          createdBy: null,
        });

        ctx.logger.info(
          `Super admin ready (${email}). Default password from SUPER_ADMIN_PASSWORD env.`,
        );
      },
      ctx,
      `Super admin (${email})`,
    );
  },
};
