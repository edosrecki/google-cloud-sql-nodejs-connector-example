import { Connector } from '@google-cloud/cloud-sql-connector'
import { buildDatabase } from './clients'

async function main() {
  const connector = new Connector()
  const database = await buildDatabase(connector)

  await database.authenticate()

  await database.close()
  connector.close()
}

main().catch(console.error)
