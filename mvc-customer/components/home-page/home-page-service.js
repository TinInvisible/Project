const { connection } = require('../../db');
const home_page_Repository = require('./home-page-repo');
const bcrypt = require('bcryptjs');
exports.change_name = (name, id) => {
    return home_page_Repository.change_name(name, id);
}
exports.change_pass = async (old_pass, new_pass, id) => {

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(new_pass, salt);
    return home_page_Repository.change_pass(hash, id);
}
exports.change_age = (name, id) => {
    return home_page_Repository.change_age(name, id);
}
exports.change_gender = (name, id) => {
    return home_page_Repository.change_gender(name, id);
}
exports.getID = (id) => home_page_Repository.get(id);
exports.update_total_purchase = (num, id) => {
    return home_page_Repository.update_total_purchase(num, id);
}
exports.insertShippingDetail = (firstName, lastName, Country, Address, townCity, postCode, Phone, Email, price, day) => {
    return home_page_Repository.insertShippingDetail(firstName, lastName, Country, Address, townCity, postCode, Phone, Email, price, day);
}