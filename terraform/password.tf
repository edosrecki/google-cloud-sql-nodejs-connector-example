resource "random_password" "sql_password" {
  length  = 12
  special = false
}
