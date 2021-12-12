-- Adminer 4.8.1 MySQL 8.0.26 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(150) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userId` (`userId`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `category` (`id`, `userId`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(36,	25,	'car',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(37,	25,	'foodstuff',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(38,	25,	'health',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(39,	25,	'rest',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(40,	25,	'gas',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(41,	25,	'training',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55'),
(42,	25,	'home',	'',	'2021-10-13 17:55:55',	'2021-10-13 17:55:55');

DROP TABLE IF EXISTS `expense`;
CREATE TABLE `expense` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(15,2) DEFAULT NULL,
  `categoryId` smallint unsigned NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `expense_userId` (`userId`),
  KEY `expense_categoryId` (`categoryId`),
  CONSTRAINT `expense_categoryId` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`),
  CONSTRAINT `expense_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) DEFAULT NULL,
  `roles` varchar(256) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `name`, `email`, `password`, `roles`, `is_active`, `created_at`, `updated_at`) VALUES
(1,	'admin',	'admin@admin.io',	'$2a$10$G52DTJ6bgUhLPfJzdQDzi.XUYDzD8aViNzQn6qnmHGQzzuYwL6KTS',	'Admin',	1,	'2021-07-14 18:01:25',	'2021-07-14 18:01:25'),
(2,	'Ida Watson',	'ida.watson@example.com',	'1',	'User',	NULL,	'2021-07-03 19:14:43',	'2021-07-03 19:14:43'),
(3,	'Marshall Barrett',	'marshall.barrett@example.com',	'1',	'User',	NULL,	'2021-07-03 19:14:43',	'2021-07-03 19:14:43'),
(4,	'John Doe',	'john@example.com',	'1',	'User',	NULL,	'2021-07-03 19:14:43',	'2021-07-03 19:14:43'),
(5,	'Asad Rahman',	'asad.dk.bd@gmail.com',	'1',	'User',	NULL,	'2021-07-03 19:14:43',	'2021-07-03 19:14:43'),
(25,	'',	'nickminskwdf@gmail.com',	'358364',	'User',	1,	'2021-10-13 17:55:55',	'2021-10-13 18:00:26');

-- 2021-10-21 19:05:29
