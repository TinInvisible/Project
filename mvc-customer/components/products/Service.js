const { connection } = require('../../db');
const productRepository = require('./productsRepository');

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



