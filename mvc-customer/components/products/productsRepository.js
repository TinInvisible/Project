
const db = require('../../db');
const { ITEM_PER_PAGE } = require('../../constant');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from productdetail');
  console.log(result[0]);
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Name like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Category = ?", [name]);
  return result[0];
}
exports.filter2 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Branding = ?", [name]);
  return result[0];
}
exports.filter3 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price <= 50");
  return result[0];
}
exports.filter4 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 50 and Price < 100");
  return result[0];
}
exports.filter5 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 100");
  return result[0];
}
exports.sort_price_asc = async () => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.Price ASC;");
  return result[0];
}
exports.sort_price_dsc = async () => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.price DESC;");
  return result[0];
}
exports.sort_name_asc = async () => {
  const result =  await db.connection.execute("select * from productdetail order  by productdetail.Name ASC;");
  return result[0];
}
exports.sort_name_dsc = async () => {
  const result =  await db.connection.execute("select * from  productdetail order by productdetail.Name DESC;");
  return result[0];
}

//___________________________________________________________

exports.getAll_page = async (limit,offset) => {
  const result =  await db.connection.execute('select * from productdetail limit  ' + limit + 'offset ?',[offset]);
  return result[0];
}

exports.filter_page = async (name,limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Name like ? limit " + limit +"offset ?", [`%${name}%`,offset]);
  return result[0];
}
exports.filter1_page = async (name,limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Category = ? limit "+ limit +"offset ?", [name,offset]);
  return result[0];
}
exports.filter2_page = async (name,limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Branding = ? limit "+ limit +"offset ?", [name,offset]);
  return result[0];
}
exports.filter3_page = async (limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price <= 50 limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.filter4_page = async (limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 50 and Price < 100 limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.filter5_page = async (limit,offset) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 100 limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.sort_price_asc_page = async (limit,offset) => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.Price ASC limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.sort_price_dsc_page = async (limit,offset) => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.price DESC limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.sort_name_asc_page = async (limit,offset) => {
  const result =  await db.connection.execute("select * from productdetail order  by productdetail.Name ASC limit "+ limit +"offset ?", [offset]);
  return result[0];
}
exports.sort_name_dsc_page = async (limit,offset) => {
  const result =  await db.connection.execute("select * from  productdetail order by productdetail.Name DESC limit "+ limit +"offset ?");
  return result[0];
}
exports.sort_name_dsc_page = async () => {
  const result =  await db.connection.execute("select count(*) from  productdetail order by productdetail.Name DESC limit "+ limit +"offset ?");
  return result[0];
}

exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where ProductID = ?", [id]);
  return result[0][0];
}


//------------------------------------------------------

exports.getProducts = async (page) => {
  const result = await db.connection.execute(`select * from productdetail limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`);
  return result[0];
};
exports.getProducts_name = async (page, name) => {
  const result = await db.connection.execute(`select * from productdetail where Name like ? limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`, [`%${name}%`]);
  return result[0];
};
exports.getProducts_category = async (page, category) => {
  const result = await db.connection.execute(`select * from productdetail where Category = ? limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`,[category]);
  return result[0];
};
exports.getProducts_branding = async (page, branding) => {
  const result = await db.connection.execute(`select * from productdetail where Branding = ? limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`,[branding]);
  return result[0];
};
exports.getProducts_price1 = async (page) => {
  const result = await db.connection.execute(`select * from productdetail where Price <= 50 limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`);
  return result[0];
};
exports.getProducts_price2 = async (page) => {
  const result = await db.connection.execute(`select * from productdetail where Price >= 50 and Price <=100 limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`);
  return result[0];
};
exports.getProducts_price3 = async (page) => {
  const result = await db.connection.execute(`select * from productdetail where Price >= 100 limit ${ITEM_PER_PAGE} offset ${(page - 1) * ITEM_PER_PAGE}`);
  return result[0];
};

exports.count = async () => {
  const result = await db.connection.execute(`select count(*) from productdetail`);
  return result[0][0]['count(*)'];
}

exports.count_name = async (name) => {
  const result = await db.connection.execute(`select count(*) from productdetail where Name like ? `, [`%${name}%`]);
  return result[0][0]['count(*)'];
};
exports.count_category = async (category) => {
  const result = await db.connection.execute(`select count(*) from productdetail where Category = ?`,[category]);
  return result[0][0]['count(*)'];
};
exports.count_branding = async (branding) => {
  const result = await db.connection.execute(`select count(*) from productdetail where Branding = ? `,[branding]);
  return result[0][0]['count(*)'];
};
exports.count_price1 = async () => {
  const result = await db.connection.execute(`select count(*) from productdetail where Price <= 50 `);
  return result[0][0]['count(*)'];
};
exports.count_price2 = async () => {
  const result = await db.connection.execute(`select count(*) from productdetail where Price >= 50 and Price <=100 `);
  return result[0][0]['count(*)'];
};
exports.count_price3 = async () => {
  const result = await db.connection.execute(`select count(*) from productdetail where Price >= 100 `);
  return result[0][0]['count(*)'];
};