# Node JS
<br>

## O que vamos aprender
<br>

-   O que é o Backend
-   O que é NodeJS e porque ele é importante
-   Como rodar códigos no servidor
-   O que é o ExpressJS e como utilizá-lo
-   O que é Rest e o que são rotas
-   O que é o MongoDB e como utilizá-lo
-   Como intergrar o mongoDB com o NodeJS
-   Como renderizar páginas no ExpressJS
-   Como criar um TODO list com o ExpressJS
<br>
<hr>

## Entendendo o BackEnd
<br>

### Backend? Servidor?
<br>

-   O Frontend cuida da parte de exibição dos dados para o usuário
-   Backend cuida dos dados em si
-   Para isso, precisamos de uma estrutura que seja capaz de:
    -   Receber e fornecer estes dados
    -   Validar
    -   Armazenar
    -   Assegurar a consistência
<br>
<hr>

## Executando códigos JS no terminal
<br>

```
// Aqui importamos a biblioteca moment instalada
const moment = require('moment')
// Aqui criamos uma função básica para exibir o próprio nome e o horário atual
function sayMyName(name){
    console.log(name)
    console.log(moment().format('HH:mm'))
}

// Aqui chamamos a função
sayMyName("Marcelo Braz")
```
-   Para executar o código no terminal basta digitar 
```
node index.js
```

-   Para utilizar uma biblioteca externa iniciamos o package.json com 
```
npm init -y
```

-   Instalamos a biblioteca moment utilizada para formatar datas  
```
npm install moment --save
```
-   e basta executar no terminal que a saida sera 'Marcelo Braz 11:16'
<hr>
<br>

## Entrada e Saída de Dados
<br>

-   Criamos um arquivo io.js
-   Executamos no terminal node io.js,  irá retornar onde o node está instalado no computador e também irá retornar o caminho onde está o script
-   Também podemos passar dados 'node io.js --myName Marcelo' agora o nome também será exibido
```
-   Importamos uma biblioteca do próprio node chamada process, ela pega todos os parâmetro passados para o script assim que ele é executado
const process = require('process');


// Aqui chamamos a process que irá retornar os argumentos passados para o script,
//console.log(process.argv)

//  O process também tem um método para exibir dados no terminal como o console.log o stdout.write
process.stdout.write('Qual o seu nome?')

// e para enviarmos dados utilizamos o método stdin.on que recebe uma função, o primeiro parãmetro é o evento data e o segundo keyboard que é a variável onde será armazenado
// e para sair chamamos o process.exit se não o terminal irá continuar esperando algo ser inserido

process.stdin.on('data', (keyboard) => {
    process.stdout.write(keyboard)
    process.exit()
})
```
<hr>
<br>

## Manipulando Arquivos
<br>

-   Aqui utilizamos o pacote fs com o método writeFile() utilizado para criar um arquivo, recebe 3 parâmetros o primeiro é o título do arquivo o segundo o conteúdo e o terceiro uma função para o erro
```
// Aqui importamos um pacote do próprio node para manipular arquivos
const fs = require('fs')


fs.writeFile('text.txt', 'Olá NodeJs', err =>{
    console.log(err)
})
//ai basta executar no terminal 'node file.js' que o arquivo será criado
```

-   Também temos o método appendFile recebe os mesmo 3 parãmetros do writeFile porém ele adiciona conteúdos adicionais no arquivo
```
fs.appendFile('text.txt', 'Olá NodeJs\n', err => {
    console.log(err)
})
```

-   Temos o método rename utilizado para renomear algum arquivo, recebe 3 parâmetros o primeiro é o arquivo que será alterado, o segundo o novo nome e o terceiro uma função caso haja erro
```
fs.rename('text.txt', 'teste2.txt', err => console.log(err))
```


-   Temos o unlink, ele é utilizado para remover um arquivo, passamos 2 parâmetro o primeiro é o arquivo que será removido e o segundo uma função para o erro
```
fs.unlink('teste2.txt', err => console.log(err))
```

-   E o node possui uma variável de ambiente __dirname que retorna o caminho para o diretório/pasta atual
```
console.log(__dirname)
```

-   Para ver todos os métodos [Documentação Node](https://nodejs.org/api/fs.html)
<hr>
<br>

## Verbos e status HTTP
<br>

-   Como já dissemos , o HTTP é um protocolo de comunicação web
-   Este protocolo possu "verbos",
    -   Estes verbos ajudam a identificar que tipo de ação queremos realizar numa determinada URL,
    -   Uma URL pode ter mais de um verbo e executar uma ação para cada um,
    -   Por exemplo, GET /users pode executar uma ação diferente de POST /users.  
<br>

-   HTTP possui vários verbos, mas os principais para as URLs são:
    -   GET -   utilizados para solicitar dados
    -   POST -  utilizamos para cadastrar dados
    -   PUT/PATCH - utilizado para atualizar algum dado
    -   DELETE - utilizado para deletar algum dado  
<br>

-   Um verbo junto com uma URL forma uma requisição
<hr>
<br>

### Status de uma requisição HTTP
<br>

-   Os status ajudam a definir como uma requisição HTTP foi processada,
-   Ao fazer uma requisição, o cliente sempre terá uma resposta,
-   Os status são códigos numéricos e cada um possui uma representação,
-   Os status 100 são apenas respostas informativas ao cliente,
-   Os da família 200, são quando uma requisição foi processada com sucesso:
    -   200 -   Requisição processada com sucesso, normalmente em resposta a um GET
    -   201 -   Registro criado com sucesso, normalmente em resposta a um POST      
<br>

-   Os da família 300 apresentam mensagens de redirecionamento
-   Os da família 400 apresentam mensagens de erro que ocorreram no cliente:
    -   400 -   Sintaxe inválida
    -   401 -   Informa que o cliente precisa autenticar
    -   403 -   Informa que o cliente, apesar de autenticado, não tem acesso permitido ao recurso
    -   422 -   Requisição bem formada, mas possui erros semânticos     
<br>

-   Os da família 500 representam dados no servidor
<hr>
<br>

##  Montando um servidor HTTP com NodeJS
<br>

```
// Aqui utilizamos uma biblioteca do próprio Node
const http = require('http')

// Aqui criamos uma variável server e nela utilizamos o método createServer() recebe 2 parâmetros, req que é as informações da requisição passadas pelo browser e res é o que estamos respondendo que será devolvido para o usuário

// nele utilizamos 2 consoles.log um no req.method para exibir o método que está sendo executado, e req.url para ver a url

// também passamos como resposta para o usuário o statusCode como 200, mostrando que a requisição foi um sucesso
// e também utilizamos o método end para enviar uma resposta como uma mensagem ou elemento html para o usuário

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 200
    res.end('<h1>Request foi um sucesso!</h1>')
})

// aqui utilizamos o listen na variável que contem o servidor, o listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 irá cair nesse servidor, o listen também recebe uma função

server.listen(3000, () => {
    console.log('Servidor Ativo!')
})
```
-   Ai só executar 'node server.js' que o servidor será  ativado, e acessar localhost:3000 para ver a resposta do servidor
<hr>
<br>

## Arquitetura MVC (Model View Controller)
<br>

-   MVC vem de Model-View-Controller
-   É um padrão de arquitetura
-   Utilizado para organizar nosso código separando responsabilidades       
<br>

-   Possui 3 responsabilidades principais:
    -   Model:  Responsável por lidar com os dados, desde a sua leitura, armazenamento e validação
    -   View:   é a parte de exibição de dados para o usuário
    -   Controller: responsável por receber as requisições das views e chamar o model correto       
<br>

-   Exemplos:

![Arquitetura MVC]('https://raw.githubusercontent.com/mbrazf/Curso-Fullstack/master/7-Nodejs-mongoDB/prints/arquiteturaMVC.png')

![Zoom Backend]('https://raw.githubusercontent.com/mbrazf/Curso-Fullstack/master/7-Nodejs-mongoDB/prints/zoombackend.png')

<hr>
<br>

## O que é o Express
<br>

-   É um framework minimalista
    -   Não se preocupa em definir padrões de desenvolvimento
-   Opera através de middlewares
-   Segue um padrão chamado Chain of Responsability
-   Se preocupa em entregar apenas a requisição e a resposta, deixando todo o fluxo de dados à escolha do desenvolvedor
<hr>
<br>

### Lista de tarefas com Express
<br>

-   Primeiro criamos um diretório/pasta e utilizamos o npm init para iniciar o npm
-   Criamos um arquivo chamado app.js
-   Instalamos o express 
```
    npm install express --save
```
<hr>

### Primeira Rota com Express
<br>

```
// Aqui importamos o express após instalar
const express = require('express')

// Aqui chamamos o express para poder utilizar os métodos
const app = express()

// Aqui criamos uma rota com o método get(),
// ele recebe 2 parâmetros req e res e enviamos uma resposta para o uusuário com o método send() com uma mensagem
app.get('/', (req, res) => {
    res.send('<h1>Minha Lista de tarefas</h1>')
})

//  o método  listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 e irá cair nesse servidor, o listen também recebe uma função, aqui exibimos uma mensagem no console assim que o servidor for iniciado
app.listen(3000, () => {
    console.log('Servidor Iniciado')
})
```

-   instalamos um pacote chamado nodemon 'npm install nodemon --save-dev' que irá reiniciar o servidor sempre que um arquivo for alterado, para utilizar ele basta digitar o comando npx nodemon

-   ai basta acessar a url localhost:3000 que o servidor estará aberto no browser

-   e no package.json adicionamos um novo comando para executar o nodemon "dev": "nodemon" ai para iniciar o servidor basta utilizar "npm run dev"

```
{
  "name": "5-todo-list-express",
  "version": "1.0.0",
  "description": "Lista de tarefas",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon"
  },
  "author": "Marcelo Braz",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
}
```
<hr>

### Respostas JSON
<br>

```
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
```
<hr>

### Instalando Postman
<br>

-   Postman é uma ferramenta utilizada para testar o backend, as rotas, as requisições
-   Link para download [Postman](https://www.postman.com/downloads/)
-   Após instalar iniciamos o servidor com o 'npm run dev'      
<br>

-   Aqui vemos a tela inicial do Postman

![Postman Tela Inicial]('https://raw.githubusercontent.com/mbrazf/Curso-Fullstack/76c8799d991e2f31527eedd32974e2e9a886cf2a/7-Nodejs-mongoDB/prints/postman1.jpg')
<br>

-   Aqui o primeiro teste do backend

![Postman Primeiro teste]('https://raw.githubusercontent.com/mbrazf/Curso-Fullstack/master/7-Nodejs-mongoDB/prints/postman2.jpg')
<br>

-   E aqui testamos o JSON que retornamos no nosso projeto

![Postman Request JSON]('https://raw.githubusercontent.com/mbrazf/Curso-Fullstack/master/7-Nodejs-mongoDB/prints/postman3.jpg')
<hr>
<br>

## Chain of Responsability
<br>

-   Significa "Cadeia de Responsabilidades"
-   Permite que os objetos sejam encadeados
-   Com o encadeamento, cada objeto verifica se pode enviar uma resposta
    -   Caso não possa, passa para o próximo da cadeia  
<br>

-   É um padrão que o Express se baseou
    -   Permite a busca por uma resposta para uma determinada requisição

--------   Aqui vai uma imagem chainresponsability  ---------
<hr>
<br>

## Middlewares
<br>

-   No Postman criamos um objeto e enviamos uma requisição em localhost:3000/json


-------- Aqui vai uma imagem middleware -----------


-   E aqui criamos os middlewares
```
// Aqui importamos o express após instalar
const express = require('express')

// Aqui chamamos o express para poder utilizar os métodos
const app = express()


// Aqui utilizamos um middleware com use() nele chamamos o express.json, ele verifica ao fazer uma chamada web se tem algum arquivo json e se ele deve processar ele
app.use(express.json())


// Aqui criamos uma função ela contém 3 parâmetros req que é a requisição, res a resposta para o usuário e next que permite que o middleware passe a execução para o próximo middleware, na função exibimos um console.log() com req.body que é o objeto JSON que criamos no Postman e abaixo chamamos o next para passar para o próximo

const log = (req, res, next) => {
    console.log(req.body)
    next();
}

// e aqui chamamos a função criada acima
app.use(log)

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
```
<hr>
<br>

## Concentrando Rotas
<br>

-   Dentro do diretório/pasta do projeto todo list, criamos uma pasta src e dentro dela uma outra pasta chamada routes e nela criamos o arquivo checklist.js

```
-   src/routes/checklist.js


// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// aqui criamos uma rota com o router.get() recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, nessa rota exibimos um console.log() e chamamos o res.send() e deixamos a resposta vazia
router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

// e aqui exportamos o modulo router com as rotas
module.exports = router
```

------- Aqui vai a imagem rotas----------

```
-   app.js


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
```
<hr>
<br>

## Rota POST
<br>

-   Com o POST enviamos informações

-   Aqui criamos uma rota POST
```
-   src/routes/checklist.js


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

// e aqui exportamos o modulo router com as rotas
module.exports = router
```

```
-   app.js

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
```
---- Aqui vai uma imagem -----

-   E aqui o objeto que criamos no body do postman será exibido no terminal do vscode

---- Aqui vai outra imagem -----

<hr>
<br>

## Parâmetros nas rotas
<br>

-   Criamos uma nova rota get
```
-   src/routes/checklists.js

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


// Aqui criamos outra rota do tipo get o caminho será checklists/:id ou seja espera um id e recebe os 2 parâmetros req e res, exibimos um console.log, nele utilizamos o req.params.id ou seja irá pegar o id da url e adicionar no objeto, e abaixo passamos como resposta para o usuário o id
router.get('/:id', (req, res) => {
    console.log(req.params)
    res.send(`ID: ${req.params.id}`)
})

// e aqui exportamos o modulo router com as rotas
module.exports = router
```

---- Aqui vai a imagem paramsid -----------------

-   e aqui no terminal o id passado no postman

----- Aqui vai a imagem paramsidterminal -------------
<hr>
<br>

## Rotas PUT e DELETE
<br>

-   O PUT atualiza os dados e o DELETE remove
```
-   src/routes/checklist.js


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
```

----- Aqui vai a imagem rotasput -------

------ Aqui vai a imagem rotasdelete-------

<hr>
<br>

## Bancos de Dados Relacionais e Não-Relacionais
<br>

### O que é um Banco de Dados
<br>

-   Se formos até a Wikipedia, veremos que Banco de Dados são:
    -   " Coleções organizadas de dados que se relacionam de forma a criar algum sentido(informação) e dar mais eficiência durante uma pesquisa ou estudo."  
<br>

-   São oeprados pelos SGBDs
    -   Sistemas Gerenciadores de Banco de Dados  
<br>

-   Resumidamente os Bancos de Dados hoje são sistemas onde conseguimos organizar e armazenar os nossos dados
<hr>
<br>

### Bancos Relacionais
<br>

-   Os bancos relacionais possuem os dados organizados em forma de tabela
-   Toda a estrutura deve ser criada antes do armazenamento dos dados
    -   Tabelas, colunas, chaves de associação, etc.
    -   Os dados são armazenados como linhas destas tabelas     
<br>

-   Os dados se relacionam entre as tabelas
-   Tem maior confiabilidade e consistência dos dados
    -   Como tem uma estrutura fixa, sabemos exatamente como os dados vão ser inseridos e se relacionar  
<br>

-   A criação da estrutura e armazenamento dos dados é feito por meio de uma linguagem chamada SQL
    -   Structured Query Language       
<br>

-   Exemplos de bancos de dados relacionais
    -   Postgree
    -   MySQL
    -   MariaDB
    -   Oracle  
<hr>
<br>

### Bancos Não-Relacionais
<br>

-   Conhecidos como bancos de dados NoSQL(Not Only SQL)
    -   Como o intuito era uma nova forma de armazenamento de dados que não fosse a estrutura dos relacionais, o correto deveria ser NoRel  
<br>

-   Dentre os bancos NoSQL, temos várias formas de organização
    -   Documento: que armazenam os dados em formato de documents (JSON, XML, etc)
    -   Chave-Valor: armazenam os dados em formato chave-valor      
<br>

-   São mais escaláveis e com melhor performance, mas possuem menor consistência de dados, já que não existe uma estrutura pré-definida     
<br>

-   Exemplos:
    -   MongoDB(Documento)
    -   Redis(chave-valor)
    -   DynamoDB(chave-valor)
    -   Cassandra  
<br>

-   No curso utilizaremos o MongoDB
-   Organizaremos nossos dados em formato de documentos JSON
-   E utilizaremos recursos que permitam mapear os objetos do JS no MongoDB
<hr>
<br>