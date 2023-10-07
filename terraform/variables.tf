variable "project" {
  description = "SQL instance project."
  type        = string
}

variable "name" {
  description = "SQL instance name."
  type        = string
}

variable "region" {
  description = "SQL instance region."
  type        = string
  default     = "europe-west3"
}

variable "iam_user" {
  description = "SQL instance IAM user name."
  type        = string
  default     = "my-user"
}
