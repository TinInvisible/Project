const db = require('../../../db');

exports.getAll_admin = async () => {
  const result = await db.connection.execute('select * from user_admin');
  return result[0];
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