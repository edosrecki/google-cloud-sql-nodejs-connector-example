resource "google_sql_database_instance" "sqlserver" {
  project             = var.project
  name                = "${var.name}-sqlserver"
  root_password       = random_password.sql_password.result
  region              = var.region
  database_version    = "SQLSERVER_2019_STANDARD"
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
  }
}
