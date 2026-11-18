CREATE DATABASE IF NOT EXISTS edsols
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE edsols;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  work_email VARCHAR(254) NOT NULL,
  phone_number VARCHAR(50) NULL,
  company VARCHAR(200) NULL,
  message TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_contact_submissions_created_at (created_at)
) ENGINE=InnoDB;
