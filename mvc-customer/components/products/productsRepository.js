
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from customer_products.productdetail');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Name like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Category = ?", [name]);
  return result[0];
}
exports.filter2 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Branding = ?", [name]);
  return result[0];
}
exports.filter3 = async () => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Price <= 50");
  return result[0];
}
exports.filter4 = async () => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Price > 50 and Price < 100");
  return result[0];
}
exports.filter5 = async () => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Price > 100");
  return result[0];
}
exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where ProductID = ?", [id]);
  return result[0][0];
}
