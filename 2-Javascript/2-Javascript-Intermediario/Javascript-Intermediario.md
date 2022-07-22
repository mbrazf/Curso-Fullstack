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
<br>
<hr>

## Exceções

### O que são Exceções

-  Exceções (Exceptions) são erros que ocorrem no código
- São capturados em tempo de execução (runtime)
- Podem ser tratados para que o código não quebre
- No Javascript, as exceções são lançadas pela classe Error
  - Quando é instanciada e lançada, o interpretador entende que ocorreu um erro

- Para a execução e exibe o erro
- Podemos utilizar o try e catch para poder tratar estes erros
- Assim como podemos lançar nosso próprios erros
  - Utilizamos o throw

### Throw
<br>

- Throw é utilizado para lançar um erro
- throw new Error("mensagem")

-  Quando um erro é encontrado ele é lançado e em seguida é encerrada a a execução do código

```
// Aqui criamos a classe Spaceship
class SpaceshipWeapon {
  constructor(identifier){
    this.identifier = identifier
    this.shotsLeft = 5
  }
  //  Método para atirar com a nave
  //  Verificamos se a quantidade de tiros restantes é maior que 0, se for atiraremos novamente
  //  Se não lançaremos uma mensagem de erro com o throw new Error(" ")
  shoot(){
    if(this.shotsLeft >0){
      console.log("BANG!")
      this.shotsLeft -= 1
    } else {
      throw new Error("Arma " + this.identifier + " sem munição")
    }
  }
}
// Aqui criamos uma instância da nave e passamos o valor do identifier
let fenixWeapon = new SpaceshipWeapon(10)

// Aqui chamamos o método de atirar
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()

// ao zerar o número de tiros restantes a mensagem de erro é lançada: Uncaught Error: Arma 10 sem munição 

console.log(fenixWeapon)
```
<hr>

### Try, Catch e Finally
<br>

- O try tenta executar o bloco de código
- Se houver algum erro no try a execução é passada para o catch que recebe a mensagem lançada com o throw new Error como parâmetro podendo acessar a mensagem com o e.message e tratar os erros.
- Também podemos utilizar o finally seu uso é opcional e ele será executado independente se houver ou não algum erro no catch.
```
// Aqui criamos a classe Spaceship
class SpaceshipWeapon {
  constructor(identifier){
    this.identifier = identifier
    this.shotsLeft = 5
  }
  //  Método para atirar com a nave
  //  Verificamos se a quantidade de tiros restantes é maior que 0, se for atiraremos novamente
  //  Se não lançaremos uma mensagem de erro com o throw new Error(" ")
  shoot(){
    if(this.shotsLeft >0){
      console.log("BANG!")
      this.shotsLeft -= 1
    } else {
      throw new Error("Arma " + this.identifier + " sem munição")
    }
  }
  // Aqui criamos um método para recarregar os tiros da nave
  reload(){
    this.shotsLeft = 5
  }
}
// Aqui criamos uma instância da nave e passamos o valor do identifier
let fenixWeapon = new SpaceshipWeapon(10)

// O try tenta executar o bloco de código, e se houver algum erro a execução do código irá passar para o catch.
try {
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()

  // No catch a mensagem de erro lançada com throw new Error() é passada como parâmetro "e" do catch e podemos assim acessar a mensagem de erro com o e.message.
  // Assim se houver algum erro na execução cairá no catch e será executada uma mensagem e depois chamamos o método para recarregar a arma
} catch(e){
  console.log(e.message)
  fenixWeapon.reload()

  // Aqui utilizamos o finally para exibir uma mensagem final
} finally {
  console.log("Arma deu bons tiros")
}

console.log(fenixWeapon)
```
<hr>
<br>

## Módulos Math e Date
<br>

### Principais métodos Math
```
// O Math.pow realiza um cálculo de potência elevando 5 a 3
console.log(Math.pow(5, 3))
// resultado: 125

//  O Math.PI retorna uma fração do valor de PI
console.log(Math.PI)
// resultado: 3.141592653589793

// Math.sqrt retorna a raiz quadrada de um número
console.log(Math.sqrt(64))
// resultado: 8

// Math.cbrt retorna a raiz cúbica de um número
console.log(Math.cbrt(30))
// resultado: 3.1072325059538586

//  Math.ceil retorna o valor arredondado para cima
console.log(Math.ceil(5.2))
// resultado: 6

//  Math.floor retorna o valor arredondado para baixo
console.log(Math.floor(5.2))
// resultado: 5

//  Math.ceil retorna o valor arredondado para cima
console.log(Math.ceil(5.2))
// resultado: 6

//  Math.random retorna um valor aletório entre 0 e 1 
console.log(Math.random())

//  Math.round retorna o valor arredondado mais próximo
console.log(Math.round(5.2))
// resultado: 5

//  Math.trunc retorna o valor inteiro, removendo ponto ou vírgula
console.log(Math.trunc(7.2))
// resultado: 7
```
- Para ver todos disponíveis: [Documentação MDN Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math) 
<br>

### Principais métodos date
<br>

- Utilizados para manipular datas
```
// O new Date() é utilizado para criar uma instância de data, recebe vários tipos de parâmetros ano, mês, dia, hora, minuto, segundo.
//  Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC)
// No date os meses começam em 0 e vão até 11
let myBirthday = new Date(1998, 0, 16)
console.log(myBirthday)

// Retorna o valor em milisegundos passados desde a data base do Javascript 1 de Janeiro de 1970 00:00:00 UTC até o dia atual.
let today = Date.now()
console.log(today)
// resultado: 1658239145278 milisegundos
```
- Para mais detalhes [Documentação MDN Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
<br>
<hr>

## Eventos no HTML
<br>

- Eventos são ações que ocorrem num sistema
  - Podem ocorrer por uma ação do usuário: como um clique de um mouse ou mudança do valor de um campo input.
  - Ou simplesmente como um fluxo do próprio sistema: como a página concluir seu carregamento.

- No HTML conseguimos mapear os eventos e definir ações

- No elemento desejado no HTML você declara o evento desejado.    
- E dentro das aspas você chama a função criada para este evento:   
```
 <p>
    <button onclick="clickMe()">Clique aqui</button>
  </p>
```

- Aqui a função JS criada para o evento acima:   
```
function clickMe(){
        console.log('Fui clicado!')
}
```

- Existem outros tipos de eventos:

```
onfocus="nomeFunção( )" - Usado ao focar/clicar no elemento.

onclick="nomeFunção()" - Usado ao clicar no elemento.

onblur="nomeFunção()" - Usado ao desfocar o input.

onchange="nomeFunção()" - Usado se tiver alguma alteração no input.

onmouseover="nomeFunção()" - Usado ao passar o mouse em cima do elemento desejado.
```

- Para ver todos os eventos disponíveis: [Documentação Eventos MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events) 
<hr>
<br>

## Introdução ao DOM
<br>

- DOM significa Document Object Model ou Modelo de Objeto de Documento
  - Possibilita que um documento de uma linguagem de marcação seja acessado como uma árvore de objetos.

- EXEMPLO:
```
<html>
    <body>
        <table>
            <tr>
                <th>Cabeçalho - Coluna 01</th>
            </tr>
            <tr>
                <td>Linha 01 - Coluna 01</td>
            </tr>
            <tr>
                <td>Linha 02 - Coluna 02</td>
            </tr>
        </table>
    </body>
</html>
```

- O DOM pega toda a estrutura HTML e transforma em uma estrutura de objeto:
```
HTML    
|- BODY   
    |- TABLE    
        |- TR   
            |-TH    
        |- TR   
            |-TD    
        |- TR   
            |- TD   
```

- Com esta árvore de objetos que o DOM disponibiliza, conseguimos:
  - Selecionar um determinado elemento
  - Alterar seu conteúdo.
  - Capturar o valor digitado por um usuário num campo input de um formulário.  
<br>

- Por padrão o browser já traz uma instância do DOM preparada para ser utilizada.
  - Conseguimos acessá-lá com a palavra chave document.
  - É o elemento raiz de toda a árvore de objetos
  - É partir dele que conseguimos utilizar métodos para selecionar e manipular os elementos.
<hr>
<br>

### Selecionando Elementos no DOM
<br>

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selecionando Elementos no DOM</title>
    <script src="index.js"></script>
</head>
<body>
    <button onclick="show()">Exibir!</button>

    <p>
        <label>Nome: </label>
        <input type="text" id="name" name="fullname">
    </p>

    <div id="phones">
        <p>
            <label>Phone 01</label>
            <input type="text" name="phone" id="phone01">
        </p>

        <p>
            <label>Phone 02</label>
            <input type="text" name="phone" id="phone02">
        </p>
    </div>
</body>
</html>
```

- Formas de selecionar os elementos:
<br>


- Selecionando elemento pelo ID:
```
    let element = document.getElementById("name")

    // aqui exibimos um console.log e podemos acessar o valor do input com value
    console.log(element.value)
```

- Seleciona os elementos pela classe:
```
    let elements = document.getElementsByClassName('classe')

    console.log(elements)
```

- Selecionando elementos pelo atributo name:
```
    let elements = document.getElementsByName("phone")

    // Aqui exibimos um console.log que irá retornar todos os elementos que contém o atributo name selecionado, podemos acessar o valor do elemento com o número do índice que ele se encontra [0] e value
    console.log(elements[0].value)
```


- Selecionando primeiro elemento por query:
```
    // Aqui iremos selecionar o primeiro elemento com o seletor desejado
    let element = document.querySelector("div#phones input[name='phone']")

     // Aqui exibimos um console.log que irá retornar todos os elementos que contém o atributo name selecionado, podemos acessar o valor do elemento com o número do índice que ele se encontra [1] e value
    console.log(element)
```

- Selecionando todos os elementos por query:
```
     // Aqui iremos selecionar todos os elementos input com o name phone dentro da div com id phones
    let elements = document.querySelectorAll("div#phones input[name='phone']")

     // Aqui exibimos um console.log que irá retornar todos os elementos que contém o atributo name selecionado, podemos acessar o valor do elemento com o número do índice que ele se encontra [1] e value
    console.log(elements[1].value)
```

- Selecionando elementos pela tag name HTML
```
    //Aqui iremos selecionar todos os elementos com a tag input no HTML
    let elements = document.getElementsByTagName("input")

    // Aqui exibimos um console.log que irá retornar todos os elementos que contém a tag name input, podemos acessar o valor do elemento com o número do índice que ele se encontra [1] e value
    console.log(elements)
```
<br>
<hr>

### Manipulando o DOM
<br>

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulando o DOM</title>
    <script src="index.js"></script>
</head>
<body>
    <button onclick="addNewPhone()">Novo Telefone</button>
    <button onclick="printPhones()">Imprimir Telefones</button>
    <br>

    <form id="phones">
        <p>
            <label>Telefone 1: </label>
            <input type="text" name="phone">
        </p>
    </form>
</body>
</html>l
```

- JAVASCRIPT
```
// Aqui criamos a função para adicionar novos campos input para telefone
// Selecionamos o elemento form que contém o id phones
function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")

    // Aqui utilizamos children para pegar o elemento filho que está no índice [0] e utilizamos o cloneNode() utilizado para clonar o elemento, ele recebe um parâmetro true para clonar todos os elementos filhos e filhos dos filhos, já o false clona só o primeiro filho
    const newPhone = phoneForm.children[0].cloneNode(true)

    // Aqui alteramos a posição do novo elemento clonado
    const phonePosition = phoneForm.children.length + 1

    // Aqui chamamos a variável que contém o elemento clonado e selecionamos o label dele e alteramos seu texto com a posição
    newPhone.querySelector("label").innerText = "Telefone  " + phonePosition + ": "

    // Aqui adicionamos o novo elemento clonado newPhone dentro do phoneForm ou seja adicionamos o elemento clonado no DOM
    phoneForm.appendChild(newPhone)

    // Aqui exibiremos no console.log o phoneForm com os novos elementos filhos clonados 
    console.log(phoneForm.children)
}

// Aqui a função para exibir um alerta com o input e o valor de cada um
// Selecionamos todos os elementos input com o name phone que irá retornar uma lsita/array
// Utilizamos o método forEach nesse array que foi retornado que irá exibir para cada input uma mensagem de alerta com o valor digitado nos inputs
function printPhones(){
    let message = " "
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) =>{
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}
```
<br>
<hr>

### Enviando o DOM para a função
<br>

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviando o DOM para função</title>
    <script src="index.js"></script>
</head>
<body>
    <form>
        <!-- Aqui chamamos a função sayMyFirstName() com o evento on change e passamos esse elemento input como parâmetro da função utilizando o this-->
        <p>
            <label>Nome: </label>
            <input type="text" name="first-name" onchange="sayMyFirstName(this)">
        </p>

        <!--Aqui chamamos a função sayMyLastName() a partir do evento onchange-->
        <p>
            <label>Sobrenome: </label>
            <input type="text" name="last-name" onchange="sayMyLastName()">
        </p>
    </form>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui criamos uma função que recebe element como parâmetro que no caso é o próprio input HTML que foi passado como parâmetro.
// Exibimos um alerta e acessamos o valor do element que vai ser digitado no input

function sayMyFirstName(element){
    alert("Meu primeiro nome é " + element.value)
}

// Aqui a função do segundo input
// Acessamos o evento a partir da palavra event, ele é uma variável global do navegador que armazena o último evento que foi chamado no DOM, e o target armazena de qual elemento o evento foi chamado e o value o valor digitado nesse evento
// Podemos utilizar o event.target em qualquer tipo de evento onclick, onmouseover, onfocus etc.

function sayMyLastName(){
    console.log(event)
    alert("Meu ultimo nome é " + event.target.value)
}
```
<br>
<hr>

### Exercício Manipulando DOM

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Manipulando o DOM</title>
    <script src="index.js"></script>
</head>
<body>
    <h1>Registro de Casas</h1>
    <form id="house">
        <p>
            <label>Número: </label>
            <input type="text" name="numero" id="numero">
        </p>
        <p>
            <label>Bairro: </label>
            <input type="text" name="bairro" id="bairro">
        </p>
        <p>
            <label>Cidade: </label>
            <input type="text" name="cidade" id="cidade">
        </p>
        <p>
            <label>Área: </label>
            <input type="text" name="area" id="area">
        </p>
        <button onclick="addHouse()" type="button">Adicionar</button>
    </form>

    <ul id="house-list">
        
    </ul>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui criamos a função para adicionar a casa na lista
function addHouse(){
    let numero = document.getElementById("numero").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let area = document.getElementById("area").value

    // Aqui criamos um elemento li
    // e passamos o texto da casa com os dados pegos nos inputs
    let lista = document.createElement("li")
    lista.innerText = area + "m²,  número " + numero + " (" + bairro + " - " + cidade + ")" 

    // Aqui criamos um botão para remover
    // setamos o tipo dele como "button" com o type
    // setamos seu texto como "Remover" com o innerText
    // e utilizamos o setAttribute para setar o atributo onclick que irá chamar a função de remover as casas e passamos o próprio elemento como parâmetro da função
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick" , "removeHouse(this)")
    
    // Aqui inserimos o removeButton como filho do li
    lista.appendChild(removeButton)

    // Aqui selecionamos a ul pelo id e inserimos a lista com o li criada, como filho da ul
    document.getElementById("house-list").appendChild(lista)
}

//  Aqui criamos a função para remover as casas, ela recebe o elemento removeButton como parâmetro
// Pegamos o elemento LI pai do button que recebemos como parâmetro com o parentNode
// e selecionamos a UL pelo seu id e utilizamos o removeChild(removeList) e passamos a variável que pega o elemento pai do button como parâmetro para ser removido 
function removeHouse(button){
    let removeList = button.parentNode
    document.getElementById("house-list").removeChild(removeList)
}
```
-  [Documentação createElement](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
-  [Documentação setAttribute](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute)
-  [Documentação removeChild](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild)
-  [Documentação parentNode](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode)
<hr>

### Seletores para formulários

- HTML
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seletores para Formulários</title>
    <script src="index.js"></script>
</head>

<body>
    <form>
        <p>
            <label>Nome :</label>
            <input type="text" name="name">
        </p>

        <p>
            <label>Cor primária: </label>
            <select name="color">
                <option value="yellow">Amarelo</option>
                <option value="blue">Azul</option>
                <option value="red">Vermelho</option>
            </select>
        </p>

        <p>
            <label>Gosta de programar? </label>
            <input type="radio" value="Sim" name="like-programming"> Sim
            <input type="radio" value="Não" name="like-programming"> Não
        </p>

        <p>
            <label>Conhecimentos em programação web: </label>
            <br>
            <input type="checkbox" value="HTML" name="developer-options">HTML
            <input type="checkbox"value="Javascript"name="developer-options">Javascript
            <input type="checkbox" value="CSS" name="developer-options">CSS
            <input type="checkbox" value="React"name="developer-options">React
        </p>

        <button type="button" onclick="showInfo()">Mostrar informações</button>
    </form>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui a função para exibir as informações
function showInfo(){

    // Aqui selecionamos o elemento input pelo seu name e pegamos seu valor com o value
    let name = document.querySelector("input[name ='name']").value

    // Aqui selecionamos o select pelo seu name e selecionamos opção que está marcada e acessamos o texto dela com text
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text

    // Aqui selecionamos o input pelo seu name like-programming e pegamos o value da opção selecionada
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value

    // Aqui selecionamos todos os inputs com o name developer-options e os que foram selecionados
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

    // Aqui criamos um array vazio e utilizamos o forEach para percorrer cada elemento selecionado e adicionamos no array
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value) })

    // Aqui utilizamos o método join no array optionsValue para adicionar uma vírgula entre os itens do array e criamos a mensagem de alerta para exibir os dados pegos nos inputs
    let optionsChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimento em programação web: " + optionsChecked)
}
```
<hr>
<br>

### Evento para o formulário

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos para formulários</title>
    <script src="index.js"></script>
</head>
<body>
    <!---onsubmit é usado quando se tem um formulário com o botão do tipo submit usado para chamar alguma ação do Javascript-->
    <form onsubmit="save()">
        <p>
            <label>Nome: </label>
            <input type="text" name="name">
        </p>

        <p>
            <label>Programa em:</label>
            <select name="programming-lang">
                <option value="Javascript">Javascript</option>
                <option value="Ruby">Ruby</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
            </select>
        </p>
        <!-- Aqui o botão do tipo submit que irá chamar a função save() do form-->
        <button type="submit">Salvar</button>
    </form>
</body>
</html>
```

- JAVASCRIPT
```
// Criamos a função save que será executada ao clicar no botão submit
function save(){

    // Aqui utilizamos o event.prevenDefault() que evita o comportamento padrão de recarregar a página para enviar o formulário do evento onsubmit()
    event.preventDefault()

    // Selecionamos o input com o name name e pegamos seu valor
    let name = document.querySelector("input[name='name']").value

    // Aqui selecionamos o select com o name programming-lang e acessamos o valor selecionado com o value
    let programmingLang = document.querySelector("select[name='programming-lang']").value


    // Aqui exibimos um alerta com os dados colocados no input
    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}
```
<hr>
<br>

### Manipulando Estilos

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulando estilos</title>
    <script src="index.js"></script>
    <style>
        p.red-color {
            color: red;
        }
    </style>
</head>
<body>
    <button type="button" onclick="setBlueBackground()">Fundo Azul</button>
    <button type="button" onclick="setTransparentBackground()">Fundo Transparente</button>
    <button type="button" onclick="setRedColor()">Fonte vermelha</button>
    <button type="button" onclick="removeRedColor()">Fonte normal</button>
    <br>
    <p id="style-text">
        Manipulando CSS via DOM
    </p>
</body>
</html>
```

- JAVASCRIPT
```
// Função para alterar a cor do fundo do texto
// Selecionamos o elemento desejado e alteramos sua cor de fundo com a propriedade style.backgroundColor = "blue"
function setBlueBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

// Aqui uma forma mais direta de alterar os estilos
// Função para alterar a cor do fundo do texto
// Selecionamos o elemento desejado e alteramos sua cor de fundo com a propriedade style.backgroundColor = "transparent"
function setTransparentBackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent"
}

// Função para alterar a cor do texto
// Selecionamos o elemento desejado e adicionamos uma classe com o classList.add(" ")
// nessa classe definimos a cor de texto como red
function setRedColor(){
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

// Função para remover a cor aplicada no texto
// Selecionamos o elemento desejado e removemos a classe que foi adicionada com o classList.remove(" ")
function removeRedColor(){
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}
```
<hr>
<br>

### Manipulando atributos

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulando Estilos</title>
    <script src="index.js"></script>
</head>
<body>
    <p>
        <select onchange="verifyEnablement()">
            <option value="enabled">Habilitado</option>
            <option value="disabled">Desabilitado</option>
        </select>
    </p>
    <p>
        <label>Algum texto: </label>
        <input type="text" name="some-text">
    </p>
    <p id="message"></p>
</body>
</html>
```

- JAVASCRIPT
```

// Função para ativar desativar o input
function verifyEnablement(){

    // Primeiro selecionamos o select e acessamos seu valor
    // Depois verificamos se o valor do select é igual a disabled, se for iremos selecionar o parágrafo abaixo do input e iremos alterar seu atributo disabled para true desativando o input e alteramos a mensagem que será exibida e as cores

    let selectedValue = document.querySelector("select").value
    if(selectedValue == "disabled"){
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    } else {

        // E aqui a mesma coisa selecionamos o input e alteramos seu atributo disabled para false, e alteramos os estilos caso o input esteja habilitado

        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = "HABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "green"
    }
}
```
<hr>
<br>

### Exercício Manipulando o DOM

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Manipulando o DOM</title>
    <script src="property.js"></script>
    <script src="app.js"></script>
    <script src="main.js"></script>
</head>
<body>
    <h3>Cadastro de Imóveis</h3>
    <form onsubmit="app.addProperty()">
       <p>
           <label>Tipo: </label>
           <select name="kind">
               <option value="Casa">Casa</option>
               <option value="Apartamento">Apartamento</option>
           </select>
       </p>
        <p>
            <label>Área: </label>
            <input type="number" name="area" step="any" min="0">
        </p>
        <p>
          <input type="checkbox" name="rented">Alugado
        </p>

        <button  type="submit">Salvar</button>
        <button  type="button" onclick="app.cleanForm()">Limpar</button>
    </form>

    <h3>Imóveis cadastrados</h3>

    <ul id="properties">
        
    </ul>
</body>
</html>
```

- JAVASCRIPT
```
- property.js

// Aqui criamos a classe Property que contém o constructor que recebe kind, area e rented como parâmetros
class Property {
    constructor(kind, area, rented){
        this.kind = kind
        this.area = area
        this.rented = rented
    }
}
```

```
- main.js

// Aqui criamos uma instância global da classe App podendo assim acessar ela de qualquer lugar
const app = new App()
```

```
- app.js

//  Aqui criamos a classe App que irá conter toda a aplicação
class App {
    // Criamos um método addProperty()
    // removemos o comportamento padrão do botão submit
    // selecionamos os elementos e criamos uma instância da classe Property do outro arquivo
    // chamamos o método addOnPropertiesList e passamos o objeto/instância como parâmetro
    // e chamamos o método que limpa os campos do formulário
    addProperty (){
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented'] ").checked
        let property = new Property(kind, area, rented)

        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    // Aqui criamos outro método que recebe a instância/objeto criado acima
        addOnPropertiesList(property){
        // Aqui criamos um elemento li e criamos o texto com os dados pegos nos inputs
        // Verificamos se a property.rented está marcada, se estiver chamamos o método que exibe a marca de ALUGADO se não estiver iremos chamar o método da marca DISPONÍVEL
        // e inserimos a rentedMark como filho da li
        let listElement = document.createElement("li")
        let propertyInfo = "Tipo: " + property.kind + " (Área: " + property.area + "m²)"
        if(property.rented){
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        } else {
            let availableMark = this.createAvailableMark()
            listElement.appendChild(availableMark)
        }

        // Aqui atualizamos o texto da li com o texto com os dados do imóvel
        // chamamos o método que cria o botão de remover
        // e inserimos o botão como filho da li
        listElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)

        // e aqui selecionamos a ul e inserimos a li como filho
        document.getElementById("properties").appendChild(listElement)
    }

    //  Aqui o método para criar a marca de alugado
    //  Criamos um elemento span
    //  alteramos seus estilos e retornamos ele
    createRentedMark(){
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO!"
        return rentedMark
    }

    //  Aqui o método para criar a marca de disponível
    //  Criamos um elemento span
    //  alteramos seus estilos e retornamos ele
    createAvailableMark(){
        let availableMark = document.createElement("span")
        availableMark.style.color = "white"
        availableMark.style.backgroundColor = "green"
        availableMark.innerText = "DISPONÍVEL!"
        return availableMark
    }

    // Aqui criamos o método para criar o botão para remover
    // setamos seu atributo com o evento onclick que chama o método remove()
    // alteramos o texto que será exibido no botão
    // e retornamos o botão criado
    createRemoveButton(){
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    //  Aqui criamos o método para limpar o formulário
    //  e definimos os valores como vazio
    cleanForm(){
        document.querySelector("input[name='area']").value = " "
        document.querySelector("input[name='rented']").checked = false
    }

    // Aqui o método para remover os itens da lista
    // Armazenamos em uma variável o event do botão e pegamos o parentNode que é o elemento pai
    // Selecionamos o elemento com o id properties que é a UL e utilizamos o removeChild(liToRemove) para remover o elemento filho LI
    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }
}
```
<hr>
<br>

### Eventos a partir do Javascript
<br>

- Para adicionar eventos pelo Javascript utilizamos o addEventListener() que recebe 2 parâmetros o primeiro é o evento desejado onclick, onmouseover e todos os outros disponíveis e o segundo parâmetro é a função que será executada

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos a partir do Javascript</title>
</head>
<body>
    <form>
        <select name="select-option">
            <option>Opção 01</option>
            <option>Opção 02</option>
        </select>
    </form>
    <script src="index.js"></script>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui selecionamos o elemento select pelo seu name
// e para adicionar eventos diretamente pelo JS utilizamos o addEventListener() que recebe 2 parâmetros o primeiro é o evento desejado onclick, onmouseover e todos os outros disponíveis e o segundo parâmetro é a função que será executada

document.querySelector("select[name='select-option']").addEventListener("change", function(){
    alert(event.target.value)
})
```
<hr>
<br>

### Manipulando Eventos

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulando Eventos</title>
</head>
<body>
    <form>
        <label>Algum texto: </label>
        <input type="text" name="sample-input">
    </form>
    <script src="index.js"></script>
</body>
</html>
```

- JAVASCRIPT
```
function doChange(){
    alert(event.target.value)
}

// Selecionamos o elemento desejado
let sampleInput = document.querySelector("input[name='sample-input']")

// Adicionamos um evento change nesse elemento que chama a função doChange criada acima
sampleInput.addEventListener("change", doChange)

// Instanciamos um objeto Event que recebe como parâmetro o nome do evento a ser criado
let changeEvent = new Event("change")

// Aqui iremos disparar um evento com o dispacthEvent() ele espera receber um objeto Event que contém o evento que iremos disparar no caso a variável changeEvent
sampleInput.dispatchEvent(changeEvent)

// E o removeEventListener() remove o evento de determinada função, passamos o evento e a função como parâmetros para remover
//sampleInput. removeEventListener("change", doChange)
```
<hr>
<br>

### This e as Arrow functions

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This e as Arrow Functions</title>
    <script src="index.js"></script>
</head>
<body>
    
</body>
</html>
```

- JAVASCRIPT
```
 //Uma função padrão tem um próprio this que no exemplo o this se refere ao objeto testingArrow, já a Arrow Function não tem seu próprio this, então ao chamarmos o this na arrow function irá retornar um objeto vazio, ou um objeto window que corresponde ao contexto do navegador.

testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function(){
      console.log(this.name)
    },
    arrowFunction: () => {
      console.log(this.name)
    }
  }
  testingArrow.normalFunction()
  testingArrow.arrowFunction()
  
  // A função padrão ela obedece ao escopo do objeto, então ela é chamada dentro do contexto de onde foi criada
  // A Arrow Function sempre vai estar inserida no contexto de onde ela é chamada
```