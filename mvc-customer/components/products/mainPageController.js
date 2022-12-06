const service = require('./Service');
const createError = require('http-errors');
const qs = require('qs');
exports.get_HomePage = (req,res) => {
    const page = service.getByPage('home-page');
    res.render('products/home-page', page);
}
exports.get_Pages = (req,res) => {
    //res.render('products/list');
    res.render('products/' + req.params.slug);
}
exports.get_Page = (req, res) => {
    const pages = req.params.page;
    const page = service.getByPage(pages);
    res.render('products/' + pages, page); 
}


exports.list = async (req, res) => {
  const { name: nameFilter } = req.query;
  let products = [];
  if (nameFilter)
    products = await productService.filter(nameFilter);
  else
    products = await productService.getAll();
  const {sort, ...withoutSort} = req.query;
  res.render('products/list', {products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`});
};

exports.details = async (req, res, next) => {
  const { productId } = req.params;
  const product = await productService.get(productId);
  if (!product) return next(createError(404));
  res.render('products/details', {product});
};