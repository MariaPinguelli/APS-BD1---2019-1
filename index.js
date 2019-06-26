var mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
app.listen(3000);
console.log("Amém API");
app.use('/', router);

function execSQLQuery(sqlQry,res){
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "floricultura",    
});
connection.query(sqlQry, function(error, results, fields){
    if(error)
        res.json(error);
    else
        res.json(results);
    connection.end();
    console.log("Amém Jesus!");
});
}

// execSLQuery.con.connect(function(err) {
//     if (err) throw err;
//     console.log("Amém Deus!");
// });

router.get('/FLOR', (req, res) =>{
    execSQLQuery('SELECT * FROM FLOR', res);
    console.log("Amém Papai!\n");
})

router.get('/FLOR/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID = 10' + parseInt(req.params.id);
    execSQLQuery('SELECT id FROM FLOR' + filter, res);
    console.log("Hello!\n");
})