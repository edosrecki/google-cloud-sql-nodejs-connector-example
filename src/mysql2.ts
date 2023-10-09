import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import mysql from 'mysql2/promise'
import { config } from './config'

async function main() {
  const connector = new Connector()
  const clientOpts = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: config.database.useIamAuth ? AuthTypes.IAM : AuthTypes.PASSWORD,
  })

  const pool = await mysql.createPool({
    ...clientOpts,
    user: config.database.user,
    password: config.database.useIamAuth ? undefined : config.database.password,
    database: config.database.name,
  })
  const conn = await pool.getConnection()
  const [result] = await conn.query(`SELECT 'True' as connected`)
  console.table(result)

  await pool.end()
  connector.close()
}

main().catch(console.error)
