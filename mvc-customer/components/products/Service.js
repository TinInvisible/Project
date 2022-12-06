const { connecttion } = require('../../db');
const {imgSrc} = require('./data');
const productRepository = require('./productsRepository');

exports.getAll = () => {
  return imgSrc;
};

exports.getByPage = (page) => {
  return imgSrc.find((img_src) => img_src.page === page);
};


exports.getAll = () => {
  return productRepository.getAll();
}

exports.filter = (name) => {
  return productRepository.filter(name);
}


exports.get = (id) => productRepository.get(id);

