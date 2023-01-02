const { list } = require('../../products/mainPageController');
const cartService = require('../cartService');

exports.add = (req, res) => {
  const { productId } = req.body;
  // validate valid productId
  // ...
  const { name } = req.body;
  const { reset_but } = req.body;
  const { category } = req.body;
  const { branding } = req.body;
  const { price } = req.body;

  const { sort_price } = req.body;
  if (!req.session.filters && !productId) {
    req.session.filters = {
      name: null,
      category: null,
      branding: null,
      price: null,
      sort_price: null,
      reset: null
    };
  }

  if (!req.session.cart)
    req.session.cart = cartService.initCart();
  if (name) {
    req.session.filters.name = name;
    req.session.filters.branding = null;
    req.session.filters.category = null;
    req.session.filters.price = null;
  }
  if (reset_but) {
    req.session.filters.reset = reset_but;
  }
  if (category) {
    req.session.filters.category = category;
    req.session.filters.name = null;
    req.session.filters.branding = null;
    req.session.filters.price = null;
  }
  if (branding) {
    req.session.filters.branding = branding;
    req.session.filters.name = null;
    req.session.filters.category = null;
    req.session.filters.price = null;
  }
  if (price) {
    req.session.filters.price = price;
    req.session.filters.name = null;
    req.session.filters.category = null;
    req.session.filters.branding = null;
  }
  if (sort_price) {
    req.session.filters.sort_price = sort_price;
  }
  if (productId)
    cartService.add(productId, req.session.cart);
  res.redirect('/home-page/shop');
};

exports.cartDetail = async (req, res) => {
  let list_products = await cartService.cartDetails(req.session.cart);
  let Price = 0;
  if (list_products.products) {
    for (let i = 0; i < list_products.products.length; i++) {
      Price += list_products.products[i].price;
    }
  }
  console.log(list_products);
  res.render('products/shopping-cart', { list_products, Price });
}
exports.manage_button = async (req, res) => {
  const { close } = req.body;
  if (close) {

    for (let i = 0; i < req.session.cart.products.length; i++) {

      if (req.session.cart.products[i].id === close) {

        req.session.cart.products.splice(i, 1);
        break;
      }
    }
  }
  res.redirect('/home-page/shop/shopping-cart');
}