// Aqui importamos o express após instalar
const express = require('express')

// Aqui importamos o módulo com as rotas criado em checklist.js
const checkListRouter = require('./src/routes/checklist')

// Aqui chamamos o express para poder utilizar os métodos
const app = express()

// Aqui utilizamos um middleware com use() nele chamamos o express.json, ele verifica ao fazer uma chamada web se tem algum arquivo json e se ele deve processar ele
app.use(express.json())


// e aqui utilizamos a rota importada do outro arquivo e utilizamos como se fosse um middleware o primeiro parâmetro é o nome/caminho da url e o segundo a variável em que importamos a rota 
app.use('/checklists', checkListRouter)


//  o método  listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 e irá cair nesse servidor, o listen também recebe uma função, aqui exibimos uma mensagem no console assim que o servidor for iniciado
app.listen(3000, () => {
    console.log('Servidor Iniciado')
})