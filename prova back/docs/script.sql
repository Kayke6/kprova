DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao CHARSET=UTF8 COLLATE utf8_general_ci;
USE avaliacao;

CREATE TABLE vendedores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  matricula VARCHAR(20)
);

CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  valor DECIMAL(10, 2)
);

CREATE TABLE vendas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data DATE,
  quantidade INT,
  produtold INT,
  vendedorld INT,
  FOREIGN KEY (produtold) REFERENCES produtos(id),
  FOREIGN KEY (vendedorld) REFERENCES vendedores(id)
);

SHOW tables;

INSERT INTO vendedores(id,nome,matricula) VALUES
('1','Stefany Antonella','14644'),
('2','Stella Viana','01516'),
('3','Tomas Isaac','50913'),
('4','Osvaldo Galvao','72193');

INSERT INTO produtos(id,nome,valor) VALUES
('1','Samsung Galaxy M53','2211.11'),
('2','Motorola Moto G42','1449.00'),
('3','Rainha das Chamas','36.90'),
('4','Cronicas Saxonicas O cavaleiro da morte','57.90'),
('5','O milgare de manha','56.59'),
('6','Lavadoura de Roupas Brastemp BWK12AB','2199.00'),
('7','Fogao Atlas 4 Bocas','899.00');

select * from produtos;

INSERT INTO vendas(id,data,quantidade,produtold,vendedorld) VALUES
('1','2023-04-18','2','1','3'),
('2','2023-04-18','1','2','3'),
('3','2023-04-18','3','1','2'),
('4','2023-04-18','1','3','2'),
('5','2023-04-18','2','2','1'),
('6','2023-04-18','1','3','1');

select * from vendas;
