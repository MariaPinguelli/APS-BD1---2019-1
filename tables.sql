DROP TABLE IF EXISTS  FLOR;
DROP TABLE IF EXISTS  CLIENTE;
DROP TABLE IF EXISTS  PEDIDO;

CREATE TABLE FLOR(
    nome VARCHAR,     /* margaridas, rosas, orquídsas etc */
    tipo VARCHAR (100),     
    corFlor VARCHAR (100),
    qtdeEstoque INTEGER,
    precoUnit VALUE,
    PRIMARY KEY (nome)
);

CREATE TABLE CLIENTE(
    nroCliente INTEGER,
    nomeCliente VARCHAR (100),
    PRIMARY KEY (nroCliente)
);

CREATE TABLE PEDIDO(
    nroCliente INTEGER,
    destino VARCHAR (100),
    PRIMARY KEY (nroCliente),
    FOREIGN KEY (nroCliente) REFERENCES CLIENTE (nroCliente)
);