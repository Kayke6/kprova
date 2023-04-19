class Vendedores {

    constructor(i) {
        this.id = i.matricula
        this.nome = i.nome
        this.matricula = i.matricula

    }

    create() {
        return `INSERT INTO vendedores VALUE(default,'${this.id}','${this.nome}',${this.matricula},CURDATE())`
    }

    read() {
        if (this.matricula == undefined)
            return `SELECT * FROM vendedores`
        else
            return `SELECT * FROM vendedores WHERE matricula = ${this.matricula}`
    }

    update() {
        return `UPDATE vendedores SET nome = '${this.id}', id = '${this.nome}', salario = ${this.matricula}`
    }

    delete() {
        return `DELETE FROM vendedores WHERE matricula = ${this.matricula}`
    }
}

module.exports = Vendedores