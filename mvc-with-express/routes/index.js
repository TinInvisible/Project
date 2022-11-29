const express = require('express');
const router = express.Router();

const cusController = require('../components/products/productsController');


router.get('/', cusController.get_HomePage);
router.get('/:slug', cusController.get_Pages);

module.exports = router;