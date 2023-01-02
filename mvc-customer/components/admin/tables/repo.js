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