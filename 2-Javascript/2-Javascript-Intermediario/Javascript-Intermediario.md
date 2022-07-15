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
<hr>
<br>

### Associando Classes
<br>

```
// Aqui criamos a classe Captain que irá conter os dados do capitão
class Captain {
  constructor(name, age, flightHours){
    this.name = name
    this.age = age
    this.flightHours = flightHours
  }
}

// Aqui criamos uma outra classe chamada Spaceship que irá armazenar os dados da nave como name, crewQuantity e também irá receber um objeto com os dados do capitão,
// Dentro da classe criamos um atributo captain que cria uma nova instância da classe Captain e associa ela na classe Spaceship

class Spaceship {
  constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
    this.name = name
    this.crewQuantity = crewQuantity
    this.captain = new Captain(captainName, captainAge, captainFlightHours)
  }
}
// Aqui criamos uma instância/objeto da classe Spaceship e passamos todos os valores da nave: name, crewQuantity, captainName, captainAge, e captainFlightHours

let spaceship = new Spaceship("Ártemis", 13, "Will Gray", 45, 15000)

console.log(spaceship)
```
<hr>
<br>

### Herança
<br>

- É um recurso do paradigma Orientado a Objetos.
- Permite que classes herdem características de outras classes
  - Ou seja, declaramos uma classe que vai herdar métodos e atributos de outra classe

- É uma ténica de reuso de código
- As duas classe devem ter uma relação de "é um"
  - Por exemplo: Todo capitão é uma pessoa
  - Poderia ter uma classe Captain herdando de Person

```
// Aqui criamos uma classe Spaceship que será utilizada nas outras classes
class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity){
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }
  // Aqui criamos um método para acelerar a nave e iremos verificar se a velocidade atual é maior que a recomendada se for será exibido uma mensagem de alerta
  speedUp(acceleration){
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity){
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nDiminua ou poderá provocar danos à nave.")
    }
  }
}
//  Aqui criamos uma classe BattleSpaceship que irá herdar o constructor, com seus atributos e métodos da classe Spaceship
//  Para herdar utilizamos a palavra "extends"
//  e criamos um método stop
class BattleSpaceship extends Spaceship{
  stop(){
    this.currentVelocity = 0
    alert("Recolhendo armas e parando nave de batalha.")
  }
}
// Aqui declaramos mais uma classe, DiscoverySpaceship que também herda da classe Spaceship
// ela também contém um método stop
class DiscoverySpaceship extends Spaceship{
  stop(){
    this.currentVelocity = 0
    alert("Recolhendo equipamentos de amostras e parando nave de Descoberta")
  }
}
// Aqui criamos uma instância da classe DiscoverySpaceship, como ela herda o constructor da classe Spaceship passamos os valores do constructor name, maxCrew e maxRecommendedVelocity.
let darwin = new DiscoverySpaceship("Darwin", 10, 200)

// Aqui uma instância da classe BattleSpaceship, que também herda o constructor da classe Spaceship e passamos os valores do constructor name, maxCrew e maxRecommendedVelocity.
let supernova = new BattleSpaceship("Supernova", 5, 240)

// Aqui chamamos o método speedUp herdado da classe Spaceship e passamos o valor de acceleration
darwin.speedUp(210)
supernova.speedUp(230)

console.log(darwin)
console.log(supernova)

// E aqui chamamos o método stop que zera a velocidade da nave 
darwin.stop()
supernova.stop()

console.log(darwin)
console.log(supernova)
```
<hr>
<br>

### Sobrescrita de Métodos
<br>

```
// Aqui criamos uma classe Spaceship que será utilizada nas outras classes
class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity){
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }
  // Aqui criamos um método para acelerar a nave e iremos verificar se a velocidade atual é maior que a recomendada se for será exibido uma mensagem de alerta
  speedUp(acceleration){
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity){
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nDiminua ou poderá provocar danos à nave.")
    }
  }
}
//  Aqui criamos uma classe TransportSpaceship que irá herdar o constructor, com seus atributos e métodos da classe Spaceship.
//  Para herdar utilizamos a palavra "extends".
//  Aqui declaramos um novo método que irá sobrescrever o método da classe Spaceship com o mesmo nome
class TransportSpaceship extends Spaceship{
  speedUp(){
    alert("Naves de transporte só aumentam a velocidade em 1km/s")
    this.currentVelocity += 1
  }
}

// Aqui criamos uma instância da classe TransportSpaceship, como ela herda o constructor de Spaceship passamos seus valores
let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)

// Aqui chamamos o método speedUp que foi criado na classe TransportSpaceship, portanto esse método sobrescreve o método com o mesmo nome herdado de Spaceship
transportSpaceship.speedUp()

console.log(transportSpaceship)
```
<hr>
<br>

### Método Super
<br>
- A palavra-chave super() é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.


```
// Aqui criamos uma classe Spaceship que será utilizada nas outras classes
class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity){
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }
  // Aqui criamos um método para acelerar a nave e iremos verificar se a velocidade atual é maior que a recomendada se for será exibido uma mensagem de alerta
  speedUp(acceleration){
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity){
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nDiminua ou poderá provocar danos à nave.")
    }
  }
}

//  Aqui criamos uma classe TransportSpaceship com um constructor que recebe os mesmos 3 parâmetros da classe Spaceship e mais um maxLoadWeight
//  Também podemos utilizar o super em métodos estáticos.
//  Utilizamos o método super() que chama/acessa o constructor da classe pai Spaceship e passamos os parâmetros para ele e abaixo atribuimos o novo parâmetro maxLoadWeight
class TransportSpaceship extends Spaceship{
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight){
    super(name, maxCrew, maxRecommendedVelocity)
    this.maxLoadWeight = maxLoadWeight
  }
  
  // aqui declaramos um método que recebe acceleration como parãmetro e dividimos seu valor por 2,
  // e para reaproveitar o método da classe Spaceship utilizamos o método super para chamar/acessar o método e passamos o parâmetro acceleration
  speedUp(acceleration){
    acceleration /= 2
    alert("Incrementando velocidade em " + acceleration + "km/s")
    super.speedUp(acceleration)
  }
}

// Aqui criamos uma instância/objeto da classe TransportSpaceship, como ela herda da classe Spaceship passamos os valores do parâmetros
let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

// aqui chamamos o método speedUp() e passamos o valor do parâmetro acceleration que será dividido pela metade
transportSpaceship.speedUp(210)

console.log(transportSpaceship)
```