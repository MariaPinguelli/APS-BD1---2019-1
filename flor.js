const con = require('./app.js');
const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    con.query('SELECT * FROM FLOR', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    con.query('SELECT * FROM FLOR' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("Selected!\n");
})

router.delete('/FLOR/DELETE/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    execSQLQuery('DELETE FROM FLOR' + filter, res);
    console.log("Deleted!")
})

module.exports = router;