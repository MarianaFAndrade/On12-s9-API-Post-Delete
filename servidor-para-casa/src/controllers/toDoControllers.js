const contatosJson = require("../models/contatos.json")

const getAll = (req, res) => {
    res.status(200).send(contatosJson)
}

const getByName = (req, res) => {
    const nomeRequerido = req.query.nome
    const nomeFiltro = contatosJson.find(nomes => nomes.nome.includes(nomeRequerido))

    res.status(200).send(nomeFiltro)
}

const getById = (req, res) => {
    const idRequerido = req.params.id
    const contatoFiltro = contatosJson.find(contato => contato.id == idRequerido)

    res.status(200).send(contatoFiltro)
}

const novoContatinho = (req, res) => {
    const nomeContatinho = req.body.nome;
    const contatoContatinho = req.body.celular;
    const redesContatinho = req.body.redesSociais;

    const novoCadastro = {
        id: "123",
        nome: nomeContatinho,
        celular: contatoContatinho,
        redesSociais: redesContatinho
    }

    contatosJson.push(novoCadastro);
    res.status(200).send(novoCadastro);

}

const deletarContato = (req, res) => {
    const idSolicitado = req.params.id;
    const contatosFiltrados = contatosJson.find(contatos => contatos.id == idSolicitado)
    const indice = contatosJson.indexOf(contatosFiltrados)

    contatosJson.splice(indice, 1);

    res.status(200).send(
        [
            {
                'message': 'Eu tu não deletava, mas já que tu querer: contato deletado com sucesso'
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByName,
    novoContatinho,
    deletarContato
}