// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')

// Aqui criamos os documentos para o banco

// aqui criamos uma rota com o router.get() com uma função async recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, utilizamos um try catch para tratar erros e utilizamos o await e utilizamos o método find em Checklist para pegar os dados em vez de enviar como na rota post abaixo, devolvemos o código de status 200 da requisição indicando que foi um sucesso e caso haja algum erro retornamos o código de status 500 indicando um erro 
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).json(checklists)
    }   catch(error){
        res.status(500).json(error)
    }
})

/// Aqui pegamos todos os documentos do banco de dados

// aqui criamos uma rota post, para enviar dados, recebe os mesmo parâmetros da rota get, criamos um objeto name que recebe a req.body, abaixo utilizamos um try catch para tratar erros no try realizaremos a criação de um documento no banco com o name e devolvemos o código de status 200 da requisição indicando que foi um sucesso e caso haja algum erro retornamos o código de status 422 indicando um erro  
router.post('/', async (req, res) => {
    let { name } = req.body
    
    try{
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch(error){
        res.status(422).json(error)
    }
})

// Aqui pegamos pelo ID desejado

// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e utiliza uma async function recebe os 2 parâmetros req e res, utilizamos o try catch, no try realizamos a busca utilizando o método findById() que irá buscar os dados pelo ID com o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, retornamos um código de status 200 caso seja sucesso, e no catch retornamos o código de status 422 caso houver um erro
router.get('/:id', async (req, res) => {

    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    } catch (error){
        res.status(422).json(error)
    }
})

// Aqui o método de atualizar os dados

// Aqui criamos uma nova rota do tipo PUT utilizada para atualizar os dados, o caminho será/:id ou seja espera um id, utilizamos uma async function, recebe os 2 parâmetros req e res criamos um objeto name que recebe req.body a resposta da requisição, utilizamos um try catch no try utilizamos o método findByIdAndUpdate que irá buscar os dados pelo Id e irá atualizar, recebe 3 parâmetros o req.params.id e o que será atualizado, e também o objeto que foi atualizado retornamos o código de status 200 caso seja sucesso e caso haja um erro no catch exibimos o código 422
router.put('/:id', async (req, res) => {

    let { name } = req.body

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true})
        res.status(200).json(checklist)
    } catch (error){
        res.status(422).json(error)
    }
})

// Aqui o método para remover elementos

// Aqui criamos uma nova rota do tipo DELETE utilizada para remover os dados, o caminho será/:id ou seja espera um id, utilizamos uma async function e recebe os 2 parâmetros req e res, utilizamos um try catch no try utilizamos o método findByIdAndRemove que recebe o req.params.id e procura os dados pelo Id e remove, passamos o código de sucesso 200 e no catch se houver algum erro passamos o código de erro 422
router.delete('/:id', async (req, res) => {

    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    } catch (error){
        res.status(422).json(error)
    }
})

// e aqui exportamos o modulo router com as rotas
module.exports = router