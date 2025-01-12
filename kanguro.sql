-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 12, 2025 at 06:41 AM
-- Server version: 9.1.0
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kanguro`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations_points`
--

DROP TABLE IF EXISTS `locations_points`;
CREATE TABLE IF NOT EXISTS `locations_points` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `locations_points`
--

INSERT INTO `locations_points` (`id`, `name`, `address`, `created_at`, `updated_at`, `latitude`, `longitude`) VALUES
(13, 'Granada', '987 Point F Plaza', '2025-01-12 03:02:37.150757', '2025-01-12 03:02:37.150757', 37.1773, -3.5986),
(12, 'Bilbao', '654 Point E Lane', '2025-01-12 03:02:22.432868', '2025-01-12 03:02:22.432868', 43.263, -2.9349),
(11, 'Seville', '321 Point D Road', '2025-01-12 03:02:00.539250', '2025-01-12 03:02:00.539250', 37.3886, -5.9823),
(10, 'Valencia', '789 Point C Boulevard', '2025-01-12 03:01:45.761540', '2025-01-12 03:01:45.761540', 39.4699, -0.3763),
(9, 'Barcelona', '456 Point B Avenue', '2025-01-10 09:25:32.123000', '2025-01-10 09:25:32.123000', 41.3874, 2.1686),
(8, 'Madrid', '123 Point A Street', '2025-01-12 03:01:06.259982', '2025-01-12 03:01:06.259982', 40.4168, -3.7038),
(14, 'Malaga', '101 Point G Court', '2025-01-12 03:02:50.406192', '2025-01-12 03:02:50.406192', 36.7213, -4.4214),
(15, 'Zaragoza', '202 Point H Square', '2025-01-12 03:03:05.485418', '2025-01-12 03:03:05.485418', 41.6488, -0.8891),
(16, 'Alicante', '303 Point I Circle', '2025-01-12 03:03:17.180782', '2025-01-12 03:03:17.180782', 38.3452, -0.481),
(17, 'Toledo', '404 Point J Alley', '2025-01-12 03:03:28.156997', '2025-01-12 03:03:28.156997', 39.8628, -4.0273),
(18, 'Salamanca', '505 Point K Boulevard', '2025-01-12 03:03:39.422442', '2025-01-12 03:03:39.422442', 40.9701, -5.6635),
(19, 'San Sebastian', '606 Point L Drive', '2025-01-12 03:03:53.459829', '2025-01-12 03:03:53.459829', 43.3224, -1.9858),
(20, 'Pamplona', '707 Point M Street', '2025-01-12 03:04:06.481028', '2025-01-12 03:04:06.481028', 42.8125, -1.6458),
(21, 'Valladolid', '808 Point N Road', '2025-01-12 03:04:19.519155', '2025-01-12 03:04:19.519155', 41.6523, -4.7245),
(22, 'Cordoba', '909 Point O Plaza', '2025-01-12 03:04:37.934956', '2025-01-12 03:04:37.934956', 37.8882, -4.7794),
(23, 'Segovia', '321 Point C Avenue', '2025-01-12 03:06:46.438948', '2025-01-12 03:06:46.438948', 40.9429, -4.1088),
(24, 'Avila', '456 Point D Boulevard', '2025-01-12 03:07:02.490384', '2025-01-12 03:07:02.490384', 40.6565, -4.6818),
(25, 'Alcala de Henares', '654 Point E Lane', '2025-01-12 03:07:17.475821', '2025-01-12 03:07:17.475821', 40.4819, -3.3648),
(26, 'Aranjuez', '987 Point F Street', '2025-01-12 03:07:32.509627', '2025-01-12 03:07:32.509627', 40.0329, -3.6022),
(27, 'El Escorial', '101 Point G Plaza', '2025-01-12 03:08:21.814150', '2025-01-12 03:08:21.814150', 40.5897, -4.1475),
(28, 'Getafe', '202 Point H Avenue', '2025-01-12 03:08:30.950339', '2025-01-12 03:08:30.950339', 40.3083, -3.7327),
(29, 'Leganes', '303 Point I Circle', '2025-01-12 03:08:40.099245', '2025-01-12 03:08:40.099245', 40.3272, -3.7635);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
