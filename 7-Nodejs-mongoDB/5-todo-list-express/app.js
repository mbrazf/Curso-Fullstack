// Aqui importamos o express após instalar
const express = require('express')

// Aqui importamos uma biblioteca chamada path, ela encontra o caminho que estamos em nosso app, diretório do computador em que estão
const path = require('path')

// Aqui importamos o módulo com as rotas criado em checklist.js
const checkListRouter = require('./src/routes/checklist')

// Aqui importamos o módulo com a rota criado em index.js
const rootRouter = require('./src/routes/index')

// Aqui importamos o arquivo com as configurações do mongoose
require('./config/database')

// Aqui chamamos o express para poder utilizar os métodos
const app = express()

// Aqui utilizamos um middleware com use() nele chamamos o express.json, ele verifica ao fazer uma chamada web se tem algum arquivo json e se ele deve processar ele
app.use(express.json())


// Aqui utilizamos um middleware, irá pegar valores da url e dos form e irá deixar disponível para uso
app.use(express.urlencoded({extended: true}))


// Aqui habilitamos em nosso projeto para poder utilizar arquivos estáticos com o express.static, e com o path.join passamos o nome do diretório e o diretório onde irá ficar esses arquivos estáticos
app.use(express.static(path.join(__dirname ,'public')))


// Aqui configuramos as views com o set, views é o nome do diretório onde iram ficar, path.join une as views recebe 2 parâmetros __dirname que é o nome do arquivo e o segundo é o diretório/pasta em que as views vão ficar
app.set('views', path.join(__dirname, 'src/views'))

// Aqui setamos/definimos que a view engine será o ejs que instalamos
app.set('view engine', 'ejs')


// e aqui utilizamos a rota importada do outro arquivo e utilizamos como se fosse um middleware o primeiro parâmetro é o nome/caminho da url e o segundo a variável em que importamos a rota 
app.use('/', rootRouter)

// e aqui utilizamos a rota importada do outro arquivo e utilizamos como se fosse um middleware o primeiro parâmetro é o nome/caminho da url e o segundo a variável em que importamos a rota 
app.use('/checklists', checkListRouter)


//  o método  listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 e irá cair nesse servidor, o listen também recebe uma função, aqui exibimos uma mensagem no console assim que o servidor for iniciado
app.listen(3000, () => {
    console.log('Servidor Iniciado')
})



