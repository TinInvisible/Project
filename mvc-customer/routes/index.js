const express = require('express');
const router = express.Router();

const productController = require('../components/products/mainPageController');
const cartApiController = require('../components/cart/api/cartApiController');
const middleware = require('../components/middleware/middleware');

router.get('/', middleware.verify_customer, productController.list);
router.get('/shopping-cart', middleware.verify_customer, cartApiController.cartDetail);
router.post('/shopping-cart', middleware.verify_customer, cartApiController.manage_button);
router.get('/:ProductID', middleware.verify_customer, productController.details);
router.post('/', middleware.verify_customer, cartApiController.add);

module.exports = router;