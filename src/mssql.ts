import { Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import mssql from 'mssql'
import { config } from './config'

async function main() {
  const connector = new Connector()
  const options = await connector.getTediousOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
  })

  const pool = await mssql.connect({
    server: 'required-not-used',
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
    pool: {
      max: 5,
    },
    options,
  })

  const { recordset } = await mssql.query`SELECT 'True' AS connected`
  console.table(recordset)

  await pool.close()
  connector.close()
}

main().catch(console.error)
