output "mysql_env" {
  value = <<EOT
DATABASE_TYPE=mysql

DATABASE_INSTANCE=${google_sql_database_instance.mysql.connection_name}
DATABASE_NAME=information_schema

# Use Public IP connectivity
DATABASE_USE_PUBLIC_IP=true

## Uncomment either IAM or Built-in authentication
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## IAM User
# DATABASE_USE_IAM_AUTH=true
# DATABASE_USER=${google_sql_user.mysql_iam_user.name}

## Built-in User
DATABASE_USE_IAM_AUTH=false
DATABASE_USER=root
DATABASE_PASSWORD=${nonsensitive(random_password.sql_password.result)}
  EOT
}

output "postgres_env" {
  value = <<EOT
DATABASE_TYPE=postgresql

DATABASE_INSTANCE=${google_sql_database_instance.postgres.connection_name}
DATABASE_NAME=postgres

# Use Public IP connectivity
DATABASE_USE_PUBLIC_IP=true

## Uncomment either IAM or Built-in authentication
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## IAM User
# DATABASE_USE_IAM_AUTH=true
# DATABASE_USER=${google_sql_user.postgres_iam_user.name}

## Built-in User
DATABASE_USE_IAM_AUTH=false
DATABASE_USER=postgres
DATABASE_PASSWORD=${nonsensitive(random_password.sql_password.result)}
  EOT
}

output "sqlserver_env" {
  value = <<EOT
DATABASE_TYPE=sqlserver

DATABASE_INSTANCE=${google_sql_database_instance.sqlserver.connection_name}
DATABASE_NAME=master

# Use Public IP connectivity
DATABASE_USE_PUBLIC_IP=true

## Built-in User
DATABASE_USE_IAM_AUTH=false
DATABASE_USER=sqlserver
DATABASE_PASSWORD=${nonsensitive(random_password.sql_password.result)}
  EOT
}
