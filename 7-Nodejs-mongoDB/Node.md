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
