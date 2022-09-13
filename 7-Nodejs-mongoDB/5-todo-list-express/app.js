// Aqui importamos o express após instalar
const express = require('express')

// Aqui chamamos o express para poder utilizar os métodos
const app = express()

// Aqui criamos uma rota com o método get()
// ele recebe 2 parâmetros req e res e enviamos uma resposta para o uusuário com o método send() com uma mensagem
app.get('/', (req, res) => {
    res.send('<h1>Minha Lista de tarefas : )</h1>')
})


// Aqui criamos uma nova rota, que irá retornar um arquivo json como resposta para o usuário, quando for acessado /json na URL
app.get('/json', (req, res) =>{
    res.json({title: 'Tarefa X', done: true})
})

//  o método  listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 e irá cair nesse servidor, o listen também recebe uma função, aqui exibimos uma mensagem no console assim que o servidor for iniciado
app.listen(3000, () => {
    console.log('Servidor Iniciado')
})



