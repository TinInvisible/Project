const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');

exports.list = async (req, res) => {
  res.render('products/shop');
};

function get_Category(list, id) {
  let arr = [];
  let i = 0;
  for (; i < list.length; i++) {
    if (list[i]['ProductID'] == id)
      break;
  }
  for (let j = 0; j < list.length; j++) {
    if (j != i && list[i]['Category'] == list[j]['Category']) {
      arr.push(list[j]);
    }
  }
  return arr;
}
exports.details = async (req, res, next) => {
  const { ProductID } = req.params;
  let products = [];

  let arr = [];
  products = await productService.getAll();
  arr = get_Category(products, ProductID);

  const product = await productService.get(ProductID);
  if (!product) return next(createError(404));
  res.render('products/shop-details', { product, arr });
};


exports.get_cart = (req, res) => {
  res.render('products/shopping-cart');
}


