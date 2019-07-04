const con = require('./app.js');
const express = require('express');
const router = express.Router();

//Cadastra Flor
router.post('/',(req, res)=>{
    let flor = {};
    const { nome, corFlor, qtdeEstoque, precoUnit } = req.body;
    flor.nome = nome;
    flor.corFlor = corFlor;
    flor.qtdeEstoque = qtdeEstoque;
    flor.precoUnit = precoUnit;

    const strFlor = 'INSERT INTO FLOR (nome, corFlor, qtdeEstoque, precoUnit) VALUES (' + flor.nome + ', "' + flor.corFlor + ', "' + flor.qtdeEstoque +  ')';

    con.query(strFlor, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Busca todas as flores
router.get('/',(req, res)=>{
    con.query('SELECT * FROM FLOR', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("É nozes!\n");
})

//Busca flor por id
router.get('/:id?',(req, res)=>{
    let filter = '';
    if (req.params.id) filter = ' WHERE id =' + parseInt(req.params.id);
    con.query('SELECT * FROM FLOR' + filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Busca flor por nome
router.get('/nome/:nome',(req, res)=>{
    let filter = '';
    if (req.params.nome) filter = 'SELECT * FROM FLOR WHERE nome ="' + req.params.nome+'"';
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Busca flor por preço
router.get('/:preco',(req, res)=>{
    let filter = '';
    if (req.params.numero) filter = 'SELECT * FROM FLOR WHERE precoUnit ="' + req.params.precoUnit+'"';
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Atualiza a flor
router.put('/',(req, res)=>{
    let flor = {};
    const { nome, corFlor, qtdeEstoque, precoUnit } = req.body;
    flor.nome = nome;
    flor.corFlor = corFlor;
    flor.qtdeEstoque = qtdeEstoque;
    flor.precoUnit = precoUnit;
    let filter = '';
    console.log(req.body);
    if (req.body) filter = 'UPDATE FLOR SET =' + parseInt(flor.id) + ' , id="'+ flor.nome + '"' + ' WHERE nome = ' + flor.corFlor + parseInt(flor.qtdeEstoque + parseFloat(flor.precoUnit));
    console.log(filter);
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})



module.exports = router;