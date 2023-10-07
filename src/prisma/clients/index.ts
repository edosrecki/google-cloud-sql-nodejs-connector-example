import { Connector } from '@google-cloud/cloud-sql-connector'
import { config } from '../../config'
import { generatePrisma } from './generate'
import { buildMysqlDatabase } from './mysql'
import { buildPostgresqlDatabase } from './postgresql'
import { buildSqlserverDatabase } from './sqlserver'

const { type } = config.database

export const buildDatabase = async (connector: Connector) => {
  generatePrisma(type)

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
