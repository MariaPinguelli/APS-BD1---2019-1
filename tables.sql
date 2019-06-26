DROP TABLE IF EXISTS  PEDIDO;
DROP TABLE IF EXISTS  FLOR;
DROP TABLE IF EXISTS  CLIENTE;

CREATE TABLE FLOR(
    id INTEGER AUTO_INCREMENT NOT NULL,
    nome VARCHAR (100),     /* margaridas, rosas, orquídeas etc */
    corFlor VARCHAR (100),
    qtdeEstoque INTEGER,
    precoUnit FLOAT,
    PRIMARY KEY (id)
);

CREATE TABLE CLIENTE(
    id INTEGER AUTO_INCREMENT NOT NULL,
    nroCliente INTEGER,
    nomeCliente VARCHAR (100),
    PRIMARY KEY (id)
);

CREATE TABLE PEDIDO(
    idCliente INTEGER,
    idFlor INTEGER,
    qtd INTEGER,
    precoTotal FLOAT,
    destino VARCHAR (100),
    FOREIGN KEY (idCliente) REFERENCES CLIENTE(id),
    FOREIGN KEY (idFlor) REFERENCES FLOR(id),
    PRIMARY KEY (idCliente, idFlor)
);