const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');
const { sort_price_asc } = require('./productsRepository');

exports.list = async (req, res) => {
  const { name: nameFilter } = req.query;
  const { category } = req.query;
  const { branding } = req.query;
  const { price1 } = req.query;
  const { price2 } = req.query;
  const { price3 } = req.query;
  const { sort_price } = req.query;
  let products = [];
  if (nameFilter) {
    products = await productService.filter(nameFilter);
  }
  else if (category) {
    products = await productService.filter1(category);
  }
  else if (branding) {
    products = await productService.filter2(branding);
  }
  else if (price1) {
    products = await productService.filter3();
  }
  else if (price2) {
    products = await productService.filter4();
  }
  else if (price3) {
    products = await productService.filter5();
  }
  else if (sort_price === "asc_price") {
    products = await productService.sort_price_asc();
  }
  else if (sort_price === "dsc_price") {
    products = await productService.sort_price_dsc();
  }
  else if (sort_price === "asc_name") {
    products = await productService.sort_name_asc();
  }
  else if (sort_price === "dsc_name") {
    products = await productService.sort_name_dsc();
  }
  else
    products = await productService.getAll();
  const { sort, ...withoutSort } = req.query;
  res.render('products/shop', { products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
};

exports.details = async (req, res, next) => {
  const { ProductID } = req.params;
  let products = [];
  console.log(ProductID);
  const product = await productService.get(ProductID);
  products = await productService.filter1(ProductID);
  if (!product) return next(createError(404));
  res.render('products/shop-details', { product, products });
};
