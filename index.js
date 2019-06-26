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
    console.log("Connected!");
});
}

// execSLQuery.con.connect(function(err) {
//     if (err) throw err;
//     console.log("Amém Deus!");
// });

router.get('/FLOR', (req, res) =>{
    execSQLQuery('SELECT * FROM FLOR', res);
    console.log("Done!\n");
})

router.get('/FLOR/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM FLOR' + filter, res);
    console.log("Selected!\n");
})

router.delete('/FLOR/DELETE/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    execSQLQuery('DELETE FROM FLOR' + filter, res);
    console.log("Deleted!")
})