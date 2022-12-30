const { connection } = require('../../db');
const home_page_Repository = require('./home-page-repo');

exports.change_name = (name, id) => {
    return home_page_Repository.change_name(name, id);
}
exports.change_age = (name, id) => {
    return home_page_Repository.change_age(name, id);
}
exports.change_gender = (name, id) => {
    return home_page_Repository.change_gender(name, id);
}
exports.getID = (id) => home_page_Repository.get(id);

exports.insertShippingDetail = (firstName, lastName,Country,Address,townCity, postCode, Phone,Email) => {
    return home_page_Repository.insertShippingDetail(firstName, lastName,Country,Address,townCity, postCode, Phone,Email);
  }