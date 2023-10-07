import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import { PrismaClient } from '@prisma/client'
import { config } from '../../config'
import { buildProxy, port } from '../proxy'

export const buildPostgresqlDatabase = async (connector: Connector) => {
  const { stream } = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: config.database.useIamAuth ? AuthTypes.IAM : AuthTypes.PASSWORD,
  })

  const proxy = buildProxy(stream)
  const database = new PrismaClient({
    datasourceUrl: config.database.useIamAuth
      ? `postgresql://${config.database.user}@localhost:${port}/${config.database.name}`
      : `postgresql://${config.database.user}:${config.database.password}@localhost:${port}/${config.database.name}`,
  })

  return { proxy, database }
}
