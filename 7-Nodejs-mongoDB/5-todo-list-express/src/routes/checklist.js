// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')


// aqui criamos uma rota com o router.get() com uma função async recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, utilizamos um try catch para tratar erros e utilizamos o await e utilizamos o método find em Checklist para pegar os dados em vez de enviar como na rota post abaixo, devolvemos o código de status 200 da requisição indicando que foi um sucesso, renderizamos o arquivo index que está na pasta checklists, também passamos uma variável com a checklist  e caso haja algum erro retornamos o código de status 500 indicando um erro e exibimos uma página de erro e passamos uma mensagem de erro para ela 
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', { checklists: checklists})
    }   catch(error){
        res.status(200).render('pages/error', { error: 'Erro ao exibir as Listas'})
    }
})

// Aqui vamos criar uma rota get para criar novas tarefas
// vamo utilizar o try catch se q requisição for um sucesso exibimos a pagina new e se houver um erro iremos exibir a pagina de erro
router.get('/new', async (req, res) => {
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', { checklist: checklist })
    } catch(error){
        res.status(500).render('pages/error', {error: 'Erro ao carregar o formulário'})
    }
})


// Aqui criamos uma rota com o método get para exibir as tarefas na tela de edição
//  no try pegamos as tarefas do banco e exibimos na página de edição, e no catch se houver algum erro irá exibir a página de erro
router.get('/:id/edit', async(req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/edit', { checklist: checklist})
    } catch(error){
        res.status(500).render('pages/error', {error: 'Erro ao exibir a edição da Lista de Tarefas'})
    }
})


/// Aqui pegamos todos os documentos do banco de dados
// aqui criamos uma rota post, para enviar dados, recebe os mesmo parâmetros da rota get, criamos um objeto name que recebe a req.body.checklist, abaixo utilizamos um try catch para tratar erros no try realizaremos a criação de um documento no banco  e redirecionamos para a pagina checklists e caso haja algum erro retornamos o código de erro 422 e exibimos novamente a página de criar tarefas, passamos pra ela um objeto com as tarefas e a mensagem de erro
router.post('/', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = new Checklist({name})
    
    try{
        await checklist.save()
        res.redirect('/checklists')
    } catch (error){
        res.status(422).render('checklists/new', { checklists: { ...checklist, error}})
    }
})


// Aqui pegamos pelo ID desejado
// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e utiliza uma async function recebe os 2 parâmetros req e res, e também utilizamos o populate('tasks') utilizado para injetar as tarefas relacionadas, utilizamos o try catch, no try realizamos a busca utilizando o método findById() que irá buscar os dados pelo ID com o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, retornamos um código de status 200 caso seja sucesso e exibimos a página show que está em checklists, e no catch retornamos o código de status 422 caso houver um erro e exibimos a página de erro e enviamos uma mensagem de erro
router.get('/:id', async (req, res) => {

    try{
        let checklist = await Checklist.findById(req.params.id).populate('tasks')
        res.status(200).render('checklists/show', { checklist: checklist})
    } catch (error){
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas de Tarefas'})
    }
})

// Aqui o método de atualizar os dados
// Aqui criamos uma nova rota do tipo PUT utilizada para atualizar os dados, o caminho será/:id ou seja espera um id, utilizamos uma async function, recebe os 2 parâmetros req e res criamos um objeto name que recebe req.body.checklist a resposta da requisição, buscamos os dados da checklist pelo ID, utilizamos um try catch no try utilizamos o método findByIdAndUpdate que irá buscar os dados pelo Id e irá atualizar seu name,e redirecionamos para a pagina onde exibe as tarefas  retornamos o código de status 200 caso seja sucesso e caso haja um erro no catch exibimos o código 422 e renderizamos a pagina checklist novamente
router.put('/:id', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = await Checklist.findById(req.params.id)

    try {
        await checklist.update({name})
        res.redirect('/checklists')
    } catch (error){
        let errors = error.errors
        res.status(422).render('checklists/edit', {checklist: {...checklist, errors}})
    }
})

// Aqui o método para remover elementos
// Aqui criamos uma nova rota do tipo DELETE utilizada para remover os dados, o caminho será/:id ou seja espera um id, utilizamos uma async function e recebe os 2 parâmetros req e res, utilizamos um try catch no try utilizamos o método findByIdAndRemove que recebe o req.params.id e procura os dados pelo Id e remove, redirecionamos para a pagina checklists e no catch se houver algum erro passamos o código de erro 500 e exibimos a página de erro
router.delete('/:id', async (req, res) => {
    try {
        await Checklist.findByIdAndRemove(req.params.id)
        res.redirect('/checklists')
    } catch (error){
        res.status(500).render('pages/error', { error: 'Erro remover a Listas de Tarefas'})
    }
})

// e aqui exportamos o modulo router com as rotas
module.exports = router