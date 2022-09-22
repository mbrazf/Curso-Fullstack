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

![arquiteturaMVC](https://user-images.githubusercontent.com/72533693/189931324-d710c5c6-df61-419e-8ba2-2f0833f6619e.png)


![zoombackend](https://user-images.githubusercontent.com/72533693/189931840-da1bbe95-b941-4598-8543-ddd51d3ef666.png)

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

![postman1](https://user-images.githubusercontent.com/72533693/189932070-3a668414-7d8c-4336-961b-db430b5989f5.jpg)
<br>

-   Aqui o primeiro teste do backend

![postman2](https://user-images.githubusercontent.com/72533693/189932214-b8111781-6674-4501-a689-89a40872264d.jpg)
<br>

-   E aqui testamos o JSON que retornamos no nosso projeto

![postman3](https://user-images.githubusercontent.com/72533693/189932336-703ae8fa-0205-4d8f-a650-4eb4695656cf.jpg)
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

![chainresponsability](https://user-images.githubusercontent.com/72533693/190190552-bd2baace-6e49-4d60-a08b-cbdf9deca648.png)

<hr>
<br>

## Middlewares
<br>

-   No Postman criamos um objeto e enviamos uma requisição em localhost:3000/json


![middleware](https://user-images.githubusercontent.com/72533693/190190666-a4a1aa12-d87f-48f1-9bb4-23e445bc338a.png)



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

![rotas](https://user-images.githubusercontent.com/72533693/190190805-bab5c672-babe-4611-9c97-1a614d98aa84.png)

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
![rotaspost](https://user-images.githubusercontent.com/72533693/190191404-72ab51a1-9557-4e65-a7a7-6bc32c4c2954.png)

-   E aqui o objeto que criamos no body do postman será exibido no terminal do vscode

![terminalpost](https://user-images.githubusercontent.com/72533693/190197699-99c5c91c-da18-455a-a5ad-ea39c24b5ca7.png)


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

![paramsid](https://user-images.githubusercontent.com/72533693/190197426-89e1036e-b7f9-40d1-a02c-e16273f90812.png)


-   e aqui no terminal o id passado no postman

![paramsidterminal](https://user-images.githubusercontent.com/72533693/190197345-3eab49dd-c58c-4367-9a3a-650dfb2f6255.png)

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

![rotasput](https://user-images.githubusercontent.com/72533693/190197112-43b9fd4c-1d1b-4233-9b56-a00b17099103.png)


![rotasdelete](https://user-images.githubusercontent.com/72533693/190197185-9ceb1a7c-bb12-4c69-8c69-f501e498353b.png)


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

##  O que é o MongoDB
<br>

-   O MongoDB é um Banco de Dados Orientado a Documentos
-   Ele armazena documentos em formato similar a JSON's que não precisam ter uma estrutura previamente definida.  
<br>

-   Exemplo de documento no mongoDB
```
{
    "nave": "apollo",
    "agencia": "nasa",
    "data": "1969",
    "tripulantes": [
        {
            "nome": "William X",
            "idade": "49"
        },
        {
            "nome": "Mark Y",
            "idade": "39"
        }
    ]
}
```
<hr>

### BSON  
<br>

-   O mongoDB internamente representa os documentos JSON em um formato chamado BSON que é uma versão binaria-encodada do JSON para incluir alguns tipos extra de formatos de dados e para codificação e decodificação em linguagens diferentes.

![arquiteturamongodb](https://user-images.githubusercontent.com/72533693/190669984-b3b00c40-985e-4f43-a9a3-5f49e1ff9d53.png)


![comparandomongo](https://user-images.githubusercontent.com/72533693/190670065-d2398bbd-b247-4e56-a792-f33f720f0f0e.png)

<hr>

### Porque usar o MongoDB ?
<br>

-   Sem esquema fixo
-   Alta performance
-   Alta disponibilidade
-   Fácil escalabilidade

<hr>
<br>

### Instalação e uso do MongoDB
<br>

-   Link do video tutorial [Instalando o MongoDB](https://www.youtube.com/watch?v=jrPHWgW78wU)

-   Link para download [MongoDB](https://www.mongodb.com/try/download/community)
-   Desmarcar a opção de instalar como serviço windows  
<br>

-   Após instalar iremos no Disco Local(C:) e vamos criar uma pasta chamada data onde ficaram os bancos de dados e dentro da pasta data criamos uma pasta chamada db, se não ocorrerá um erro na execução do mongo

-   E agora basta acessar o caminho do diretório/pasta aonde o mongo foi instalado no computador pelo terminal
```
   cd C:\Program Files\MongoDB\Server\6.0\bin
```
-   e executar no terminal o comando
```
mongod.exe
```
-   ele irá iniciar o banco de dados
-   então abriremos outra aba no terminal/prompt e nele utilizamos o comando abaixo que é o Mongo Shell que irá conectar ao banco de dados criado
```
mongosh 
```

-   Link para download [MongoShell](https://www.mongodb.com/try/download/shell)

-   e pronto agora só utilizar o mongo
<hr>
<br>

### Alguns comandos do mongoDB
<br>

-   Mostra os bancos de dados disponíveis
```
show dbs   
```

-   Muda para o banco desejado, se não houver o banco ele cria
```
use nomedobanco
```

-   Cria uma nova collection/tabela no banco
```
db.createCollection('nome')
```

-   Exibe as collections/tabelas dentro do banco
```
show collections
```
<hr>
<br>

### Manipulando dados no MongoDB
<br>

-   Insere um novo documento no banco
```
db.nomedacollection.insert({ }) 
```

-   Adiciona um documento na collection
```
db.nomedacollection.insertOne({ documento }) 
```

-   Adiciona múltiplos documentos na collection
```
db.nomedacollection.insertMany({ documentos })  
```

-   Acessa e exibe todos os documentos da collection
```
db.nomedacollection.find()
```

-  também podemos utilizar o find para encontrar algum documento passando ele no parênteses
```
db.nomedacollection.find({ documento })
```

-    Com o updateOne() atualizamos um documento, recebe 3 parâmetros o primeiro é o documento que será alterado, o segundo para poder atualizar utilizamos o $set antes do documento que irá alterar, e depois o novo documento atualizado. 
```
db.nomedacollection.updateOne({ documento que será alterado}, {$set: {documento alterado}})
```
-   Atualiza todos os documentos especificados pelo filter
```
db.nomedacollection.updateMany(filter, update, options)
```

-   Substitui um documento
```
db.nomedacollection.replaceOne({documento que será substituido, {documento substituto})
```

- Remove um documento da collection
```
db.nomedacollection.deleteOne({ documento que será removido}) 
```

- Remove todos os documentos que correspondem a collection
```
db.nomedacollection.deleteMany({ documentos que serão removido}) 
```

-   Remove o banco de dados desejado
```
db.dropDatabase({}) 
```

- Remove uma collection/tabela desejada
```
db.nomedacollection.drop({}) 
```
<br>

-   Para ver a documentação completa [Documentação MongoDB](https://www.mongodb.com/docs/manual/reference/command/)
<hr>
<br>

### Relacionando dados no mongoDB
<br>

### O que são relacionamentos entre os dados
<br>

-   Alguns dados precisam estar linkados a outros para que possamos manipulá-los corretamente, por exemplo, se você possuir no seu banco de dados informações que representem missões espaciais e informações que representem os tripulantes de missões espaciais, é interessante que você possua uma forma de relacionar quais tripulantes participaram de quais missões.
<hr>

### Tipos de associações
<br>

-   one-to-one
-   one-to-many
-   many-many
<hr>

### Vamos ver um exemplo
<br>

-   Imagine que você possua um conjuto de naves espaciais e que cada uma delas possua tripulantes, como você representaria isso no banco de dados?
<hr>

### Documentos embutidos
<br>

-   Todos os dados são englobados dentro do mesmo documento incluindo sub documentos 
```
{   
    "_id": "53535335353535",
    "nave": "apollo",
    "agencia": "nasa",
    "tripulantes": [
        { "nome": "William X"},
        { "nome": "Mark Y"}
    ]
},
{   
    "_id": "53535434343335353535",
    "nave": "Sputnik 1",
    "agencia": "Roskosmos",
    "tripulantes": [
        { "nome": "Mary J"},
        { "nome": "Josep K"}
    ]
}
```
-   Quando usar:
    -   Quando queremos devolver o documento inteiro com uma query simples
    -   Quando sabemos que o documento não vai atingir um tamanho muito grande(como uma nave com milhares de tripulantes)
    -   Quando os dados a serem associados só são úteis junto com o documento que queremos associar
<hr>
<br>

### Referência
<br>

-   Um documento pode referenciar outros documentos em outras collections através do seu ID
-   Aqui referenciamos os tripulantes pelo ID vindo de outra collection
```
{   
    "_id": "53535335353535",
    "nave": "apollo",
    "agencia": "nasa",
    "tripulantes": [
        "2121212121211",
        "32329893289"
    ]
},
{   
    "_id": "53535434343335353535",
    "nave": "Sputnik 1",
    "agencia": "Roskosmos",
    "tripulantes": [
        "29178217821821821",
        "2132421341342324"
    ]
}
```
-   e aqui uma outra collection para os pilotos, cada um tem um documento com um id, nome e nave que podemos referenciar na outra collection
```
{   
    "_id": "53535434343335353535",
    "nome": "Mary J",
    "nave": "32323232323232",
},
{   
    "_id": "53535434343335353535",
    "nome": "Mark Y",
    "nave": "32323232323232",
},
{   
    "_id": "53535434343335353535",
    "nome": "William X",
    "nave": "32323232323232",
},
{   
    "_id": "53535434343335353535",
    "nome": "Josep K",
    "nave": "32323232323232",
}
```
-   Quando usar:
    -   Quando os dados precisarem ser referenciados em muitos locais
    -   Quando queremos selecionar isoladamente os documentos
    -   Quando quisermos ter mais controle sobre as queries
<hr>
<br>
<<<<<<< HEAD

### Associação entre Collections
<br>

-   Primeiro acessamos nosso banco todo-list2 e criamos uma nova collection chamada task
```
use todo-list2

db.createCollection('task')
```

-   Inserimos em checklist uma nova tarefa
```
db.checklist.insertOne({name: 'Atividades da manhã'})
```

-   Inserimos em task uma nova tarefa
```
db.task.insertOne({name: 'Preparar o café', done: false})
```

-   E aqui inserimos múltiplas tarefas em task e relacionamos elas com a tarefa em checklist, para relacionar ela utilizamos o nome da collection em que queremos relacionar com o ID e ObjectId(" ") e nele passamos o Id da tarefa que queremos relacionar com outra
```
db.task.insertMany([{name: "Preparar o café", done: false, checklistId: ObjectId("63286c2a1511092322af87fb")}, {name: "Ligar o af87fb")}, {name: "Ligar o notebook", done: true, checklistId: ObjectId("63286c2a1511092322af87fb")}])
```

-   e ao utilizar o db.task.find() veremos as tarefas relacionadas
```
[
    {
        _id: ObjectId("63286c741511092322af87fc"),
        name: 'Preparar o café',
        done: false
    },
    {
        _id: ObjectId("63286ef71511092322af87fd"),
        name: 'Preparar o café',
        done: false,
        checklistId: ObjectId("63286c2a1511092322af87fb")
    },
    {
        _id: ObjectId("63286ef71511092322af87fe"),
        name: 'Ligar o notebook',
        done: true,
        checklistId: ObjectId("63286c2a1511092322af87fb")
    }
]
```

-   Aqui utilizamos o método aggregate que agrega os valores relacionados, e utilizamos o operador $lookup que irá buscar os documentos associados, from: "task" que será o local onde iremos buscar os documentos, contendo em checklistId o _id de outro documento
```
db.checklist.aggregate({ $lookup: {from: "task", localField: "_id", foreignField: "checklistId", as: "tasks"}})


-   Aqui o retorno da consulta
{
    _id: ObjectId("63247c05e58b69559a6a4eef"),
    name: 'Checklist 2',
    tasks: []
  },
  {
    _id: ObjectId("63286c2a1511092322af87fb"),
    name: 'Atividades da manhã',
    tasks: [
      {
        _id: ObjectId("63286ef71511092322af87fd"),       
        name: 'Preparar o café',
        done: false,
        checklistId: ObjectId("63286c2a1511092322af87fb")
      },
      {
        _id: ObjectId("63286ef71511092322af87fe"),       
        name: 'Ligar o notebook',
        done: true,
        checklistId: ObjectId("63286c2a1511092322af87fb")
      }
```
<hr>
<br>

### Operadores do MongoDB
<br>

-   $lookup -   ele irá buscar os documentos em outra collection
```
db.checklist.aggregate({ $lookup: {from: "task", localField: "_id", foreignField: "checklistId", as: "tasks"}})
```

-   $and    -   utilizamos ele para filtrar melhor as queries utilizando um array, ele irá retornar os documentos atendidos se todas as condições forem verdadeiras
```
db.task.find({ $and: [{name: 'Preparar o café'}, {done: false}]})
```

-   $or -   utilizamos ele também para filtrar utilizando um array, se qualquer uma das condições for atendida ele irá retornar os documentos
```
db.task.find({ $or: [{name: 'Preparar o café'}, {done: true}]})
```

-   $exists -   utilizamos ele para filtrar os documentos se algo existir dentro dele, no exemplo filtramos os documentos que tem o campo checkListId
```
db.task.find({checklistId: {$exists: true}})
```
-   Link para documentação completa [Operadores  MongoDB](https://www.mongodb.com/docs/manual/reference/operator/)
<hr>
<br>

### Instalação Mongoose
<br>

-   Ele é uma ferramenta que conecta o mongoDB com o Node e Express
-   Link documentação completa [Mongoose](https://mongoosejs.com/docs/index.html)

-   Para instalar digite o comando no terminal no diretório do seu projeto
```
npm install mongoose --save
```
-   Criamos uma pasta chamada config e dentro dela criamos um arquivo database.js onde irá conter as configurações do mongoose

```
-   config/database.js


// Aqui importamos o mongoose em uma variável
const mongoose = require('mongoose')

// e aqui iniciamos o mongoose utilizando a Promise global do próprio Node
mongoose.Promise = global.Promise

// aqui utilizamos o método connect, passamos a url onde o banco estará e o banco em que utilizaremos, como é uma promise se a conexão for bem sucedida irá exibir um console.log e se der erro irá exibir um erro
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))
```

-   Importamos esse arquivo de configuração no app.js
```
-   app.js

// Aqui importamos o express após instalar
const express = require('express')

// Aqui importamos o módulo com as rotas criado em checklist.js
const checkListRouter = require('./src/routes/checklist')

// Aqui importamos o arquivo com as configurações do mongoose
require('./config/database')

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

-   e pronto agora basta iniciar o banco de dados mongoDB e no terminal do diretório do projeto iniciar o servidor com o npm run dev
<hr>
<br>

### Mapeamento Objeto-Documento
<br>

-   Criamos em src uma pasta chamada models e dentro dela dois arquivos checklist.js e task.js

```
-   src/models/checklist.js

// Para poder utilizar o mongo importamos o mongoose
const mongoose = require('mongoose')

// Aqui criamos um Schema, ele é o modelo que será utilizado no documento do banco de dados, e criamos um campo name do tipo String e obrigatório, sempre que formos criar uma collection ela terá que ter esse campo name

// e também criamos um campo tasks, nele referenciamos o checklist com as tasks pelo Id
const checklistSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

// Aqui exportamos o módulo, utilizamos o mongoose.model nele passamos o nome que desejamos e o Schema criado
module.exports = mongoose.model('Checklist', checklistSchema)
```

```
-   src/models/task.js

// Para poder utilizar o mongo importamos o mongoose
const mongoose = require('mongoose')

// Aqui criamos um Schema, ele é o modelo que será utilizado no documento do banco de dados, e criamos um campo name do tipo String e obrigatório, sempre que formos criar uma collection ela terá que ter esse campo name, também criamos um campo done para verificar se a tarefa foi concluída por padrão ele será criado como false

// e também criamos um campo checklist para referenciar as tasks com o checklist, nele utilizamos como type o mongoose.Schema.Types.ObjectId para referenciar pelo id de Checklist e ele é obrigatório ou seja só haverá uma task se houver um checklist
const taskSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
})

// Aqui exportamos o módulo, utilizamos o mongoose.model nele passamos o nome que desejamos e o Schema criado
module.exports = mongoose.model('Task', taskSchema);
```

-   e aqui testamos no console do node
```
// Aqui importamos o Schema Checklist
const Checklist = require('./src/models/checklist')

// Aqui importamos o Schema Task
const Task = require('./src/models/task')

// Criamos uma instância vazia de Checklist
let checklist = new Checklist({})

// Aqui adicionamos um documento em checklist mas ocorrerá um erro porque não tem name
checklist.save().then(res => console.log(res)).catch(err => console.log(e))

// e aqui criamos  um documento
 Checklist.create({name: "Criar um novo código"}, (err, checklist) => console.log(checklist))
```
<hr>
<br>

### Models e as Rotas
<br>

```
-   app.js

// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')

// aqui criamos uma rota com o router.get() recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, nessa rota exibimos um console.log() e chamamos o res.send() e deixamos a resposta vazia
router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

// aqui criamos uma rota post com uma async function, para enviar dados, recebe os mesmo parâmetros da rota get, criamos um objeto name que recebe a req.body, abaixo utilizamos um try catch para tratar erros no try realizaremos a criação de um documento com o await no banco com o name e devolvemos o código de status 200 da requisição indicando que foi um sucesso e caso haja algum erro retornamos o código de status 422 indicando um erro 
 
router.post('/', async (req, res) => {
    let { name } = req.body
    
    try{
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch(error){
        res.status(422).json(error)
    }
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

![modelpostmanchecklist](https://user-images.githubusercontent.com/72533693/191072649-af0a23f1-c327-47df-a952-253b8e03f50e.png)
<hr>
<br>

### Listando dados do Model
<br>

```
-   app.js

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

// Aqui pegamos os dados pelo ID desejado

// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e utiliza uma async function recebe os 2 parâmetros req e res, utilizamos o try catch, no try realizamos a busca utilizando o método findById() que irá buscar os dados pelo ID com o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, retornamos um código de status 200 caso seja sucesso, e no catch retornamos o código de status 422 caso houver um erro

router.get('/:id', async (req, res) => {

    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    } catch (error){
        res.status(422).json(error)
    }
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
-   Aqui pegamos todos os dados existentes na checklist
![modelpostmanchecklistget](https://user-images.githubusercontent.com/72533693/191072795-ba935cb3-77e9-406c-85d6-89b2c2d34e8b.png)


-   Aqui pegamos os dados pelo Id desejado
![modelpostmanchecklistgetid](https://user-images.githubusercontent.com/72533693/191072855-ba20459f-369e-4d2c-9f31-03ec60062a1a.png)

<hr>
<br>

### Atualização e Remoção de Dados
<br>

```
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
```
![modelpostmanchecklistput](https://user-images.githubusercontent.com/72533693/191072921-a708ba62-07ac-4fc2-9324-76f1c2f3bb9e.png)


<<<<<<< HEAD
-------- Aqui vai a imagem modelpostmanchecklistdelete -------
=======
>>>>>>> a2e43d28e4fc12304e449e9c1c224f55f8ea70fc

<hr>
<br>

### EJS e configuração com o Express
<br>

### O que é o EJS
<br>

-   É uma ferramenta para renderização de páginas
-   Conseguimos embutir códigos Javascript para renderizar as páginas
    -   Não são códigos que serão lidos no frontend
    -   São códigos que o EJS utilizará para montar o HTML que será enviado para o frontend      
<br>

-   Possibilita a componentização das views com os dados gerados
    -   Conseguimos fazer reuso de códigos e deixar nosso app mais organizado       
<hr>
<br>

### Instalação
<br>

-   Para instalar basta digitar o comando no terminal
```
    npm install ejs --save
```

-   Criamos a pasta views em src, e dentro da pasta views criamos outra pasta chamada pages e nela criamos um arquivo index.ejs
```
-   src/views/pages/index.ejs


<h1>Primeira página com EJS</h1>
```

-   Para testar, na pasta routes vamos criar uma nova rota para exibir o que foi criado na index.ejs
```
-   routes/index

// Aqui importamos o express
const express = require('express')

// Aqui importamos o Router do express em uma variável para poder criar as rotas
const router = express.Router()

// aqui criamos uma rota como resposta utilizamos o res.render() que irá renderizar o arquivo que foi passado nele
router.get('/', async(req, res) => {
    res.render('pages/index')
})

// Aqui exportamos a rota criada acima
module.exports = router
```


-   E aqui no app.js importamos as rotas e arquivos e terminamos a configuração, basta iniciar o servidor com npm run dev que arquivo index.ejs será exibido no navegador
```
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
```
<hr>
<br>

### Navegando no App
<br>

-   Aqui no app.js vamos ativar o uso de arquivos estáticos no projeto
```
-   app.js


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
```

-   Após ativar no app.js o uso de arquivos estáticos criamos a pasta public onde eles irão ficar, e dentro da pasta public criamos outra pasta chamada stylesheets onde os estilos ficaram

-   Vamos instalar agora o bulma.min.css e vamos colocar na pasta stylesheets

-   Após instalar vamos criar a página index.html no index.ejs
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="/stylesheets/bulma.min.css" />
  <title>Lista de Tarefas</title>
</head>
<body>
  <nav class="navbar is-black">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        TODO-List
      </a>
      <div class="navbar-burger burger" data-target="navMenuColorblack-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <section class="section hero is-link is-fullheight-with-navbar">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title">
          TODO-List
        </h1>
        <h2 class="subtitle">
          Gerenciando nossas atividades diárias =D
        </h2>
	<a href="list-checklists.html" class="button is-light is-medium">Ir para Listas de Atividades!</a>
      </div>
    </div>
  </section>
</body>
</html>
```
<hr>
<br>

### Incluindo uma Partial
<br>

-   Na pasta views iremos criar uma pasta chamada layouts e nela criamos 3 arquivos header.ejs, footer.ejs e menu.ejs que irão funcionar como components/ partes da página inicial

-   Vamos pegar a index.ejs e dividir em pedaços menores
```
-   views/layouts/header.ejs

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/stylesheets/bulma.min.css" />
    <title>Lista de Tarefas</title>
</head>
<body>
```

```
-   views/layouts/menu.ejs

<nav class="navbar is-black">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
            TODO-List
        </a>
        <div class="navbar-burger burger" data-target="navMenuColorblack-example">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
```

```
-   views/layouts/footer.ejs

</body>
</html>
```

-   e na index.ejs inserimos as partes que foram divididas utilizando o <%-  %>
```

<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<%- include('../layouts/header'}) %>

<%- include('../layouts/menu') %>


<section class="section hero is-link is-fullheight-with-navbar">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="title">
        TODO-List
      </h1>
      <h2 class="subtitle">
        Gerenciando nossas atividades diárias =D
      </h2>
      <a href="list-checklists.html" class="button is-light is-medium">Ir para Listas de Atividades!</a>
    </div>
  </div>
</section>

<%- include('../layouts/footer') %>
```
<hr>
<br>

### Enviando dados para um template EJS
<br>

-   Aqui na index.ejs vamos passar um parâmetro para a partial que será um título
```
-   pages/index.ejs

<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: 'TODO-List'}) %>

<%- include('../layouts/menu') %>


<section class="section hero is-link is-fullheight-with-navbar">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="title">
        TODO-List
      </h1>
      <h2 class="subtitle">
        Gerenciando nossas atividades diárias =D
      </h2>
      <a href="list-checklists.html" class="button is-light is-medium">Ir para Listas de Atividades!</a>
    </div>
  </div>
</section>

<%- include('../layouts/footer') %>
```
-   E aqui no header.ejs no title utilizamos o parâmetro que foi passado na index.ejs
```
-   views/layouts/header


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/stylesheets/bulma.min.css" />
    <title><%=title%></title>
</head>

<body>

<!--- E aqui no header no title utilizamos o parãmetro que foi passado na index.ejs   <%= title %>  -->
```
<hr>
<br>

### Dados através das rotas
<br>

-   Na pasta views vamos criar uma pasta chamada checklists e dentro dela criamos 2 arquivos index.ejs e show.ejs
```
-   views/checklists/index.ejs


<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: 'Lista de Tarefas'}) %>

<%- include('../layouts/menu') %>

<section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h1 class="title size-4">Listas de Tarefas</h1>
        </div>
        <div class="column is-one-fifth">
          <a href="checklist-form.html" class="button is-success is-small">Nova Lista</a>
        </div>
      </div>

      <div class="columns is-multiline">
          <!--- Aqui utilizamos um looping para cada tarefa criar um card e exibir as tarefas que estão no banco de dados-->

        <% checklists.forEach(checklist => { %>
            <div class="column is-one-quarter">
            <div class="card has-background-white-ter">
                <div class="card-content">
                <p class="subtitle is-size-5">
                    <!-- Aqui exibimos o nome da checklist-->
                    <%= checklist.name %>
                </p>
                <p class="subtitle is-size-6">
                    <!---Aqui exibimos os nomes das tasks-->
                    <%= checklist.tasks.count %> tarefas
                </p>
                </div>
                <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        <!--- Aqui colocamos ao clicar exibir o id de cada tarefa-->
                    <a href="../checklists/<%= checklist._id %>">Ver</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                    <a href="checklist-form.html">Editar</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                    <a href="#" class="has-text-danger">Remover</a>
                    </span>
                </p>
                </footer>
            </div>
            </div>
        <% }) %>

      </div>
    </div>
  </section>

  <%- include('../layouts/footer') %>
```


```
-   views/checklists/show.ejs


<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: checklist.name}) %>

<%- include('../layouts/menu') %>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h1 class="title size-4"><%= checklist.name %></h1>
        </div>
        <div class="column is-one-fifth">
          <a href="add-task.html" class="button is-success is-small">Nova Tarefa</a>
          <a href="index.html" class="button is-small">Voltar</a>
        </div>
      </div>

      <hr />

      <!-- Aqui utilizamos um loop nas tarefas para exibir na tela cada tarefa que está no banco de dados-->
      <% checklist.tasks.forEach(task => { %>
      <div class="columns">
        <div class="column is-four-fifths">
          <input type="checkbox" /> <%= task.name %> 
        </div>

        <div class="column is-one-fifth">
          <button class="button is-danger is-small">Remover</button>
        </div>
      </div>
      <% }) %>

    </div>
  </section>

  <%- include('../layouts/footer') %>
```

-   Aqui fizemos alguns ajustes nas rotas GET para exibir alguma página se a requisição for um sucesso e uma página se houver erros
```
-   routes/checklist

// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')

// Aqui criamos os documentos para o banco

// aqui criamos uma rota com o router.get() com uma função async recebe 2 parâmetros req que é a requisição e res a resposta para o usuário, utilizamos um try catch para tratar erros e utilizamos o await e utilizamos o método find em Checklist para pegar os dados em vez de enviar como na rota post abaixo, devolvemos o código de status 200 da requisição indicando que foi um sucesso, renderizamos o arquivo index que está na pasta checklists, também passamos uma variável com a checklist  e caso haja algum erro retornamos o código de status 500 indicando um erro e exibimos uma página de erro e passamos uma mensagem de erro para ela 
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', { checklists: checklists})
    }   catch(error){
        res.status(200).render('pages/error', { error: 'Erro ao exibir as Listas'})
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

// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e utiliza uma async function recebe os 2 parâmetros req e res, utilizamos o try catch, no try realizamos a busca utilizando o método findById() que irá buscar os dados pelo ID com o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, retornamos um código de status 200 caso seja sucesso e exibimos a página show que está em checklists, e no catch retornamos o código de status 422 caso houver um erro e exibimos a página de erro e enviamos uma mensagem de erro
router.get('/:id', async (req, res) => {

    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', { checklist: checklist})
    } catch (error){
        res.status(200).render('pages/error', { error: 'Erro ao exibir as Listas de Tarefas'})
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
```

-   e aqui na index.ejs de pages atualizamos o caminho ao clicar no botão na página inicial
```
-   pages/index.ejs

<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: 'TODO-List'}) %>

<%- include('../layouts/menu') %>


<section class="section hero is-link is-fullheight-with-navbar">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="title">
        TODO-List
      </h1>
      <h2 class="subtitle">
        Gerenciando nossas atividades diárias =D
      </h2>
      <a href="../checklists" class="button is-light is-medium">Ir para Listas de Atividades!</a>
    </div>
  </div>
</section>

<%- include('../layouts/footer') %>
```
<hr>
<br>

### Enviando dados através do input
<br>

-    Na pasta view/checklists vamos criar um novo arquivo chamado form.ejs

```
-   views/checklists/form.ejs

<form method="<% method %>" action="<% url %>">
    <div class="field">
        <label class="label">Nome</label>
        <div class="control">
            <input class="input" type="text" name="checklist[name]" placeholder="Lista de Tarefas" value="<% checklist.name %> ">
            <p class="is-danger help">Name should be present</p>
        </div>
    </div>

    <button type="submit" class="button is-success">Salvar</button>
    <a href="../checklists" class="button">Cancelar</a>
</form>
```

-   em seguida criamos um novo arquivo chamado new em checklists

```
-   views/checklists/new.ejs

<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: 'Lista de Tarefas'}) %>

<%- include('../layouts/menu') %>

<section class="section">
    <div class="container">
      <h1 class="title size-4">Nova Lista</h1>
        <!-- Aqui inserimos o form e passamos alguns parâmetros, o method post para enviar dados ao banco a url em que será feito isso e a checklist-->
      <%- include('form', {method: 'post', url: '/checklists', checklist: checklist}) %>
    </div>
  </section>

<%- include('../layouts/footer') %>
```

```
-   checklists/show

<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: checklist.name}) %>

<%- include('../layouts/menu') %>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h1 class="title size-4"><%= checklist.name %></h1>
        </div>
        <div class="column is-one-fifth">
          <a href="add-task.html" class="button is-success is-small">Nova Tarefa</a>
          <a href="../checklists" class="button is-small">Voltar</a>
        </div>
      </div>

      <hr />

      <!-- Aqui utilizamos um loop nas tarefas para exibir na tela cada tarefa que está no banco de dados-->
      <% checklist.tasks.forEach(task => { %>
      <div class="columns">
        <div class="column is-four-fifths">
          <input type="checkbox" /> <%= task.name %> 
        </div>

        <div class="column is-one-fifth">
          <button class="button is-danger is-small">Remover</button>
        </div>
      </div>
      <% }) %>

    </div>
  </section>

  <%- include('../layouts/footer') %>
```

```
-   checklists/index.ejs


<!-- Aqui inserimos as partials -->

<!--- Para inserir dados no Ejs utilizamos o <%-  %>  -->

<!---E aqui passamos um parâmetro para a partial que será um objeto com o título da página-->
<%- include('../layouts/header', {title: 'Lista de Tarefas'}) %>

<%- include('../layouts/menu') %>

<section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h1 class="title size-4">Listas de Tarefas</h1>
        </div>
        <div class="column is-one-fifth">
          <a href="/checklists/new" class="button is-success is-small">Nova Lista</a>
        </div>
      </div>

      <div class="columns is-multiline">
          <!--- Aqui utilizamos um looping para cada tarefa criar um card e exibir as tarefas que estão no banco de dados-->

        <% checklists.forEach(checklist => { %>
            <div class="column is-one-quarter">
            <div class="card has-background-white-ter">
                <div class="card-content">
                <p class="subtitle is-size-5">
                    <!-- Aqui exibimos o nome da checklist-->
                    <%= checklist.name %>
                </p>
                <p class="subtitle is-size-6">
                    <!---Aqui exibimos os nomes das tasks-->
                    <%= checklist.tasks.count %> tarefas
                </p>
                </div>
                <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        <!--- Aqui colocamos ao clicar exibir o id de cada tarefa-->
                    <a href="../checklists/<%= checklist._id %>">Ver</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                    <a href="checklist-form.html">Editar</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                    <a href="#" class="has-text-danger">Remover</a>
                    </span>
                </p>
                </footer>
            </div>
            </div>
        <% }) %>

      </div>
    </div>
  </section>

  <%- include('../layouts/footer') %>
```

-   precisamos criar uma rota para o new.ejs para criar novas tarefas

```
-   routes/checklist

// Aqui importamos o express
const express = require('express')

// e aqui chamamos um recurso do express chamado Router() que permite criar rotas nos arquivos e depois utilizar eles no arquivo principal App.js
const router = express.Router();

// Aqui importamos o model checklist onde está conectado com o banco de dados
const Checklist = require('../models/checklist')

// Aqui criamos os documentos para o banco

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

// Aqui criamos outra rota do tipo get o caminho será/:id ou seja espera um id e utiliza uma async function recebe os 2 parâmetros req e res, utilizamos o try catch, no try realizamos a busca utilizando o método findById() que irá buscar os dados pelo ID com o req.params.id ou seja irá pegar o id da url e adicionar no id do objeto, retornamos um código de status 200 caso seja sucesso e exibimos a página show que está em checklists, e no catch retornamos o código de status 422 caso houver um erro e exibimos a página de erro e enviamos uma mensagem de erro
router.get('/:id', async (req, res) => {

    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', { checklist: checklist})
    } catch (error){
        res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas de Tarefas'})
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
```

-   e no app utilizamos um middleware chamado urlencoded que irá pegar valores da url e dos form e irá deixar disponível para uso
```
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
```