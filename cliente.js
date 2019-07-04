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

    con.query(strCliente, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
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

//Busca cliente por nome
router.get('/nome/:nome',(req, res)=>{
    let filter = '';
    if (req.params.nome) filter = 'SELECT * FROM CLIENTE WHERE nomeCliente ="' + req.params.nome+'"';
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Busca cliente por numero
router.get('/numero/:numero',(req, res)=>{
    let filter = '';
    if (req.params.numero) filter = 'SELECT * FROM CLIENTE WHERE nroCliente ="' + req.params.numero+'"';
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Atualiza o cliente
router.put('/',(req, res)=>{
    let cliente = {};
    const { id, nroCliente, nomeCliente} = req.body;
    cliente.id = id;
    cliente.nroCliente = nroCliente;
    cliente.nomeCliente = nomeCliente;

    let filter = '';
    console.log(req.body);
    if (req.body) filter = 'UPDATE CLIENTE SET nroCliente=' + parseInt(cliente.nroCliente) + ' , nomeCliente="'+ cliente.nomeCliente + '"' + ' WHERE id = ' + parseInt(cliente.id);
    console.log(filter);
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.delete('/:id?',(req, res)=>{
    let filter = '';
    if (req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    con.query('DELETE FROM CLIENTE' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

module.exports = router;