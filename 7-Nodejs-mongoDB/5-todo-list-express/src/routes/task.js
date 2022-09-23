// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const checklistDependentRoute = express.Router();

// aqui utilizamos o router para criar uma rota
const simpleRouter = express.Router()

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')

// Aqui importamos o model task onde está conectado com o banco de dados
const Task = require('../models/task');



// Aqui criamos uma rota get para exibir a pagina para criar novas tarefas
// no try se houver sucesso passaremos o código 200 de sucesso e exibimos a página para adicionar tarefas na checklist
// se houver erro no catch irá exibir a página de erro
checklistDependentRoute.get('/:id/tasks/new', async(req, res) => {
    try {
        let task = Task()
        res.status(200).render('tasks/new' , { checklistId: req.params.id, task: task})
    } catch (error){
        res.status(422).render('pages/error', { errors: 'Erro ao carregar o fomulário'})
    }
})

// Aqui criamos uma rota para deletar as tarefas da checklist
// no try procuramos a tarefa pelo id , depois pegamos a posição do item nas tasks e removemos o item, salvamos a checklist e redirecionamos para as tarefas
// e no catch se houver algum erro iremos exibir a página de erro
simpleRouter.delete('/:id', async(req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id)
        let checklist = await Checklist.findById(task.checklist)
        let taskToRemove = checklist.tasks.indexOf(task._id)
        checklist.tasks.splice(taskToRemove, 1)
        checklist.save()
        res.redirect(`/checklists/${checklist._id}`)
    } catch(error){
        res.status(422).render('pages/error', { errors: 'Erro ao remover uma tarefa'})
    }
})

// Aqui criamos uma rota post para criar a tarefa e enviar para o banco de dados
// criamos uam variável name que recebe req.body.task
// no try pegamos a tarefa pelo ID e adicionamos ela em tasks e salvamos, e redirecionamos para a pagina checklist no id da tarefa
// no catch se houver erro iremos exibir novamente a página para criar novas tarefas
checklistDependentRoute.post('/:id/tasks', async(req, res) => {
    let { name } = req.body.task
    let task = new Task({ name, checklist: req.params.id })

    try {
        await task.save()
        let checklist = await Checklist.findById(req.params.id)
        checklist.tasks.push(task)
        await checklist.save()
        res.redirect(`/checklists/${req.params.id}`)
    } catch(error){
        let errors = error.errors
        res.status(422).render('tasks/new', { task: { ...task, errors }, checklistId: req.params.id})
    }
})

// Aqui vamos criar uma rota para atualizar se tarefa está ou não concluída
// vamos pegar o id da tarefa, 
// no try vamos setar ela com a resposta da requisição, vamos salvar e exibir o código de status 200 e um json com a tarefa
// e no catch se houver algum erro passamos o código 422 e retornamos o json com as tarefa
simpleRouter.put('/:id', async(req, res) => {
    let task = await Task.findById(req.params.id)
    try{
        task.set(req.body.task)
        await task.save()
        res.status(200).json({ task })
    } catch(error){
        let errors = error. errors
        res.status(422).json({ task: {...errors }})
    }
})

module.exports = { checklistDependent: checklistDependentRoute, simple: simpleRouter }