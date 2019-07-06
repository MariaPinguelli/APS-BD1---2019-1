var mysql = require('mysql');
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000);
console.log("Amém API");

app.use('/', router);

const cliente = require('./cliente');
app.use('/cliente', cliente);
const flor = require('./flor');
app.use('/flor', flor);
const pedido = require('./pedido');
app.use('/pedido', pedido);