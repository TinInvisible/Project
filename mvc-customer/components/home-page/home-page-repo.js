const db = require('../../db');

exports.change_name = async (name, id) => {
    await db.connection.execute("UPDATE users SET name = ? WHERE (id = ?);", [name, id]);
}
exports.change_age = async (name, id) => {
    await db.connection.execute("UPDATE users SET age = ? WHERE (id = ?);", [name, id]);
}
exports.change_gender = async (name, id) => {
    await db.connection.execute("UPDATE users SET gender = ? WHERE (id = ?);", [name, id]);
}
exports.get = async (id) => {
    const result = await db.connection.execute("SELECT * FROM users where id = ?", [id]);
    return result[0][0];
}
exports.update_total_purchase = async (num, id) => {
    await db.connection.execute("UPDATE productdetail SET Total_purchase = ? WHERE (ProductID = ?);", [num, id]);
}
exports.insertShippingDetail = async (firstName, lastName, Country, Address, townCity, postCode, Phone, Email, price) => {
    await db.connection.execute('insert into shippingdetail (firstName, lastName,Country,Address,townCity,postCode,Phone,Email,Price, status) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)', [firstName, lastName, Country, Address, townCity, postCode, Phone, Email, price,'ChuaGiao']);
}
