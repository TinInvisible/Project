// get the client
// const mysql = require('mysql2/promise');

// const db = {connection: null};

// (async () => {
//   // create the connection to database
//   db.connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'web',
//     password: "quocthang1802"
//   });
//   console.log('Database connected!');
// })();



// (async () => {
//   await connect_database();
//   const result = await db.connection.execute('SELECT * FROM Category');
//   console.log(result[0]);
// })();
// module.exports = db;

const mysql = require('mysql2/promise');

const db = { connection: null };

async function connect_database() {
    // create the connection to database
    db.connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'quocthang1802',
        database: 'web'
    });
    console.log('Database connected!');
};

(async () => {
    await connect_database();
    const result = await db.connection.execute('SELECT * FROM product');
    console.log(result[0]);
})();