var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vmcyaa50",
    database: "floricultura",
});
module.exports = connection;