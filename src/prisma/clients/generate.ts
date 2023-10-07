import shell from 'shelljs'

export const generatePrisma = (database: string) => {
  shell.exec(`npx prisma generate --schema=./prisma/${database}.prisma > /dev/null`)
}
