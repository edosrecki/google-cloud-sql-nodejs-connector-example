import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import { DataSource } from 'typeorm'
import { config } from '../../config'

export const buildSqlserverDatabase = async (connector: Connector) => {
  const clientOpts = await connector.getTediousOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: AuthTypes.PASSWORD,
  })

  return new DataSource({
    type: 'mssql',
    host: 'localhost',
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
    extra: {
      options: {
        ...clientOpts,
      },
    },
  })
}
