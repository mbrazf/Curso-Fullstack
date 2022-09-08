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






