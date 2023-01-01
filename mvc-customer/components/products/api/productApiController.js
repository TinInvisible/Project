const productService = require('../Service');
const createError = require('http-errors');
const qs = require('qs');
const Paginator = require('paginator');

const { ITEM_PER_PAGE, TOTAL_PAGING_LINK } = require('../../../constant');
const e = require('express');
let a = 0;
exports.list = async (req, res) => {
  let { page } = req.query;
  if (isNaN(page) || !Number.isInteger(parseFloat(page)) || page < 1) {
    page = 1;
  }
  let filter_name = [];
  let filter_category = [];
  let products = [];
  if (req.session.filters) {
    if (req.session.filters.reset) {
      products = await productService.getProductsWithPaging(parseInt(page));
      req.session.filters = null;
    }
    else {
      if (req.session.filters.name) {
        products = await productService.getProductsWithPaging_name(parseInt(page), req.session.filters.name);
      }
      if (req.session.filters.category) {
        products = await productService.getProductsWithPaging_category(parseInt(page), req.session.filters.category);
      }
      if (req.session.filters.branding) {
        products = await productService.getProductsWithPaging_branding(parseInt(page), req.session.filters.branding);

      }
      if (req.session.filters.price) {
        if (req.session.filters.price === "price1") {
          products = await productService.getProductsWithPaging_price1(parseInt(page));
        }
        if (req.session.filters.price === "price2") {
          products = await productService.getProductsWithPaging_price2(parseInt(page));
        }
        if (req.session.filters.price === "price3") {
          products = await productService.getProductsWithPaging_price3(parseInt(page));
        }
      }
      if (req.session.filters.sort_price) {
        if (products.length === 0)
          products = await productService.getProductsWithPaging(parseInt(page));
        if (req.session.filters.sort_price == "asc_price")
          products.products = productService.sort_asc(products.products, 'Price');
        if (req.session.filters.sort_price == "dsc_price")
          products.products = productService.sort_dsc(products.products, 'Price');
        if (req.session.filters.sort_price == "asc_name")
          products.products = productService.sort_asc(products.products, 'Name');
        if (req.session.filters.sort_price == "dsc_name")
          products.products = productService.sort_dsc(products.products, 'Name');
      }
    }
  }
  else {
    products = await productService.getProductsWithPaging(parseInt(page));
    req.session.filters = null;
  }
  res.json(products);
};