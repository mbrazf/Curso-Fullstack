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