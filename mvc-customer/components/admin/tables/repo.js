const db = require('../../../db');

exports.getAll_admin = async () => {
  const result = await db.connection.execute('select * from user_admin');
  return result[0];
}
exports.get = async (id, table) => {
  const result = await db.connection.execute("SELECT * FROM " + table + " where id = ?", [id]);
  return result[0][0];
}
exports.getName = async (name, table) => {
  const result = await db.connection.execute('select * from ' + table + ' where name like ?', [`%${name}%`]);
  return result[0];
}
exports.getEmail = async (name, table) => {
  const result = await db.connection.execute('select * from ' + table + ' where email like ?', [`%${name}%`]);
  return result[0];
}
exports.getAll_customer = async () => {
  const result = await db.connection.execute('select * from users');
  return result[0];
}

exports.filter_category = async (category) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Category = ?", [category]);
  return result[0];
}
exports.filter_branding = async (branding) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Branding = ?", [branding]);
  return result[0];
}

//edit product
exports.edit_product_name = async (name, id) => {
  const result = await db.connection.execute("UPDATE productdetail SET Name = ? WHERE ProductID = ?", [name, id]);
}

exports.edit_product_category = async (category, id) => {
  const result = await db.connection.execute("UPDATE productdetail SET Category = ? WHERE ProductID = ?", [category, id]);
}

exports.edit_product_branding = async (branding, id) => {
  const result = await db.connection.execute("UPDATE productdetail SET Branding = ? WHERE ProductID = ?", [branding, id]);
}

exports.edit_product_status = async (status, id) => {
  const result = await db.connection.execute("UPDATE productdetail SET status = ? WHERE ProductID = ?", [status, id]);

}
exports.addProduct = async (name, price, shortDes, longDes, category, branding) => {
  const result = await db.connection.execute("INSERT INTO productdetail (Name, Price, ShortDescription, LongDescription, Category, Branding, Total_purchase) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, price, shortDes, longDes, category, branding, 0])
}
exports.deleteProduct = async (id) => {
  const result = await db.connection.execute("DELETE FROM productdetail WHERE ProductID = ?", [id]);
}