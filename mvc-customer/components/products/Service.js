const { connection } = require('../../db');
const productRepository = require('./productsRepository');
const Paginator = require('paginator');
const { ITEM_PER_PAGE, TOTAL_PAGING_LINK } = require('../../constant');

exports.getAll = () => {
  return productRepository.getAll();
}
exports.get_by_pages = (arr, limit, offset) => {
  let result = []
  const s = limit + offset;
  const size = arr.length < s ? arr.length:s; 
  for(var i = offset;i<size;i++){
    result.push(arr[i]);
  }
  return result;
}
exports.filter = (name) => {
  return productRepository.filter(name);
}

exports.filter1 = (name) => {
  return productRepository.filter1(name);
}
exports.filter2 = (name) => {
  return productRepository.filter2(name);
}
exports.filter3 = () => {
  return productRepository.filter3();
}
exports.filter4 = () => {
  return productRepository.filter4();
}
exports.filter5 = () => {
  return productRepository.filter5();
}
exports.sort_price_asc = () => {
  return productRepository.sort_price_asc();
}
exports.sort_price_dsc = () => {
  return productRepository.sort_price_dsc();
}
exports.sort_name_asc = () => {
  return productRepository.sort_name_asc();
}
exports.sort_name_dsc = () => {
  return productRepository.sort_name_dsc();
}
exports.get = (id) => productRepository.get(id);


exports.sortByPriceAsc =() =>  {
  return productRepository.sortByPriceAsc();
}


exports.sortByPriceDesc =() =>  {
  return productRepository.sortByPriceDesc();
}


exports.sortByNameDesc =() =>  {
  return productRepository.sortByNameDesc();
}


exports.sortByNameAsc =() =>  {
  return productRepository.sortByNameAsc();
}
















//____________________________________________

exports.getAll_page = () => {
  return productRepository.getAll();
}

exports.filter_page = (name) => {
  return productRepository.filter_page(name);
}

exports.filter1_page = (name) => {
  return productRepository.filter1_page(name);
}
exports.filter2_page = (name) => {
  return productRepository.filter2_page(name);
}
exports.filter3_page = () => {
  return productRepository.filter3_page();
}
exports.filter4_page = () => {
  return productRepository.filter4_page();
}
exports.filter5_page = () => {
  return productRepository.filter5_page();
}
exports.sort_price_asc_page = () => {
  return productRepository.sort_price_asc_page();
}
exports.sort_price_dsc_page = () => {
  return productRepository.sort_price_dsc_page();
}
exports.sort_name_asc_page = () => {
  return productRepository.sort_name_asc_page();
}
exports.sort_name_dsc_page = () => {
  return productRepository.sort_name_dsc_page();
}
exports.get = (id) => productRepository.get(id);

exports.getProducts = (page) => productRepository.getProducts(page);

exports.getProductsWithPaging = async (page) =>{
  const products = await productRepository.getProducts(page);
  const productCount = await productRepository.count();
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}

exports.getProductsWithPaging_name = async (page,name) =>{
  const products = await productRepository.getProducts_name(page,name);
  const productCount = await productRepository.count_name(name);
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}
exports.getProductsWithPaging_category = async (page,category) =>{
  const products = await productRepository.getProducts_category(page,category);
  const productCount = await productRepository.count_category(category);
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}
exports.getProductsWithPaging_branding = async (page,branding) =>{
  const products = await productRepository.getProducts_branding(page,branding);
  const productCount = await productRepository.count_category(branding);
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}
exports.getProductsWithPaging_price1 = async (page) =>{
  const products = await productRepository.getProducts_price1(page);
  const productCount = await productRepository.count_price1();
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}
exports.getProductsWithPaging_price2 = async (page) =>{
  const products = await productRepository.getProducts_price2(page);
  const productCount = await productRepository.count_price2();
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}
exports.getProductsWithPaging_price3 = async (page) =>{
  const products = await productRepository.getProducts_price3(page);
  const productCount = await productRepository.count_price3();
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}

exports.find_similar = (list1, list2) => {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if(list1[i].id === list2[j].id){
        result.push(list1[i]);
      }
    }
  }
  return result;
}
exports.find_similar = (list1, list2) => {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if(list1[i].id === list2[j].id){
        result.push(list1[i]);
      }
    }
  }
  return result;
}
exports.sort_asc = (list, target) => {
  for (let i = 0; i < list.length - 1; i++) {
      for (let j = i + 1; j < list.length; j++) {
          if(list[i][target] > list[j][target]){
              let c = list[i];
              list[i] = list[j];
              list[j] = c;   
          }
      }
  }
  return list;
}
exports.sort_dsc = (list, target) => {
  for (let i = 0; i < list.length - 1; i++) {
      for (let j = i + 1; j < list.length; j++) {
          if(list[i][target] < list[j][target]){
              let c = list[i];
              list[i] = list[j];
              list[j] = c;        
          }
      }
  }
  return list;
}