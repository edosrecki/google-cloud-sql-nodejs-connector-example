# Google Cloud SQL Node.js Connector Example

Example usage of [Google Cloud SQL Node.js Connector][cloud-sql-connector-node]. This is an alternative approach for connecting to Google Cloud SQL instance without needing Google Cloud SQL Auth Proxy.

Examples include:

* Databases: MySQL, PostgreSQL, and SQL Server
* Libraries: [knex], [sequelize], [typeorm]

[cloud-sql-connector-node]: https://github.com/GoogleCloudPlatform/cloud-sql-nodejs-connector
[knex]: https://knexjs.org/
[sequelize]: https://sequelize.org/
[typeorm]: https://typeorm.io/

## Google Cloud SQL Setup

1. Create Cloud SQL instance.
    1. Decide on IP type (public IP, or private IP).
    2. Decide on auth type (built-in user, or IAM user).
2. (Optional) Configure service account for IAM authentication.
    1. Assign `Cloud SQL Client` and `Cloud SQL Instance User` roles.
    2. Download key file or use Application Default Credentials.

## Run

```sh
## Install dependencies
## ~~~~~~~~~~~~~~~~~~~~
nvm install
npm install

## Configure environment for a DB that you want to test
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# PostgreSQL
cp .env.postgres.example .env
# MySQL
cp .env.mysql.example .env
# SQL Server
cp .env.sqlserver.example .env

# Update values in .env
vim .env

## Run examples for each library
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm run knex
# { connected: 'True' }

npm run sequelize
# Executing (default): SELECT 1+1 AS result

npm run typeorm
# [ { connected: 'True' } ]
```
