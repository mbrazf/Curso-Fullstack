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
<br>
<hr>

### Métodos GET e SET
<br>

- Os métodos Set e Get são basicamente uma forma de simular variáveis

- O método SET é utilizado para setar/atribuir valor a uma variável:
```
// Aqui criamos uma classe
class TransportSpaceship {
  constructor(name){
    this.name = name
    this.currentVelocity = 0
  }
  // Aqui criamos um método set para simular uma variável, que recebe newVelocity como parâmetro
  // verificamos se newVelocity é maior que 120, se for currentVelocity irá receber 120
  // se não, receberá o parâmetro newVelocity
  set velocity(newVelocity){
    if(newVelocity > 120){
      this.currentVelocity = 120
    } else {
      this.currentVelocity = newVelocity
    }
  }
}
// Aqui criamos uma instância da classe e passamos o valor de name
let spaceship = new TransportSpaceship("Transportador")


// Aqui tentamos atribuir 130 em velocity mas o que acontece é que chamamos o método SET velocity acima, e o 130 é passado como valor do parâmetro newVelocity
spaceship.velocity = 130

console.log(spaceship)
```
<hr>

- O método GET é utilizado para retornar um valor como uma variável:
```
// Criamos uma classe
class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad){
    this.name = name
    this.monthlyProcessedLoad = monthlyProcessedLoad
  }
  
  // Aqui utilizamos o get para simular uma variável,
  // ao tentarmos chamar essa variável o método será executado e retornará o atributo monthlyProcessedLoad da classe dividido por 4
  get weeklyProcessedLoad(){
    return this.monthlyProcessedLoad / 4
  }
}

// Aqui criamos uma instância da classe e passamos os valores dos atributos
let resourceProcessor = new ResourceProcessStation("Gaia", 500)

// e aqui exibimos um console.log e passamos a instância resourceProcessor da classe e chamamos o método weeklyProcessedLoad como uma variável e que retorna o monthlyProcessedLoad dividido por 4
console.log(resourceProcessor.weeklyProcessedLoad)

// e aqui chamamos novamente a instância e alteramos o valor do atributo monthlyProcessedLoad para 600
resourceProcessor.monthlyProcessedLoad = 600

// e aqui chamamos novamente o método que irá retornar 600 / 4 que é 150
console.log(resourceProcessor.weeklyProcessedLoad)
```
<hr>
<br>

### Métodos Estáticos
<br>

- Diferente dos métodos tradicionais que são chamados no objeto, os métodos estáticos são chamados direto na classe, sao usados quando queremos ter algo que não será alterado independente da instância do objeto.
```
// Criamos uma classe
class ResourceProcessorStation{
  constructor(name, monthlyProcessing){
    this.name = name
    this.monthlyProcessing = monthlyProcessing
  }
  //  Aqui criamos um método estático utilizando a palavra static, ele recebe 2 parâmetros monthlyProcessing e hours.
  //  O método irá retornar monthlyProcessing (processamento mensal) dividido por 720 que é o número de horas de um mês para saber o processamento por hora e depois multiplicamos pelo número de horas
  static calculateProcessInHours(monthlyProcessing, hours){
    return monthlyProcessing / 720 * hours
  }
}

/*
//  Aqui criamos uma variável e chamamos o método estático diretamente da classe, e passamos os valores de monthlyProcessing e hours
let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)
*/


/*
// Aqui tentamos chamar o método a partir de uma instância/objeto da classe mas irá ocorrer um erro: "Uncaught TypeError: processor.calculateProcessInHours is not a function"
//  Só conseguimos chamar um método estático diretamente pela classe.
let processor = new ResourceProcessorStation("Gaia", 2000)
processor.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(processor)
*/

//  Também podemos chamar o método assim
//  Criamos uma instância da classe e passamos os valores dos atributos name e monthlyProcessing.
//  Criamos uma variável e armazenamos nela a chamada do método estático, passamos o nome da classe e o método calculateProcessInHours e os valores dos parâmetros
let processor = new ResourceProcessorStation("Gaia", 2000)
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessed)
```
<hr>
<br>

### Variáveis Estáticas
<br>

- As variáveis estáticas são diretamente ligadas a classe, o valor dela é o mesmo independente dos objetos instanciados a partir de uma classe.
- Podemos utilizar o GET para gerar um método estático, ou seja ele irá criar um método estático que irá se comportar como uma variável.
```
// Criamos uma classe
class Spaceship{
  // Aqui criamos um método GET estático com a taxa de desaceleração que sempre retornará o mesmo valor
  static get decelerationRate(){
    return 0.15
  }
  constructor(name){
    this.name = name
    this.currentVelocity = 0
  }
  // Criamos um método para acelerar a nave
  // e chamamos o método decelerationRate a partir da classe Spaceship como se fosse uma variável
  speedUp(acceleration){
    this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
  }
}

// Aqui criamos uma instância/objeto da classe e passamos o valor de name
let spaceship = new Spaceship("Apolo")

// Aqui chamamos o método da classe e passamos o valor de acceleration
spaceship.speedUp(100)

// Aqui exibimos o resultado da aceleração
console.log(spaceship)
// o retorno será 85
```
<hr>
<br>

### Exercício 2 Classes

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="spaceship.js"></script>
    <script src="battle_spaceship.js"></script>
    <script src="transport_spaceship.js"></script>
    <script src="app.js"></script>
    <script src="index.js"></script>
    <title>Exercício Classes 2</title>
</head>
<body>
    <h1>Exercício Classes 2</h1>
</body>
</html>
```

- spaceship.js
```
// Criamos uma classe Spaceship
// Com um método GET estático que retorna a taxa de desaceleração
// e com um método speedUp para acelerar a nave com a taxa de desaceleração
class Spaceship {
    static get DECELERATION_RATE(){
        return 0.17
    }

    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
    }
}
```

- battle_spaceship.js
```
// Aqui criamos a classe BattleSpaceship que herda da classe Spaceship
// utilizamos o método super para acessar e reaproveitar o constructor da classe Spaceship
class BattleSpaceship extends Spaceship{
    constructor(name, crewQuantity, weaponsQuantity){
        super(name, crewQuantity)
        this.weaponsQuantity = weaponsQuantity
    }
}
```

- transport_spaceship.js
```
// Aqui criamos a classe TransportSpaceship que herda da classe Spaceship
// utilizamos o método super para acessar e reaproveitar o constructor da classe Spaceship
class TransportSpaceship extends Spaceship{
    constructor(name, crewQuantity, sitsQuantity){
        super(name, crewQuantity)
        this.sitsQuantity = sitsQuantity
    }
}
```

- app.js
```
class App {
  constructor() {
    this.spaceship = null;
  }

  // Método para exibir o menu inicial enquanto a opção escolhida for diferente de 3
  start() {
    this.enrollSpaceship();
    let chosenOption;
    do {
      chosenOption = this.showInitialMenu();
      this.redirectFeature(chosenOption);
    } while (chosenOption != "3");
    this.printAndExit();
  }

  // Criamos a função para cadastrar as naves
  enrollSpaceship() {
    let spaceshipName = prompt("Qual o nome da nave?");
    let crewQuantity = prompt("Qual a quantidade de tripulates?");
    let spaceshipKind = this.askForSpaceshipKind();
    if (spaceshipKind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui?");
      this.spaceship = new BattleSpaceship(
        spaceshipName,
        crewQuantity,
        weaponsQuantity
      );
    } else {
      let sitsQuantity = prompt("Quantos lugares a nave possui?");
      this.spaceship = new TransportSpaceship(
        spaceshipName,
        crewQuantity,
        sitsQuantity
      );
    }
  }

  // Aqui criamos a função que exibe a pergunta do tipo da nave
  // Para cada tipo de nave criamos uma instância diferente
  askForSpaceshipKind() {
    let chosenOption;
    while (!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte");
    }
    return chosenOption;
  }

  // Aqui criamos a função para exibir o menu e verificar qual ação foi escolhida
  showInitialMenu() {
    const promptMessage =
      "O que você deseja fazer?\n" +
      "1- Acelerar a nave\n" +
      "2- Trocar a nave\n" +
      "3- Imprimir e sair";
    let chosenOption = prompt(promptMessage);
    while (!["1", "2", "3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage);
    }
    return chosenOption;
  }

  // Aqui uma função para pegar a opção escolhida e chamar a função para cada opção escolhida
  redirectFeature(chosenOption) {
    switch (chosenOption) {
      case "1":
        this.accelerateSpaceship();
        break;
      case "2":
        this.enrollSpaceship();
        break;
    }
  }

  // Função para acelerar a nave, pegamos a velocidade que deseja acelerar e passamos como parâmetro para o método speedUp da classe
  accelerateSpaceship() {
    let acceleration = Number(prompt("Quanto gostaria de acelerar?"));
    this.spaceship.speedUp(acceleration);
  }

  // Aqui a função para imprimir os dados da nave em um alerta
  printAndExit() {
    let finalMessage =
      "Nome: " +
      this.spaceship.name +
      "\n" +
      "Quantidade de tripulates: " +
      this.spaceship.crewQuantity +
      "\n" +
      "Velocidade atual: " +
      this.spaceship.currentVelocity +
      "\n";
    alert(finalMessage);
  }
}
```

- app.js
```
// Aqui criamos uma instância da classe App
// e chamamos o método que exibi o menu inicial
const app = new App()
app.start()
```