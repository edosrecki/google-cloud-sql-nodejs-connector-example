import * as dotenv from 'dotenv'
import { bool, cleanEnv, num, str } from 'envalid'

dotenv.config()

export const env = cleanEnv(process.env, {
  DATABASE_TYPE: str({
    desc: 'Database type.',
    choices: ['mysql', 'postgresql', 'sqlserver'],
  }),
  DATABASE_INSTANCE: str({
    desc: 'Cloud SQL instance connection name.',
    example: 'my-project:europe-west1:my-instance',
  }),
  DATABASE_USE_PUBLIC_IP: bool({
    desc: 'Connect via public IP, or private IP.',
    default: true,
  }),
  DATABASE_USE_IAM_AUTH: bool({
    desc: 'Connect IAM user, or built-in user.',
    default: true,
  }),
  DATABASE_USER: str({
    desc: `Cloud SQL IAM user. Must have roles: 'Cloud SQL Client', 'Cloud SQL Instance User'.`,
    example: 'my-service-account@my-project.iam',
  }),
  DATABASE_PASSWORD: str({
    desc: 'Optional Cloud SQL built-in user password. Not needed if IAM auth is used.',
    default: '',
  }),
  DATABASE_NAME: str({
    desc: 'Cloud SQL database name.',
    example: 'my-database',
  }),
  DATABASE_POOL_MIN: num({
    desc: 'Database connection pool minimum size.',
    default: 0,
  }),
  DATABASE_POOL_MAX: num({
    desc: 'Database connection pool maximum size.',
    default: 5,
  }),
  GOOGLE_APPLICATION_CREDENTIALS: str({
    desc: 'Optional path to a service account key JSON file, if using IAM auth type.',
    default: '',
  }),
})
