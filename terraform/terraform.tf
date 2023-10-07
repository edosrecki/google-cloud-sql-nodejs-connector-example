terraform {
  required_version = ">= 1.6.0"

  required_providers {
    google = "~> 5.0.0"
    random = {
      source  = "hashicorp/random"
      version = "3.5.1"
    }
  }
}
