
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from customer_products.product');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.product_details where ProductName like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.product_details where CategoryID = ?", [name]);
  return result[0];
}

exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.product_details where ProductID = ?", [id]);
  return result[0][0];
}
