-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: web
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
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `price` decimal(10,3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

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
  `ProductID` int NOT NULL AUTO_INCREMENT,
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
  `quantity` int DEFAULT NULL,
  `Total_purchase` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetail`
--

LOCK TABLES `productdetail` WRITE;
/*!40000 ALTER TABLE `productdetail` DISABLE KEYS */;
INSERT INTO `productdetail` VALUES (1,67.24,'../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','bla bla','bla bla','Clothing','LuoisVuitton','Pique Biker Jacket','../img/product/product-2.jpg',5,10,NULL),(2,43.28,'../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','',NULL,'Shoes','Channel','vans','../img/product/product-3.jpg',6,12,NULL),(3,60.90,'../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg',NULL,NULL,'Clothing','Hermes','Hoodie','../img/product/product-4.jpg',5,15,NULL),(4,98.49,'../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg',NULL,NULL,'Clothing','Gucci','scarf','../img/product/product-6.jpg',6,10,NULL),(5,49.66,'../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-7.jpg',5,20,NULL),(6,26.28,'../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg',NULL,NULL,'Clothing','Channel','polo','../img/product/product-8.jpg',5,10,NULL),(7,67.24,'../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg',NULL,NULL,'Clothing','Hermes','t-shirt','../img/product/product-9.jpg',5,20,NULL),(8,43.48,'../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg',NULL,NULL,'Bags','Gucci','chest-bag','../img/product/product-10.jpg',5,15,NULL),(9,60.90,'../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg',NULL,NULL,'Bags','LuoisVuitton','bag','../img/product/product-11.jpg',5,12,NULL),(10,98.49,'../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg',NULL,NULL,'Clothing','Channel','Hooide2','../img/product/product-12.jpg',5,15,NULL),(11,49.66,'../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg',NULL,'','Accessory','Hermes','pocket','../img/product/product-13.jpg',5,11,NULL),(12,26.28,'../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg',NULL,NULL,'Accessory','Gucci','accessories','../img/product/product-14.jpg',5,10,NULL);
/*!40000 ALTER TABLE `productdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippingdetail`
--

DROP TABLE IF EXISTS `shippingdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippingdetail` (
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `townCity` varchar(45) DEFAULT NULL,
  `postCode` int DEFAULT NULL,
  `Phone` int DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `IdOrder` int NOT NULL AUTO_INCREMENT,
  `IdUser` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`IdOrder`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippingdetail`
--

LOCK TABLES `shippingdetail` WRITE;
/*!40000 ALTER TABLE `shippingdetail` DISABLE KEYS */;
INSERT INTO `shippingdetail` VALUES ('qthang','thang','vietnam','227nguyenvancu','tphcm',2,123456,'qthang@gmail.com',1,1,100.00,'2023-12-12','DaGiao'),('quoc','thang','vietnam','227 nguyen van cu','tphcm',2,123456,'qthang@gmail.com',2,2,200.00,'2023-01-01','ChuaGiao]');
/*!40000 ALTER TABLE `shippingdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin`
--

DROP TABLE IF EXISTS `user_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` text,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin`
--

LOCK TABLES `user_admin` WRITE;
/*!40000 ALTER TABLE `user_admin` DISABLE KEYS */;
INSERT INTO `user_admin` VALUES (1,'123@gmail.com','$2a$10$Qm.YNy1voAiqv6ipol/IM.WTM8F1wvnFriimVqao9qnrX6kv.LOli','tin'),(2,'bao@gmail.com','$2a$10$uhoUx44ri0Sy1gIRTvkSuOUBgAWPsTq1nMrqXDdR9a5Utr.F51wva','bao'),(3,'admin.abc@gmail.com','$2a$10$oFlOuDl9m95ORUdZEMCgJelcpMsxDO7wigY7/DVAacgEhvVvnBpLi','tin'),(4,'admin.123@gmail.com','$2a$10$f1hrnpt5m8HMcJWpgvECPuOAUsGsYP7uybUykrONssuyzjaXgdvGy','tin');
/*!40000 ALTER TABLE `user_admin` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'abc@gmail.com','$2a$10$vAi664rQcCKI1AhD065cFOT6/IwY4exvW2v2nfvcyPnxABRC.kXKW','xyz','male',21),(4,'thang@gmail.com','$2a$10$WE3iNpN9F7evzo.kzY0VBO5vEykCs4JUE8Bb67C7unAAncUradH9W','thang',NULL,NULL),(5,'teo@gmail.com','$2a$10$OCgXDFJTIpNujnJrhQpc..MoVe26NeJd6B3UIEih8Kl5I024J1hzu','teo',NULL,NULL),(6,'bao123@gmail.com','$2a$10$kcQfTG05B6VnM2nYESRTyucz7p0g1eA7j3cURYfa0pfKcL.ZwgpQ6','bao123',NULL,NULL);
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

-- Dump completed on 2023-01-02  9:54:40
