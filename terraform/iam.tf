resource "google_service_account" "service_account" {
  project     = var.project
  account_id  = var.iam_user
  description = "Service account for Cloud SQL instance user."
}

resource "google_project_iam_member" "cloudsql_client" {
  project = var.project
  role    = "roles/cloudsql.client"
  member  = google_service_account.service_account.member
}

resource "google_project_iam_member" "cloudsql_instance_user" {
  project = var.project
  role    = "roles/cloudsql.instanceUser"
  member  = google_service_account.service_account.member
}
