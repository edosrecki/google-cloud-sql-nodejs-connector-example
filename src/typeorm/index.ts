import { Connector } from '@google-cloud/cloud-sql-connector'
import { buildDatabase } from './clients'

async function main() {
  const connector = new Connector()
  const database = await buildDatabase(connector)

  await database.initialize()
  const result = await database.query(`SELECT 'True' AS connected`)
  console.log(result)

  await database.destroy()
  connector.close()
}

main().catch(console.error)
