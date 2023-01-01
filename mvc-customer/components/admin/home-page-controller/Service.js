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

exports.deleteProduct = (name, category, branding) => {
  return home_page_Repository.deleteProduct(name, category, branding);
}

exports.updateProduct = (name, category, branding, quantity, status) => {
  return home_page_Repository.updateProduct(name, category, branding, quantity, status);
}


exports.getOrderList = () =>{
  return home_page_Repository.getOrderList();
}

exports.getOrderListByTimeAsc = () =>{
  return home_page_Repository.getOrderListByTimeAsc();
}

exports.getOrderListByTimeDesc = () =>{
  return home_page_Repository.getOrderListByTimeDesc();
}

exports.getOrderListByStatus = () =>{
  return home_page_Repository.getOrderListByStatus();
}

exports.getOrderListByStatus1=()=>{
  return home_page_Repository.getOrderListByStatus1();
}

exports.getOrder =(id)=>{
  return home_page_Repository.getOrder(id);
}

exports.filter = (date)=>{
  return home_page_Repository.filter(date);
}