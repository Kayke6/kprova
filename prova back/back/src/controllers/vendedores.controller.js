const con = require('../dao/connect')
const vendedores = require('../models/vendedores.model')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new vendedores(lista[i])
    return lista
}

const criar = (req, res) => {
    let vendedores = new vendedores(req.body)
    con.query(vendedores.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let vendedores = new vendedores(req.params)
    con.query(vendedores.read(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let vendedores = new vendedores(req.body)
    con.query(vendedores.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let vendedores = new vendedores(req.params)
    con.query(vendedores.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const teste = (req, res) => {
    res.json("Prova back Respondendo").end()
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}