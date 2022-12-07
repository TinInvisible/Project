const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');

exports.list = async (req, res) => {
  const { name: nameFilter } = req.query;
  const { category } = req.query;
  let products = [];
  if (nameFilter) {
    products = await productService.filter(nameFilter);
  }
  else if (category){
    products = await productService.filter1(category);
  }
  else
    products = await productService.getAll();
  const { sort, ...withoutSort } = req.query;
  res.render('products/shop', { products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
};

exports.details = async (req, res, next) => {
  const { ProductID } = req.params;
  console.log(ProductID);
  const product = await productService.get(ProductID);
  if (!product) return next(createError(404));
  res.render('products/shop-details', { product });
};
exports.detail = (req, res) =>
{
  res.render('products/shop-details');
}