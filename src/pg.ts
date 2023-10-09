import { AuthTypes, Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector'
import pg from 'pg'
import { config } from './config'

async function main() {
  const connector = new Connector()
  const options = await connector.getOptions({
    instanceConnectionName: config.database.instance,
    ipType: config.database.usePublicIp ? IpAddressTypes.PUBLIC : IpAddressTypes.PRIVATE,
    authType: config.database.useIamAuth ? AuthTypes.IAM : AuthTypes.PASSWORD,
  })

  const pool = new pg.Pool({
    user: config.database.user,
    password: config.database.useIamAuth ? undefined : config.database.password,
    database: config.database.name,
    max: config.database.pool.max,
    ...options,
  })

  const { rows } = await pool.query('SELECT true AS is_connected')
  console.table(rows)

  await pool.end()
  connector.close()
}

main().catch(console.error)
