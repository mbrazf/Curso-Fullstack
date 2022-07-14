# Anotações Javascript Intermediário

<br>

## Classes e POO (Programação Orientada a Objetos)

### Paradigmas de Programação do Javascript

-   Toda linguagem de programação tem um paradigma
-   Se encontra dentro de alguma classificação
    -   Conforme suas funcionalidades
    -   Do modo como permite que nós estruturemos o nosso código

-   O Javascript (e diversas outras linguagens) possui vários paradigmas
    -   Orientado a Objetos
    -   Orientado a Eventos
    -   Funcional e outras

### POO

-   POO vem de Programação Orientada a Objetos.
    -   Também conhecida como OOP (Object Oriented Programming)

-   Tem a idéia de abstrair, dentro do código, objetos do mundo real
-   Permite que os objetos interajam entre si através da troca de mensagens
-   A base são as Classes e os Objetos
-   Os objetos nós ja vimos antes
    -   Conseguimos fazer mais com eles quando temos o envolvimento das Classes

### Classe e Objeto

-   Todo objeto é criado a partir de uma classe.
-   A classe é um molde que é utilizado para criar um objeto
    -   Dentro da classe nós conseguimos definir atributos e métodos que um objeto receberá


- Exemplo de criação de classe e objeto:
```
// Criação de uma classe com o nome Spaceship

class Spaceship {

}

// Criando uma instância/objeto a partir da classe Spaceship
let mySpaceship = new Spaceship()

// Irá retornar um objeto vazio
console.log(mySpaceship)
```

-   O new já foi apresentado quando aprendemos Arrays e Objetos
-   O Array é uma classe Nativa do Javascript
    -   As funções que vimos são métodos internos à classe
    -   forEach, filter, find, findIndex etc.
    -   São criadas no objeto no momento em que chamamos o new
    -   Fazer let myArray = [] é o equivalente a let myArray = new Array().     

-   Com o Objeto acontece o mesmo quando fazemos myObject = {}
    -   Estamos criando um objeto a partir de uma classe nativa do JS chamada Object

-   Todos os tipos que vimos até agora tem seus tipos associados
    -   String
    -   Number
    -   Boolean
    -   etc.

-   Com as classes, conseguimos criar nosso próprios tipos derivados

### Construtores e Instâncias

-   Em grande maioria, as classes podem ser instanciadas.
    -   Grande maioria porque algumas linguagens podem impedir isso.

-   Instância de uma classe é o que dá origem ao objeto.
    -   Quando dizemos que uma classe foi instanciada estamos dizendo apenas que um objeto foi criado a partir daquela classe.

-   A classe vêm com um método especials que chamamos de 'constructor'.
    -   Utilizamos para definir valores iniciais dos atributos de um objeto.
    -   Este método é chamado quando criamos uma instância de uma classe com a palavra.

-Exemplo:
```
// Aqui criamos uma classe com o nome SpacialStation,
// adicionamos um constructor que recebe 2 parâmetros name e platformsQuantity, ele é utilizado para criar um objeto a partir da classe,
// e dentro dele setamos os atributos name e platformsQuantity que recebe os parâmetro do constructor

class SpacialStation {
  constructor(name, platformsQuantity){
    this.name = name
    this.platformsQuantity = platformsQuantity
  }
}
// Aqui estamos criando uma nova instância da classe, e passamos os valores dos parâmetros do constructor "Obeservatório" para o name e 40 para platformsQuantity

let observatory = new SpacialStation("Observatório", 40)

// Aqui retornará um objeto com o name e o platformsQuantity
console.log(observatory)
```
<br>

-Classe com Parâmetro com valor padrão
```
// Aqui criamos a classe Spaceship com o contructor que recebe 2 parâmetro name e type, porém type já tem um valor padrão definido "Descoberta"
// O parâmetro não precisa ter o mesmo nome que o atributo do constructor

class Spaceship {
  constructor(name, type = "Descoberta"){
    this.name = name
    this.type = type
  }
}

// Aqui criamos uma instância/objeto da classe e só passamos o valor do parâmetro name,
// como não passamos o valor do parâmetro type ele irá pegar o valor padrão de type declarado no constructor.
let darwin = new Spaceship("Darwin")

// E aqui outra instância e aqui passamos o valor do type como "Batalha"
// o valor "Batalha" irá sobrescrever o parâmetro com o valor padrão definido no constructor
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
/* resultado: {
"name": "Darwin",
"type": "Descoberta"
} 
*/

console.log(helmet)
/* resultado: {
"name": "Helmet",
"type": "Batalha"
} 
*/
```
<hr>

### Métodos

-   Já vimos que Métodos são funções que adicionamos dentro dos objetos.

-Exemplo de Métodos em uma Classe:
```


// Aqui criamos uma classe Spaceship, adicionamos o constructor que recebe name como parâmetro e declaramos um atributo velocity que recebe o valor 0
class Spaceship {
  constructor(name) {
    this.name = name
    this.velocity = 0
  }
  // Aqui estamos declarando um método dentro da classe que recebe um parâmetro acceleration e abaixo incrementamos o atributo velocity com o parãmetro acceleration
  speedUp(acceleration){
    this.velocity += acceleration
  }
}

// aqui criamos uma instância da classe
let artemis = new Spaceship("Ártemis")

// aqui chamamos o método criado dentro da classe e passamos o valor do parâmetro acceleration
artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)
/* resultado: 
  "name": "Ártemis",
  "velocity": 25
*/
```
<hr>

### Exercício Classes

-   HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Classes</title>
</head>
<body>
    <h1>Exercício Classes</h1>
    <script src="index.js"></script>
</body>
</html>
```

-   JAVASCRIPT
```

// Criamos a classe SpacialStation que recebe 2 parâmetros name e crewQuantity
class Spaceship{
    constructor(name, crewQuantity){
      this.name = name
      this.crewQuantity = crewQuantity
      this.hitched = false
      this.doorOpen = false
    }
    // aqui criamos um método para engatar as naves
    hitch(){
      let hitched = true
      let doorOpen = true
    }
  }
  
  // Aqui a função para exibir o menu de escolha
  function showMenu(){
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
    chosenOption = prompt("Qual ação deseja realizar? \n1-Realizar engate \n2-Imprimir naves \n3-Sair do programa")
    } 
    return chosenOption
  }
  
  // Aqui a função para adicionar as naves e criar uma instância/objeto da classe
  function createSpaceship(){
    let spaceshipName = prompt("Nome da nave:")
    let crewQuantity = prompt("Número de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
  }
  
  // Aqui a função para exibir um alerta com todas as naves na estação espacial
  function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
       spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
  }
  // Aqui criamos um array vazio que iremos adicionar as naves engatadas abaixo
  let hitchedSpaceships = []
  
  // Aqui declaramos uma variável vazia para armazenar a opção escolhida no menu
  // verificamos a opção escolhida se for "1" chamamos a função para adicionar naves, chamamos o método hitch para engatar as naves, e adicionamos a nave engatada no array vazio que foi criado acima.
  
  // Se for "2" chamamos a função que imprime as informações das naves engatadas
  let chosenOption
  while(chosenOption != "3"){
    chosenOption = showMenu()
    switch(chosenOption){
      case "1":
        let spaceshipToAdd = createSpaceship()
        spaceshipToAdd.hitch()
        hitchedSpaceships.push(spaceshipToAdd)
        break
        
      case "2":
        printSpaceshipList(hitchedSpaceships)
        break
    }
  }
```