-- MySQL dump 10.13  Distrib 5.6.28, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Global_Work
-- ------------------------------------------------------
-- Server version	5.6.28-0ubuntu0.15.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `Global_Work`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `Global_Work` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `Global_Work`;

--
-- Table structure for table `G_Table`
--

DROP TABLE IF EXISTS `G_Table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `G_Table` (
  `First_Name` text,
  `Last_Name` text,
  `Age` int(11) DEFAULT NULL,
  `Email` text,
  `Country` text,
  `Phone` text,
  `Date` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `G_Table`
--

LOCK TABLES `G_Table` WRITE;
/*!40000 ALTER TABLE `G_Table` DISABLE KEYS */;
INSERT INTO `G_Table` VALUES ('Saeed','Ghiassy',30,'saeed@saeed.com','Australia','041412345','2016-04-21'),('John','Horn',44,'j.horn@sas.com','UK','004412234567','2001-12-13'),('James','Smith',23,'xyxyxy@zzz.com.au','Australia','04147777777','2016-04-26'),('Alex','Lord',66,'A.l@computer.com','Canada','00016566556','2016-09-30'),('Saeed','Tabrizi',44,'saeed.t@unix.com.au','Australia','0123456789','2016-04-13'),('Ali','Rouhani',55,'a.r@galaxy.com','Canada','09887655433','1999-02-10'),('Vahi','Embrahimi',30,'v.h@global.com.au','Australia','0123456789','2016-04-21'),('Saeed','Ghiassy',30,'krang64@gmail.com','Australia','0123456789','1985-04-07'),('Simorgh','Iran',100,'s.g@iran.com.ca','Canada','01234567','2016-04-22'),('Nikola','Tesla',60,'n.t@tesla.com','UK','0101010101010','1856-07-10');
/*!40000 ALTER TABLE `G_Table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-21 12:21:11
