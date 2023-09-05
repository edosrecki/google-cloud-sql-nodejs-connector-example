import { Connector } from '@google-cloud/cloud-sql-connector'
import { buildDatabase } from './clients'

async function main() {
  const connector = new Connector()
  const database = await buildDatabase(connector)

  const result = await database.first(database.raw(`'True' AS connected`))
  console.log(result)

  await database.destroy()
  connector.close()
}

main().catch(console.error)
