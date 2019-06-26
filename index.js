var mysql = require('mysql');
const express = require('express');
const router = express.Router();
const app = express();

app.listen(3000);
console.log("Amém API");

app.use('/', router);

const cliente = require('./cliente');
app.use('/cliente', cliente);
const flor = require('./flor');
app.use('/FLOR', flor);