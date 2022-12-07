const { connection } = require('../../db');
const productRepository = require('./productsRepository');

exports.getAll = () => {
  return productRepository.getAll();
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


