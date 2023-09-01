import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import knex from 'knex'
import { config } from './config'

export const buildDatabase = async () => {
  const connector = new Connector()
  const { stream } = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: config.database.useIamAuth ? AuthTypes.IAM : AuthTypes.PASSWORD,
  })

  return knex({
    client: 'pg',
    connection: {
      user: config.database.user,
      password: config.database.useIamAuth ? undefined : config.database.password,
      database: config.database.name,
      stream,
    },
    pool: config.database.pool,
  })
}
