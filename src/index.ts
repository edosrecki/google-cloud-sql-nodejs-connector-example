import { buildDatabase } from './database'

async function main() {
  const database = await buildDatabase()

  const { rows } = await database.raw('SELECT true AS connected')
  console.log(rows)
}

main().catch((error) => {
  console.error(error)
})
