resource "google_sql_database_instance" "mysql" {
  project             = var.project
  name                = "${var.name}-mysql"
  root_password       = random_password.sql_password.result
  region              = var.region
  database_version    = "MYSQL_8_0"
  deletion_protection = false

  settings {
    tier              = "db-custom-1-3840"
    edition           = "ENTERPRISE"
    availability_type = "ZONAL"
    disk_type         = "PD_SSD"
    disk_size         = 10

    ip_configuration {
      ipv4_enabled = true
    }

    database_flags {
      name  = "cloudsql_iam_authentication"
      value = "on"
    }
  }
}

resource "google_sql_user" "mysql_iam_user" {
  project  = var.project
  name     = google_service_account.service_account.email
  instance = google_sql_database_instance.mysql.name
  type     = "CLOUD_IAM_SERVICE_ACCOUNT"
}
