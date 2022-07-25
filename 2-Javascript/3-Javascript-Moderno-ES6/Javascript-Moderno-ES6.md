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