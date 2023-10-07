import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import { PrismaClient } from '@prisma/client'
import { config } from '../../config'
import { buildProxy, port } from '../proxy'

export const buildSqlserverDatabase = async (connector: Connector) => {
  const { stream } = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: AuthTypes.PASSWORD,
  })

  const proxy = buildProxy(stream)
  const database = new PrismaClient({
    datasourceUrl: `sqlserver://localhost:${port};user=${config.database.user};password=${config.database.password};database=${config.database.name};encrypt=false;trustServerCertificate=true`,
  })

  return { proxy, database }
}
