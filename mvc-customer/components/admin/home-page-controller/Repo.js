const db = require('../../../db');

exports.change_name = async (name, id) => {
    await db.connection.execute("UPDATE user_admin SET name = ? WHERE (id = ?);", [name, id]);
}
exports.change_age = async (name, id) => {
    await db.connection.execute("UPDATE user_admin SET age = ? WHERE (id = ?);", [name, id]);
}
exports.change_gender = async (name, id) => {
    await db.connection.execute("UPDATE user_admin SET gender = ? WHERE (id = ?);", [name, id]);
}
exports.get = async (id) => {
    const result = await db.connection.execute("SELECT * FROM user_admin where id = ?", [id]);
    return result[0][0];
}

exports.addProduct = async (name, price, shortDes, longDes, category, branding) => {
    const result = await db.connection.execute("INSERT INTO productdetail (Name, Price, ShortDescription, LongDescription, Category, Branding, Total_purchase) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, price, shortDes, longDes, category, branding, 0])
}



exports.updateProduct = async (name, category, branding, quantity, status) => {
    const result = await db.connection.execute("UPDATE FROM ")
}

exports.getOrderList = async ()=>{
    const result = await db.connection.execute("select  * from shippingdetail  ");
    return result[0];
}


exports.getOrderListByTimeAsc = async ()=>{
    const result = await db.connection.execute("select  * from shippingdetail order by date asc ");
    return result[0];
}

exports.getOrderListByTimeDesc = async ()=>{
    const result = await db.connection.execute("select  * from shippingdetail order by date desc ");
    return result[0];
}

exports.getOrderListByStatus = async ()=>{
    const result = await db.connection.execute("select * from shippingdetail where status ='DaGiao'");
    return result[0];
}

exports.getOrderListByStatus1 = async()=>{
    const result  = await db.connection.execute("select * from shippingdetail where status ='ChuaGiao'");
    return result[0];
}


exports.getOrder = async (id) => {
    const result =  await db.connection.execute("SELECT * FROM shippingdetail where IdOrder = ?", [id]);
    return result[0][0];
}

exports.filter = async (date) => {
    const result =  await db.connection.execute("SELECT * FROM shippingdetail where month(date)  like ?", [`%${date}%`]);
    return result[0];
  }

  exports.filter1 = async (date) => {
    const result =  await db.connection.execute("SELECT * FROM shippingdetail where year(date)  like ?", [`%${date}%`]);
    return result[0];
  }





