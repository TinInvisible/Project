const express = require('express');
const router = express.Router();

const productController = require('./mainPageController');

router.get('/', productController.list);
router.get('/:productId', productController.details);

module.exports = router;
