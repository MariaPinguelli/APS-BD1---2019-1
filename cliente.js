const con = require('./app.js');
const express = require('express');
const router = express.Router();

//Busca todos os clientes
router.get('/',(req, res)=>{
    con.query('SELECT * FROM CLIENTE', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

module.exports = router;