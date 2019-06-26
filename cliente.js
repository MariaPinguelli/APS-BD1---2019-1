const con = require('./index.js');
const express = require('express');
const router = express.Router();

//Busca todos os clientes
router.get('/',(req, res)=>{
    con.execSQLQuery('SELECT * FROM CLIENTE', res);
    console.log("É tóis!\n");
})

module.exports = router;