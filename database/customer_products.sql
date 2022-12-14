-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: customer_products
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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductID` varchar(5) NOT NULL,
  `Category` varchar(20) DEFAULT NULL,
  `Branding` varchar(20) DEFAULT NULL,
  `ProductName` varchar(45) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `Tags` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('PD01','Clothing','Luois Vuitton','Pique Biker Jacket',67.24,'../img/product/product-2.jpg','Clothing'),('PD02','Shoes','Channel','vans',43.28,'../img/product/product-3.jpg','Shoes'),('PD03','Clothing','Hermes','Hoodie',60.90,'../img/product/product-4.jpg','Clothing'),('PD04','Clothing','Gucci','scarf',98.49,'../img/product/product-6.jpg','Clothing'),('PD05','Bags','Luois Vuitton','bag',49.66,'../img/product/product-7.jpg','Bags'),('PD06','Clothing','Channel','polo',26.28,'../img/product/product-8.jpg','Clothing'),('PD07','Clothing','Hermes','t-shirt',67.24,'../img/product/product-9.jpg','Clothing'),('PD08','Bags','Gucci','chest-bag',43.48,'../img/product/product-10.jpg','Bags'),('PD09','Bags','Luois Vuitton','bag',60.90,'../img/product/product-11.jpg','Bags'),('PD10','Clothing','Channel','Hooide2',98.49,'../img/product/product-12.jpg','Clothing'),('PD11','Accessories','Hermes','pocket',49.66,'../img/product/product-13.jpg','Accessories'),('PD12','Accessories','Gucci','accessories',26.28,'../img/product/product-14.jpg','Accessories');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productdetail`
--

DROP TABLE IF EXISTS `productdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productdetail` (
  `ProductID` varchar(5) NOT NULL,
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
  PRIMARY KEY (`ProductID`),
  CONSTRAINT `productdetail_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  CONSTRAINT `productdetail_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetail`
--

LOCK TABLES `productdetail` WRITE;
/*!40000 ALTER TABLE `productdetail` DISABLE KEYS */;
INSERT INTO `productdetail` VALUES ('PD01',67.24,'../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','bla bla','bla bla','Clothing','LuoisVuitton','Pique Biker Jacket','../img/product/product-2.jpg'),('PD02',43.28,'../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','',NULL,'Shoes','Channel','vans','../img/product/product-3.jpg'),('PD03',60.90,'../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg',NULL,NULL,'Clothing','Hermes','Hoodie','../img/product/product-4.jpg'),('PD04',98.49,'../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg',NULL,NULL,'Clothing','Gucci','scarf','../img/product/product-6.jpg'),('PD05',49.66,'../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-7.jpg'),('PD06',26.28,'../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg',NULL,NULL,'Clothing','Channel','polo','../img/product/product-8.jpg'),('PD07',67.24,'../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg',NULL,NULL,'Clothing','Hermes','t-shirt','../img/product/product-9.jpg'),('PD08',43.48,'../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg',NULL,NULL,'Bags','Gucci','chest-bag','../img/product/product-10.jpg'),('PD09',60.90,'../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-11.jpg'),('PD10',98.49,'../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg',NULL,NULL,'Clothing','Channel','Hooide2','../img/product/product-12.jpg'),('PD11',49.66,'../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg',NULL,'','Accessory','Hermes','pocket','../img/product/product-13.jpg'),('PD12',26.28,'../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg',NULL,NULL,'Accessory','Gucci','accessories','../img/product/product-14.jpg');
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

-- Dump completed on 2022-12-14  9:37:34
