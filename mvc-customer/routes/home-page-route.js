const express = require('express');
const router = express.Router();

const productController = require('../components/home-page/home-page-controller');
const cartController = require('../components/cart/api/cartApiController');
const middleware = require('../components/middleware/middleware')

router.get('/', middleware.verify_customer, productController.getHomePage);
router.get('/profile', middleware.verify_customer, productController.getProFile);
router.post('/profile', middleware.verify_customer, productController.editProfile);
router.get('/checkout', middleware.verify_customer, productController.getCheckOut);
router.post('/checkout', middleware.verify_customer, productController.insertShippingDetail);
router.get('/:slug', middleware.verify_customer, productController.link_to);
router.post('/', middleware.verify_customer, cartController.add);
router.get('/', middleware.verify_customer, cartController.cartDetail);

module.exports = router;