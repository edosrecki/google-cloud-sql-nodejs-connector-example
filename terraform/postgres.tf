resource "google_sql_database_instance" "postgres" {
  project             = var.project
  name                = "${var.name}-postgres"
  root_password       = random_password.sql_password.result
  region              = var.region
  database_version    = "POSTGRES_15"
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
      name  = "cloudsql.iam_authentication"
      value = "on"
    }
  }
}

resource "google_sql_user" "postgres_iam_user" {
  project  = var.project
  name     = trimsuffix(google_service_account.service_account.email, ".gserviceaccount.com")
  instance = google_sql_database_instance.postgres.name
  type     = "CLOUD_IAM_SERVICE_ACCOUNT"
}
