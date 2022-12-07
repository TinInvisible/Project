
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from customer_products.product');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where customer_products.productdetail.Name like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where Category = ?", [name]);
  return result[0];
}

exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM customer_products.productdetail where ProductID = ?", [id]);
  return result[0][0];
}
