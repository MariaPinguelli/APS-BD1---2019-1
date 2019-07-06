const con = require('./app.js');
const express = require('express');
const router = express.Router();

//Cadastra pedido
router.post('/',(req, res)=>{
    let pedido = {};
    const { idCliente, idFlor, qtd, precoTotal, destino} = req.body;
    pedido.idCliente = idCliente;
    pedido.idFlor = idFlor;
    pedido.qtd = qtd;
    pedido.precoTotal = precoTotal;
    pedido.destino = destino;

    const strPedido = parseInt(pedido.idCliente) + ', ' + parseInt(pedido.idFlor) + ','+ parseInt(pedido.qtd) + ',' + parseFloat(pedido.precoTotal) + ', "' + pedido.destino + '" )';

    con.query('INSERT INTO PEDIDO (idCliente, idFlor, qtd, precoTotal, destino) VALUES (' + strPedido, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("Foi mesmo");
})

//Busca todos os pedidos
router.get('/',(req, res)=>{
    con.query('SELECT * FROM PEDIDO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É tóis!\n");
})

//Busca cliente por id
router.get('/',(req, res)=>{
    let ids = {}
    const {idCliente, idFlor} = req.body
    ids.idCliente = idCliente;
    ids.idFlor = idFlor;

    let filter = '';
    if (req.body) filter = ' WHERE idCliente =' + parseInt(ids.idCliente) + 'AND idFlor = ' + parseInt(ids.idFlor);
    con.query('SELECT * FROM PEDIDO ' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Atualiza o pedido
router.put('/',(req, res)=>{
    let pedido = {};
    const { idCliente, idFlor, qtd, precoTotal, destino} = req.body;
    pedido.idCliente = idCliente;
    pedido.idFlor = idFlor;
    pedido.qtd = qtd;
    pedido.precoTotal = precoTotal;
    pedido.destino = destino;

    const strPedido = 'qtd = '+ parseInt(pedido.qtd) + ', precoTotal = ' + parseFloat(pedido.precoTotal) + ', destino = "' + pedido.destino + ' " ';

    con.query('UPDATE PEDIDO SET ' + strPedido + 'WHERE idCliente = '+ parseInt(pedido.idCliente) + ' AND idFlor = ' + parseInt(pedido.idFlor) , (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Deleta pedido pelo id
router.delete('/',(req, res)=>{
    let pedido = {}
    const {idCliente, idFlor} = req.body;
    pedido.idCliente = idCliente;
    pedido.idFlor = idFlor;

    let filter = '';
    if (req.body) filter = ' WHERE idCliente =' + parseInt(pedido.idCliente) + ' AND idFlor = ' + parseInt(pedido.idFlor);
    con.query('DELETE FROM PEDIDO' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

module.exports = router;