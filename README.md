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

### Terraform

See [terraform/README.adoc](terraform/README.adoc) for instructions.

### Manual

1. Create Cloud SQL instance(s).
   1. (Optional) Configure private IP connectivity.
   1. (Optional) Enable flag for IAM authentication.
3. (Optional) Create a service account for IAM authentication to the SQL instance.
    1. Assign `Cloud SQL Client` and `Cloud SQL Instance User` roles.
    2. Download JSON key file, or use Application Default Credentials, or service account impersonation.

## Run

```sh
## Install dependencies
## ~~~~~~~~~~~~~~~~~~~~
nvm install
npm install

## Configure environment for a DB that you want to test
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# If you used manual setup
cp .env.postgres.example .env   # PostgreSQL
cp .env.mysql.example .env      # MySQL
cp .env.sqlserver.example .env  # SQL Server

vim .env

# If you used Terraform
cd terraform
terraform output -raw postgres_env > ../.env   # PostgreSQL
terraform output -raw mysql_env > ../.env      # MySQL
terraform output -raw sqlserver_env > ../.env  # SQL Server
cd ..

## Run examples for each library
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm run knex
# { connected: 'True' }

npm run sequelize
# Executing (default): SELECT 1+1 AS result

npm run typeorm
# [ { connected: 'True' } ]
```
