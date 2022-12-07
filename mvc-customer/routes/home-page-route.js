const express = require('express');
const router = express.Router();

const productController = require('../components/home-page/home-page-controller');


router.get('/', productController.getHomePage);
router.get('/:slug', productController.link_to);

module.exports = router;