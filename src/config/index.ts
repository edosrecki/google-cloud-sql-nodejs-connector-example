import { env } from './env'

export const config = {
  database: {
    instance: env.DATABASE_INSTANCE,
    usePublicIp: env.DATABASE_USE_PUBLIC_IP,
    useIamAuth: env.DATABASE_USE_IAM_AUTH,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    name: env.DATABASE_NAME,
    pool: {
      min: env.DATABASE_POOL_MIN,
      max: env.DATABASE_POOL_MAX,
    },
  },
}
