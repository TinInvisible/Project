const express = require('express');
const router = express.Router();

const productController = require('../components/home-page/home-page-controller');
const cartController = require('../components/cart/api/cartApiController');


router.get('/', productController.getHomePage);
router.get('/profile', productController.getProFile);
router.post('/profile', productController.editProfile);
router.get('/checkout', productController.getCheckOut);
router.post('/checkout', productController.insertShippingDetail);
router.get('/:slug', productController.link_to);
router.post('/',cartController.add);
router.get('/',cartController.cartDetail);

module.exports = router;