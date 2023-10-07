import { Connector } from '@google-cloud/cloud-sql-connector'
import { buildDatabase } from './clients'

async function main() {
  const connector = new Connector()
  const { proxy, database } = await buildDatabase(connector)

  const result = await database.$queryRaw`SELECT 'True' AS connected`
  console.log(result)

  await database.$disconnect()
  proxy.close()
  connector.close()
}

main().catch(console.error)
