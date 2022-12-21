-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: customer_products
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productdetail`
--

DROP TABLE IF EXISTS `productdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productdetail` (
  `ProductID` int NOT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `ImgMain1` varchar(45) DEFAULT NULL,
  `ImgMain2` varchar(45) DEFAULT NULL,
  `ImgMain3` varchar(45) DEFAULT NULL,
  `ImgMain4` varchar(45) DEFAULT NULL,
  `ImgThumb1` varchar(45) DEFAULT NULL,
  `ImgThumb2` varchar(45) DEFAULT NULL,
  `ImgThumb3` varchar(45) DEFAULT NULL,
  `ImgThumb4` varchar(45) DEFAULT NULL,
  `ShortDescription` varchar(200) DEFAULT NULL,
  `LongDescription` varchar(2000) DEFAULT NULL,
  `Category` varchar(45) DEFAULT NULL,
  `Branding` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetail`
--

LOCK TABLES `productdetail` WRITE;
/*!40000 ALTER TABLE `productdetail` DISABLE KEYS */;
INSERT INTO `productdetail` VALUES (1,67.24,'../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','bla bla','bla bla','Clothing','LuoisVuitton','Pique Biker Jacket','../img/product/product-2.jpg'),(2,43.28,'../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','',NULL,'Shoes','Channel','vans','../img/product/product-3.jpg'),(3,60.90,'../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg',NULL,NULL,'Clothing','Hermes','Hoodie','../img/product/product-4.jpg'),(4,98.49,'../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg',NULL,NULL,'Clothing','Gucci','scarf','../img/product/product-6.jpg'),(5,49.66,'../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-7.jpg'),(6,26.28,'../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg',NULL,NULL,'Clothing','Channel','polo','../img/product/product-8.jpg'),(7,67.24,'../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg',NULL,NULL,'Clothing','Hermes','t-shirt','../img/product/product-9.jpg'),(8,43.48,'../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg',NULL,NULL,'Bags','Gucci','chest-bag','../img/product/product-10.jpg'),(9,60.90,'../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-11.jpg'),(10,98.49,'../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg',NULL,NULL,'Clothing','Channel','Hooide2','../img/product/product-12.jpg'),(11,49.66,'../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg',NULL,'','Accessory','Hermes','pocket','../img/product/product-13.jpg'),(12,26.28,'../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg',NULL,NULL,'Accessory','Gucci','accessories','../img/product/product-14.jpg');
/*!40000 ALTER TABLE `productdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'abc@gmail.com','$2a$10$vAi664rQcCKI1AhD065cFOT6/IwY4exvW2v2nfvcyPnxABRC.kXKW','Hoodie','male',21);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-21 18:49:58
