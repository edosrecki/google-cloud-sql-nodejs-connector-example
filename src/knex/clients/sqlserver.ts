import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import knex from 'knex'
import { config } from '../../config'

export const buildSqlserverDatabase = async (connector: Connector) => {
  const clientOpts = await connector.getTediousOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: AuthTypes.PASSWORD,
  })

  return knex({
    client: 'mssql',
    connection: {
      server: '0.0.0.0',
      port: 1433,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name,
      options: {
        ...clientOpts,
      },
    },
    pool: config.database.pool,
  })
}
