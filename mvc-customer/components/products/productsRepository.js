
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from product');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("select * from product where ProductName like ?", [`%${name}%`]);
  return result[0];
}

exports.get = async (id) => {
  const result =  await db.connection.execute('select * from product where ProductID = ?', [id]);
  return result[0][0];
}