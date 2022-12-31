const { imgSrc } = require('./Data');
const home_page_Repository = require('./Repo');
exports.getAll = () => {
  return imgSrc;
};

exports.getByPage = (page) => {
  return imgSrc.find((img_src) => img_src.page === page);
};
exports.change_name = (name, id) => {
  return home_page_Repository.change_name(name, id);
}
// exports.change_age = (name, id) => {
//   return home_page_Repository.change_age(name, id);
// }
// exports.change_gender = (name, id) => {
//   return home_page_Repository.change_gender(name, id);
// }
exports.getID = (id) => home_page_Repository.get(id);

exports.addProduct = (name, price, shortDes, longDes, category, branding, quantity) => {
  return home_page_Repository.addProduct(name, price, shortDes, longDes, category, branding, quantity);
}