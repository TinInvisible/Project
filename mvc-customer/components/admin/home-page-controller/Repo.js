const db = require('../../../db');

exports.change_name = async (name, id) => {
    await db.connection.execute("UPDATE user_admin SET name = ? WHERE (id = ?);", [name, id]);
}
// exports.change_age = async (name, id) => {
//     await db.connection.execute("UPDATE user_admin SET age = ? WHERE (id = ?);", [name, id]);
// }
// exports.change_gender = async (name, id) => {
//     await db.connection.execute("UPDATE user_admin SET gender = ? WHERE (id = ?);", [name, id]);
// }
exports.get = async (id) => {
    const result = await db.connection.execute("SELECT * FROM user_admin where id = ?", [id]);
    return result[0][0];
}

exports.addProduct = async (name, price, shortDes, longDes, category, branding, quantity) => {
    const result = await db.connection.execute("INSERT INTO productdetail (Name, Price, ShortDescription, LongDescription, Category, Branding, Quantity) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, price, shortDes, longDes, category, branding, quantity])
}

exports.deleteProduct = async (name, category, branding) => {
    const result = await db.connection.execute("DELETE FROM productdetail WHERE Name = ? AND category = ? AND branding = ?", [name, category, branding]);
}

exports.filter_category = async (category) => {
    const result =  await db.connection.execute("SELECT * FROM productdetail where Category = ?", [category]);
    return result[0];
  }
  exports.filter_branding = async (branding) => {
    const result =  await db.connection.execute("SELECT * FROM productdetail where Branding = ?", [branding]);
    return result[0];
  }
