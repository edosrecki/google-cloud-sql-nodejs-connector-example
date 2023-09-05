# Google Cloud SQL Node.js Connector Example

Example usage of [Google Cloud SQL Node.js Connector][cloud-sql-connector-node]. This is an alternative approach for connecting to Google Cloud SQL instance without needing Google Cloud SQL Auth Proxy.

Examples include:

* Databases: MySQL, PostgreSQL, and SQL Server
* Libraries: [knex], [sequelize]

[cloud-sql-connector-node]: https://github.com/GoogleCloudPlatform/cloud-sql-nodejs-connector
[knex]: https://knexjs.org/
[sequelize]: https://sequelize.org/

## Google Cloud SQL Setup

1. Create Cloud SQL instance.
    1. Decide on IP type (public IP, or private IP).
    2. Decide on auth type (built-in user, or IAM user).
2. (Optional) Configure service account for IAM authentication.
    1. Assign `Cloud SQL Client` and `Cloud SQL Instance User` roles.
    2. Download key file or use Application Default Credentials.

## Run

```sh
nvm install
npm install

cp .env.example .env

npm run knex:dev
npm run sequelize:dev
```
