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
      // `server` property is not used when connector is provided, but it is a required property
      // due to a bug in the tedious driver (ref: https://github.com/tediousjs/tedious/issues/1541).
      // There is a pending fix (ref: https://github.com/tediousjs/tedious/pull/1542), but until
      // it is released, we need to provide a dummy value.
      server: '0.0.0.0',
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
