const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');

exports.list = async (req, res) => {
  const { name: nameFilter } = req.query;
  const { category } = req.query;
  const { branding } = req.query;
  const { price1 } = req.query;
  const { price2 } = req.query;
  const { price3 } = req.query;
  let products = [];
  if (nameFilter) {
    products = await productService.filter(nameFilter);
  }
  else if (category){
    products = await productService.filter1(category);
  }
  else if (branding){
    products = await productService.filter2(category);
  }
  else if (price1){
    products = await productService.filter3(category);
  }
  else if (price2){
    products = await productService.filter4(category);
  }
   else if (price3){
    products = await productService.filter5(category);
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


exports.sortByPriceAsc = async(req,res,next)=>{

}