// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// aqui criamos uma rota com o router.get() recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, nessa rota exibimos um console.log() e chamamos o res.send() e deixamos a resposta vazia
router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

// aqui criamos uma outra rota só que agora post, para enviar dados, recebe os mesmo parâmetros da rota get, nela exibimos um console.log() com os dados passados no body do postman, e abaixo passamos o código do status da resposta da chamada e exibimos para o usuário os mesmos dados que passamos no body  
router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})


// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e recebe os 2 parâmetros req e res, exibimos um console.log nele utilizamos o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, e abaixo passamos como resposta para o usuário o id
router.get('/:id', (req, res) => {
    console.log(req.body)
    res.send(`ID: ${req.params.id}`)
})

// Aqui criamos uma nova rota do tipo PUT utilizada para atualizar os dados, o caminho será/:id ou seja espera um id e recebe os 2 parâmetros req e res, exibimos um console.log nele utilizamos o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, e abaixo passamos como resposta para o usuário o id
router.put('/:id', (req, res) => {
    console.log(req.body)
    res.send(`PUT ID: ${req.params.id}`)
})

// Aqui criamos uma nova rota do tipo PUT utilizada para atualizar os dados, o caminho será/:id ou seja espera um id e recebe os 2 parâmetros req e res, exibimos um console.log nele utilizamos o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, e abaixo passamos como resposta para o usuário o id
router.delete('/:id', (req, res) => {
    console.log(req.body)
    res.send(`DELETE ID: ${req.params.id}`)
})

// e aqui exportamos o modulo router com as rotas
module.exports = router