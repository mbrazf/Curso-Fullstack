# Javascript Moderno ES6
<hr>


## Versões do ECMAScript
<br>

-   É o nome oficial do JS. 
-   "Javascript" já estava patenteado.
-   ECMA (European Computer Manufacturers Association) é uma associação de padronização de sistemas de informação.    
<br>  

-   Evolução das versões:
-   Até o momento estamos na versão ES8 (ECMAScript 8)
-   Lançada em 2017
-   Antes da ES8 tivemos:
    -   ES7 EM 2016
    -   ES6 EM 2015
    -   ES5 EM 2009   
    <br>

### Compatibilidades

-   O Javascript não teve uma evolução consistente.
    -   Grande espaço de lançamento entre as versões 5 e a 6.
    -   Houve uma versão 3 em 1999 e uma 4 que nunca foi lançada.   

-   A versão 6(2015) veio com muitas novidades.
-   Temos ainda o problema de suporte dos navegadores.
    -  As versões já lançadas nunca conseguirão suportar as versões mais novas do JS.
-   Surge a necessidade de ferramentas que convertam para as versões do JS
    -   Que possibilitem que nós, enquanto desenvolvedores,possamos utilizar as versões mais recentes.
    -   Que não impeça o código de executar em navegadores que ainda não suportam.
-   Temos uma ferramenta que nos auxilia a ver como estão a evolução dos navegadores.

-   Link: [Can I Use](https://caniuse.com/)
<hr>
<br>

### Template Strings (Interpolação de String)
<br>

-   É uma nova forma de concatenar strings com variaveis.
-   Só pode ser utilizada com apóstrofos
```
- Exemplo:

` ${ } `


let spaceshipName = "Colossus"

//  Concatenando versão mais antiga
console.log("Nome da Nave: " + spaceshipName)

// Concatenando usando Template String 
console.log(`Nome da Nave: ${spaceshipName}`)

// Podemos também atribuir a uma variável
let newName = `Nome da Nave: ${spaceshipName}`
console.log(newName)

// Podemos também concatenar com numeros e também operações
let velocity = 50
console.log(`Velocidade da nave: ${velocity * 2} km/s`)
```
<hr>
<br>

### Desestruturação de Objetos e Arrays
<br>

-   Desestruturação de Objeto
```
// Criamos um objeto spaceship
let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false
}

// Aqui um exemplo armazenando propriedades do objeto em variáveis
//let spaceshipName = spaceship.name
//let crewQuantity = spaceship.crewQuantity
//console.log(spaceshipName, crewQuantity)

// Aqui o mesmo exemplo de cima com a desestruturação em apenas uma linha de código
// Mapeamos a propriedade do objeto desejado em uma variável
//  Quando a propriedade e a variável tem o mesmo nome podemos omitir a propriedade
// se mapearmos uma variável/elemento que não existe no objeto essa variavel/elemento irá receber o valor undefined
let { name: spaceshipName, crewQuantity} = spaceship

console.log(spaceshipName, crewQuantity)
```
<hr>

-   Desestruturação em Arrays
```
// Aqui criamos um array
let spaceships = ["Colossus", "Ártemis", "Fenix"]

// Aqui armazenamos em variáveis os itens do array passando seus índices
//let colossus = spaceships[0]
//let artemis = spaceships[1]

// E aqui a mesma coisa que acima mas com desestruturação
// se mapearmos uma variável/elemento que não existe no array essa variavel/elemento irá receber o valor undefined
let [colossus, artemis, fenix, andromeda] = spaceships

console.log(colossus, artemis, fenix, andromeda)
```
<hr>

-   Desestruturação em Funções
```
// Aqui criamos um array
let spaceships = ["Colossus", "Ártemis", "Fenix"]

// Aqui a desestruturação do array
let [colossus, artemis, fenix, andromeda] = spaceships

// Aqui uma função que recebe os elementos do array como parâmetro para a função
function printSpaceships([colossus, artemis, fenix, andromeda]){
  console.log(colossus, artemis, fenix, andromeda)
}

// Aqui chamamos a função e passamos o array onde as variáveis foram mapeadas
printSpaceships(spaceships)
```
<hr>
<br>

### Operador Spread
<br>

-   Ele é declarado utilizando reticências/ 3 pontos ...
-   Ele expande um objeto iteravel/array, pega os elementos e considera cada um como elemento independente.    
<br> 

-   EXEMPLO 1:
```
// Criamos o array
let spaceships = ["Colossus", "Ártemis", "Fenix"]

// E aqui utilizamos o spread ele irá retornar os elementos como se fossem strings individuais
//console.log(...spaceships)


// Aqui criamos uma variável, nela acessamos/utilizamos o operador spread no array e passamos um novo elemento para ser adicionado no fim
let newSpaceships = [...spaceships, "Puller"]

console.log(newSpaceships)
```

-   EXEMPLO 2:
```
// Aqui criamos uma função para somar elementos, contém velocity e acceleration
function speedUp(velocity, acceleration){
  return velocity + acceleration
}

// Aqui criamos uma variável/array com os valores de velocity e acceleration
let spaceshipAcceleration = [60, 10]

// Aqui criamos outra variável para chamar a função e em vez de passarmos os valores dos parâmetros novamente basta acessar a variável que contém o array acima e utilizar o spread que irá considerar os 2 valores como valores independentes
let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)
// 70
```
<hr>
<br>

### REST Params
<br>

-   A sintaxe de rest parameter (parâmetros rest) permite que uma função receba um número indeterminado de parâmetros como um array.
-   O Rest Param é declarado usando um Spread Operator (...).
-   Ele irá pegar todos os parâmetros restantes da chamada da função e irá atribuir como um array.
-   O Rest param tem quer ser o último parâmetro de uma função, caso contrário irá ocorrer um erro: "Uncaught SyntaxError: Rest parameter must be last formal parameter "
```
// Aqui criamos uma função que espera 2 parâmetros message e names que será um array, utilizamos o forEach no parâmetro names que irá exibir um console.log para cada elemento do array.
function greetCrew(message, ...names){
  names.forEach(name => console.log(`${message}, ${name}`))

  // Aqui no console.log veremos que names recebe um array com os valores passados na chamada da função
  console.log(names)
}

// Aqui chamamos a função e passamos os valores dos parâmetros message e names.
// Como utilizamos o rest param em names os valores dos parâmetros a partir da string "Marcelo" serão adicionados no parâmetro names como um array.
greetCrew("Seja bem vindo", "Marcelo", "Rodrigo", "Arthur")
```
<hr>
<br>

### O que é NodeJS e como instalar
<br>

- Interpretador de código Javascript
- Criado por Ryan Dahl em 2009
- Utiliza como motor o interpretador Javascript V8 da Google
  - Permite criarmos códigos que serão executados fora do Browser
  - Seja no terminal, backend de uma aplicação, etc.    
<br>      

- [Download NodeJS](https://nodejs.org/pt-br/download/)
<hr>
<br>

### Formato JSON
<br>

- JSON significa Javascript Object Notation.
- Um formato de representação de dados no formato texto.
- Ele é um derivado da forma como os objetos do JS são organizados.

### Por que usar?
<br>

- Diferentes sistemas precisam se comunicar.
  - É necessário que exista um padrão para que possam mandar dados um para o outro.
- JSON é um formato bem compacto e altamente adotado.
- Pode ser um texto salvo num arquivo.
  - Geralmente num arquivo com formato .json.
- Ou até mesmo numa string.

```
- Exemplo de arquivo JSON

{
    "name": "Terra",
    "physicalCharacteriscts": {
        "surfaceArea": 510072000,
        "equatorialDiameter": 12756.2
    },
    "colors": ["Azul","Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
}
```
<br>

- Convertendo JSON para Objeto
```
// Criamos uma string JSON
let planet_json = `{
    "name": "Terra",
    "physicalCharacteriscts": {
        "surfaceArea": 510072000,
        "equatorialDiameter": 12756.2
    },
    "colors": ["Azul","Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
}`

console.log(planet_json)

// Função para conversão de uma string JSON em um objeto Javascript que podemos manipular
let planet = JSON.parse(planet_json)

console.log(planet)
```
<br>

- Convertendo Javascript para JSON
```
// Criamos um objeto simples
let planetaTerra = {
    "name": "Terra",
    "diameter": 3000000
}
console.log(planetaTerra)

// E aqui convertemos o objeto Javascript para JSON
let jsonString = JSON.stringify(planetaTerra)

console.log(jsonString)
```
<hr>
<br>

## NPM e YARN
<br>

### O que são NPM e YARN ?
<br>

- NPM e YARN são duas ferramentas gerenciadoras de pacotes do Javascript. NPM vem de Node Package Manager.
- O YARN surgiu em contrapartida ao NPM, que apresentava problemas de performance.
  - Criado pelo Facebook
- Com o surgimento do Yarn, o NPM melhorou e vários destes problemas foram resolvidos.
  - Como o NPM evoluiu bastante desde a sua versão 5, nós utilizaremos ele.  
<hr>
<br>

### O que é um gerenciador de pacote?
<br>

- É uma ferramenta responsável por gerenciar as dependências da aplicação.
- Conseguimos instalar dependências(pacotes) pela linha de comando.
- Permite que mantenhamos as versões necessárias das ferramentas para a aplicação  
<hr>
<br>

### NPM
<br>

- NPM é uma ferramenta que possui 3 recursos:   
<br>

- Uma ferramenta de linha de comando para instalar pacotes.
- Repositório de pacotes Javascript.
  - Quando executamos um comando de instalação, o NPM busca no próprio repositório.
- Site para pesquisa sobre as documentações de um pacote.  
<br>   

- Aqui o link do npm para buscar pacotes:  [Link npm](https://www.npmjs.com/package/moment)
- No exemplo procuramos a biblioteca moment para manipular datas   
<hr>
<br>

### Como utilizar o npm
<br>

1-  Primeiro você inicia o npm com o comando "npm init" na pasta desejada e preenche os dados do projeto, que irá gerar um arquivo package.json.   
```
- package.json

{
  "name": "npm_class",
  "version": "1.0.0",
  "description": "Aula para estudar NPM",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "NPM",
    "class",
    "study"
  ],
  "author": "Marcelo Braz",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.4"
  }
}
```
2-  Depois você instala o pacote desejado usando o comando: (no exemplo o moment)
```
npm install moment --save
```

3- Adiciona o script do pacote no HTML na tag script src e pronto ja podemos utilizar o moment
```
<!--Aqui adicionamos o pacote instalado pela tag script, acessamos a pasta node_modules e dentro dela a pasta do pacote moment e depois o arquivo moment.js-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Npm Init e Instalação de Pacotes</title>
</head>
<body>
    
    <script src="node_modules/moment/moment.js"></script>
    <script src="index.js"></script>
</body>
</html>
```

```
- index.js

// Aqui utilizamos a biblioteca instalada moment
const today = moment().format("DD/MM/YYYY")
alert(`Data atual: ${today}`)
```

npm init
- Inicia o npm na pasta selecionada

npm init -y
  - Inicia o npm e concorda com todas as perguntas padrão

npm install nomeDoPacote --save
  - Instala o pacote desejado e informa que ele é uma dependência do nosso projeto

npm start
- Inicia o servidor localhost ao instalar o webpack
<hr>
<br>

## Transpilação com Babel
<br>

### O que é Babel ?
<br>

- Transpilar é converter o código que está numa linguagem para outra
- Babel é utilizado para isso
  - Converte o código numa versão do ECMA para outras versões anteriores

- Desenvolvido em Javascript
- Utilizado para permitir compatibilidade com navegadores que ainda não suportam determinada versão   
<br>

- npm init -y    para iniciar o npm na pasta desejada

- Instalamos os pacotes que serão utilizados
  - npm install @babel/core @babel/cli @babel/preset-env --save-dev
<hr>

- @babel/core
  - É o pacote base para o babel funcionar

- @babel/cli
  - Pacote para podermos utilizar o babel por linha de comando

- @babel/preset-env
  - Pacote para converter qualquer versão do ES6 ou superior, para ES5
<hr>

- Aqui iremos utilizar o babel para transpilar o arquivo:  
<br>

```
- testing-es8.js

//Aqui criamos um código atual

function testingES8(text1, text2, ){
    alert(`${text1}\n${text2}`)
}
```

- Comando para transpilar para uma versão anterior
  - npx babel nomeArquivo

- Comando usado para salvar em um novo arquivo o código transpilado  
  - npx babel nomeArquivoOriginal -o nomeDoArquivoTranspilado

<br>


```
//Aqui o código transpilado, no código atual tinha uma vírgula depois do parâmetro text2 e ao transpilar a vírgula foi removida

function testingES8(text1, text2){
    alert(`${text1}\n${text2}`)
}
```
<br>

-   Comando para transpilar exatamente para a versão ES5 com o pacote preset-env
    - npx babel nomeArquivoOriginal -o nomeDoArquivoTranspilado --presets=@babel preset-env
```
//Aqui o arquivo transpilado para ES5 

"use strict";

function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
} 
```

-   Transpila o diretório/pasta inteiro e salva o arquivo transpilado em outro diretório/pasta
      - npx babel nomeDaPastaAtual --out-dir nomeDaPastaNova --presets=@babel/preset-env
<hr>
<br>

### babel.config.js e .babelrc
<br>

- Babel 7 foi lançado em 2018
- Antes possuia como arquivo de configuração apenas o .babelrc
- No 7, passou a ser recomendada a utilização do babel.config.js
<hr>

### babel.config.js
<br>

- É um arquivo Javascript
- Configuramos os presets, plugins e etc.
- Lido no momento de converter os arquivos
- É utilizado na Raiz do projeto para as configurações padrões
<hr>

- npx babel nomeDaPastaAtual --out-dir nomeDaPastaNova --presets=@babel/preset-env
  - Transpila o diretório inteiro e faz o output da transpilação em outro diretório
- Outra forma de fazer isso é criar o arquivo babel.config.js e configurar o preset e exportá-lo sem ter que ficar utilizando a linha de comando do terminal
```
- babel.config.js

const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.3.2"
        }
    ]
]
module.exports = { presets }
```
- Comando para instalar o core-js na versão 3, pacote que importa recursos que o ES5 não possui nativamente
  - npm install core-js@3  
<br>

- Ai basta usar o seguinte comando:
  - npx babel nomeDaPastaAtual --out-dir nomeDaPastaNova. 
- Que ai o arquivo irá fazer a importação dos pacotes do corejs necessários para transpilar para versão ES5.
<hr>
<br>

### .babelrc
<br>

- É um arquivo JSON
- Configuramos os presets, plugins e etc.
- Lido no momento de converter os arquivos
- É utilizado em subdiretórios para sobrescrever os valores padrões que vem no babel.config.js
<hr>
<br>

### NPX e NPM Scripts
<br>

- Criamos um arquivo HTML dentro da pasta public
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NPX e NPM Scripts</title>
</head>
<body>
    NPX e NPM Scripts
</body>
</html>
```

- Instalamos o babel
  - npm install @babel/core @babel/cli
<hr>

```
- Aqui criamos um arquivo index.js com um console.log()

console.log("Testando NPX e NPM")
```
<hr>

- E executamos o babel para transpilar a index.js e salvar em transpiled.js
  - npx babel index.js -o transpiled.js
<hr>

- Aqui instalamos uma ferramenta que cria um servidor http
  - npm install http-server --global

- Para executar ele utilizamos o comando:
  - http-server

- Ele pega por padrão o arquivo que se encontra na pasta public no exemplo é o arquivo index.html
<hr>

- Podemos também criar atalhos para comandos no package.json
- Na parte de "scripts" adicionamos um novo comando, "build" que executa o comando para transpilar "npx babel index.js -o transpiled.js".
```
- package.json

{
  "name": "3-npx-npm-scripts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx babel index.js -o transpiled.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/cli": "^7.18.9",
    "@babel/core": "^7.18.9"
  }
}
```
-  Agora para transpilar basta utilizar o comando:  
    - npm run build

- Mais detalhes em [Documentação npm](https://docs.npmjs.com/)
<hr>
<br>

## Webpack
<br>

- É uma ferramenta conhecida como static module bundler
- Lê todo o código e monta um gráfico de dependências
- Este gráfico é utilizado para montar os pacotes de código
- A idéia é ter todo o código modularizado no JS
  - Através do código e do arquivo de configuração
- Possui espaço para plugins e loaders
  - Permite incluir outros tipos de arquivos além do JS ou
  transpilar os arquivos JS com o Babel
- Tudo no webpack é configurado num arquivo webpack.config.js (nome padrão)
<hr>

### Começando a usar o webpack

- Primeiro iniciamos o npm na pasta/diretório:
  - npm init -y  

- Instalamos o webpack:
  - npm install --save-dev webpack webpack-cli

- Instalamos o moment pacote para manipular datas
  - npm install moment
<hr>

- Criamos um diretório dist com o index.html e importamos na tag script o main.js arquivo padrão criado pelo webpack
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desvendando o Webpack</title>
</head>
<body>
    Testando o webpack
    <script src="main.js"></script>
</body>
</html>
```

- Criamos um diretório src com um index.js
```
// Aqui importamos o pacote moment instalado diretamente pelo Javascript, assim não precisamos importar pelo HTML

import moment from "moment/src/moment"
alert(moment().format("HH:mm:ss"))
```

- Executamos o webpack
  - npx webpack

- O webpack irá unir os pacotes instalados em um único arquivo main.js minificado, ai para utilizar basta importar o main.js no html
- Ao abrirmos o arquivo HTML no navegador veremos que a importação foi executada.
<hr>

- Criamos um arquivo webpack.config.js para as configurações do webpack
```
- webpack.config.js


// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
module.exports = {
    entry: {
        index: './src/index.js'
    }
}
```
- Executamos o webpack agora de uma forma otimizada para desenvolvimento
- E o arquivo index.js será gerado como adicionado no webpack.config.js e substituira o main.js
  - npx webpack --mode development
<hr>

- Como o index.js substitui o main.js alteramos o script
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desvendando o Webpack</title>
</head>
<body>
    Testando o webpack
    <script src="index.js"></script>
</body>
</html>
```
- Criamos o arquivo planet.js mas escrevemos apenas um texto para ocorrer um erro
```
Sou um erro
```

- Aqui importamos o planet.js
```
// Aqui importamos o pacote moment instalado diretamente pelo Javascript, assim não precisamo importar pelo HTML
import moment from "moment/src/moment"

// Importamos o arquivo planet.js criado
import "planet.js"

alert(moment().format("HH:mm:ss"))
```
- E executamos o webpack novamente:
  - npx webpack --mode development  
<br>
- Como colocamos o index.js como entrada no webpack.config.js ele irá buscar no arquivo index.js, como no index.js tem um import do planet.js então ele também será incluido no processamento, mas como o planet.js tem um erro o webpack não irá permitir a compilação e será exibido um erro.
<hr>
<br>

- Outro exemplo:
<br>

- Adicionamos uma nova entrada no webpack.config.js
```
// Aqui adicionamos as configurações do webpack

// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
// Adicionamos uma nova entrada galaxy.js

module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    }
}
```
- Criamos o arquivo galaxy.js
```
alert("Bem vindo à Via Láctea")
```

- Alteramos o webpack.config.js:
```
// Aqui adicionamos as configurações do webpack


const path = require("path")

// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
// Adicionamos uma nova entrada com galaxy.js
module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    // Aqui adicionamos uma nova chave output que irá utilizar o padrão do nome do arquivo, tudo que houver na chave entry irá conter o nome.bundle.js.
    // e irá adicionar esse arquivo dentro da pasta/diretório dist
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```
- E ao executar novamente o webpack : npx webpack --mode development
- Ele irá fazer o que foi definido no webpack.config.js, alterar o nome dos arquivos e adiciona os arquivos no diretório dist.
<hr>

- Agora só importar os arquivos novos no HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desvendando o Webpack</title>
</head>
<body>
    Testando o webpack
    <script src="index.bundle.js"></script>
    <script src="galaxy.bundle.js"></script>
</body>
</html>
```
- Ao abrir no navegador será executado os códigos dos dois arquivos bundle.js.
<hr>
<br>

- Instalamos os pacotes que serão utilizados 
  - npm install @babel/core @babel/preset-env babel-loader core-js@3
<hr>

- Adicionamos novas configurações no webpack.config.js
```
// Aqui adicionamos as configurações do webpack



const path = require("path")

// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
// Adicionamos uma nova entrada com galaxy.js
module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Aqui adicionamos uma nova chave rules que é um array com as regras 
    //  Adionamos uma regra que irá pegar todos os arquivos que terminam com .js e irá executar o babel-loader neles
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
}
```

- Criamos um arquivo babel.config.js
```
// Aqui inserimos as configurações do babel

module.exports = {
    presets: [
        [
            "@babel/preset-env"
        ]
    ]
}
```
- E executamos o webpack: npx webpack --mode development
- E após executar veremos que ele irá ter transpilado os códigos em index.bundle.js minificado para o ES5.
<hr>

- Aqui outro recurso do webpack que cria um servidor que atualiza a cada alteração como se fosse um liveserver
  - npm install webpack-dev-server --save-dev
<hr> 

- Alteramos as configurações do webpack.config.js
```
// Aqui adicionamos as configurações do webpack



const path = require("path")

// Aqui o webpack irá ler o arquivo index.js e irá gerar outro arquivo index.js no diretório dist e irá sobrescrever o main.js
// Por padrão ele gera um arquivo main.js
// Adicionamos uma nova entrada com galaxy.js
module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    // Aqui adicionamos uma nova chave output que irá utilizar o padrão do nome do arquivo, tudo que houver na chave entry irá conter o nome.bundle.js.
    // e irá adicionar esse arquivo dentro da pasta/diretório dist
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Aqui adicionamos uma nova chave rules que é um array com as regras 
    //  Adionamos uma regra que irá pegar todos os arquivos que terminam com .js e irá executar o babel-loader neles
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    //Adicionamos outra configuração com a chave watch
    // Ele irá monitorar por qualquer alteração nos arquivos, e quando encontrar irá processar o webpack novamente.
    watch: true,

    // Aqui outra chave com as configuração desse servidor que foi instalado
    //  O servidor vai monitorar a pasta dist e se houver algum arquivo novo ele irá recarregar o navegador automaticamente
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },

        liveReload: true
    }
}
```

- E alteramos o package.json
- Adicionamos um atalho "start" para executar o servidor.
```
{
  "name": "4-desvendando-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3"
  },
  "dependencies": {
    "@babel/core": "^7.18.9",
    "@babel/preset-env": "^7.18.9",
    "babel-loader": "^8.2.5",
    "core-js": "^3.24.0",
    "moment": "^2.29.4"
  }
}
```
- E ao digitar o comando npm run start irá criar o servidor no navegador que atualiza automaticamente ao realizar uma alteração.
<hr>
<br>
