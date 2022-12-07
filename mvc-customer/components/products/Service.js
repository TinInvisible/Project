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

exports.get = (id) => productRepository.get(id);
