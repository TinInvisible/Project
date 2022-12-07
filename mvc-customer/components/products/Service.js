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
exports.filter3 = (name) => {
  return productRepository.filter3(name);
}
exports.filter4 = (name) => {
  return productRepository.filter4(name);
}
exports.filter5 = (name) => {
  return productRepository.filter5(name);
}

exports.get = (id) => productRepository.get(id);
