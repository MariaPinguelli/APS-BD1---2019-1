const con = require('./app.js');
const express = require('express');
const router = express.Router();

//Cadastra cliente
router.post('/',(req, res)=>{
    let cliente = {};
    const { nroCliente, nomeCliente} = req.body;
    cliente.nroCliente = nroCliente;
    cliente.nomeCliente = nomeCliente;

    const strCliente = 'INSERT INTO CLIENTE (nroCliente, nomeCliente) VALUES (' + parseInt(cliente.nroCliente) + ', "' + cliente.nomeCliente + '" )';
    console.log(strCliente);
    con.query(strCliente, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

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

//Busca cliente por id
router.get('/:id?',(req, res)=>{
    let filter = '';
    if (req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    con.query('SELECT * FROM CLIENTE' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})



module.exports = router;