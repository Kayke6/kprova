const express = require("express");
const router = express.Router();

const Vendedores = require('../controllers/Vendedores.controller');
const Vendedores = require("../models/vendedores.model");

router.get('/', Vendedores.teste);
router.post('/criar', Vendedores.criar);
router.get('/listar', Vendedores.listar);
router.get('/listar/:id', Vendedores.listar);
router.put('/alterar', Vendedores.alterar);
router.delete('/excluir/:id', Vendedores.excluir);

module.exports = router