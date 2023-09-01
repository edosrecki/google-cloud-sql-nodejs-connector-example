# Google Cloud SQL Node.js Connector Example

Example usage of [Google Cloud SQL Node.js Connector][cloud-sql-connector-node] with PostgreSQL and [`knex`][knex]. This is an alternative approach for connecting to Google Cloud SQL instance without needing Google Cloud SQL Auth Proxy.

[cloud-sql-connector-node]: https://github.com/GoogleCloudPlatform/cloud-sql-nodejs-connector
[knex]: https://knexjs.org/

## Setup

1. Create Cloud SQL PostgreSQL instance.
    1. Decide on IP type (public IP, or private IP).
    2. Decide on auth type (built-in user, or IAM user).
2. (Optional) Configure service account for IAM authentication.
    1. Assign `Cloud SQL Client` and `Cloud SQL Instance User` roles.
    2. Download key file or use Application Default Credentials.

## Run

```sh
nvm install
npm install

npm run start:dev

# Expected output:
# [ { connected: true } ]
```
