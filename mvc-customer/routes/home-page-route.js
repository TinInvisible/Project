const express = require('express');
const router = express.Router();

const productController = require('../components/home-page/home-page-controller');
const cartController = require('../components/cart/api/cartApiController');


router.get('/', productController.getHomePage);
router.get('/profile/:id', productController.getProFile);
router.post('/profile/:id', productController.editProfile);
router.get('/:slug', productController.link_to);
router.post('/',cartController.add);
router.get('/',cartController.cartDetail);
router.post('/checkout', productController.insertShippingDetail);
module.exports = router;