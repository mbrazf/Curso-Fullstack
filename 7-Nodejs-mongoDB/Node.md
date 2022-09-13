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
