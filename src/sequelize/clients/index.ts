import { Connector } from '@google-cloud/cloud-sql-connector'
import { config } from '../../config'
import { buildSqlserverDatabase } from './sqlserver'
import { buildMysqlDatabase } from './mysql'
import { buildPostgresqlDatabase } from './postgresql'

const { type } = config.database

export const buildDatabase = async (connector: Connector) => {
  switch (type) {
    case 'mysql':
      return buildMysqlDatabase(connector)
    case 'postgresql':
      return buildPostgresqlDatabase(connector)
    case 'sqlserver':
      return buildSqlserverDatabase(connector)
    default:
      throw new Error(`Unknown database type: ${type}`)
  }
}
