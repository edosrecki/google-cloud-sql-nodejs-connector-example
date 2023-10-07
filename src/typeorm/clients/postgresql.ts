import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import { DataSource } from 'typeorm'
import { config } from '../../config'

export const buildPostgresqlDatabase = async (connector: Connector) => {
  const clientOpts = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: config.database.useIamAuth ? AuthTypes.IAM : AuthTypes.PASSWORD,
  })

  return new DataSource({
    type: 'postgres',
    username: config.database.user,
    password: config.database.useIamAuth ? undefined : config.database.password,
    database: config.database.name,
    extra: {
      ...clientOpts,
    },
  })
}
