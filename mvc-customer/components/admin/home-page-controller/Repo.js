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