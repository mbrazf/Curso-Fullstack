# Anotações Javascript (Lógica de Programação)


## O que é Javascript:

## História e Características
<br>

-   Nasceu em 1995
-   Criada por Brendan Eich a serviço da Netscape
-   Surgiu para dar mais dinamismo às páginas HTML
    -   Apenas HTML e CSS deixavam as páginas estáticas.

-   Possui múltiplos paradigmas:
    -   Orientada a objetos
    -   Funcional
    -   Orientada a eventos

-   Possui tipagem dinâmica e fraca.
<br>
<hr>

## Evolução:
<br>

-   Em 1996 foi normatizado através da ECMA Internationla
    -   ECMA International é especializada em padrões e normativas

-   Nome oficial da linguagem é ECMAScript
    -   Javascript já era patenteado pela Sun (hoje Oracle)
    -   A linguagem já era conhecida como Javascript e o nome novo não pegou.

-   O ECMAScript encontra-se atualmente na versão 8 (ES8)
-   Hoje não utilizada somente no front-end
    -   Criado o NodeJS
    -   É um interpretador capaz de ler códigos JS do lado do servidor.
<br>
<hr>

## Tipos Primitivos
<br>

-   Os tipos primitivos são a base de um código.
-   Utilizamos para representar algum dado "bruto".
-   Com estes tipos que somos capazes de construir estrutura mais complexas.
<br>

```
-   Number: 
    -   Basicamente qualquer número inteiro, com ponto ou negativo : 1, 2, 3, 4.5, 0.3, -7.

-   String: 
    -   Qualquer letra, número, palavra, texto entre aspas, aspas simples ou apóstrofo:  "Spaceship" , "11", 'Spaceship' , `` .

-   Boolean/Booleano: 
    -   true ou false | verdadeiro ou falso.

-   null:
    -  Significa nulo ou nada.

-   undefined:
    -   Representa um valor indefinido.
```

<br>
<hr>

## Operações Básicas
<br>

- ### Operações com Numbers

Soma: 2 + 2 , 2 + -1

Subtração: 2 - 2 ,  2.5 - 3

Multiplicação:  2 * 5 ,  3.5 * 2

Divisão:  10 / 2 ,  5 / 2.5

Módulo: retorna o resto de uma divisão   10 % 3
<hr>

- ### Operações com Strings
<br>

```
-   Soma ou concatenação de strings/textos:
    -   "Planeta" + "Terra" 
    -   resultado será "PlanetaTerra"

-   Extrair um caractere de uma string:
    -   "Planeta Terra"[2]     : basta colocar a posição/índice do caractere que na programação começa em 0, no exemplo irá retornar a letra "a" que está na posição/índice 2 da string.

-   Saber o tamanho de um string:  no exemplo abaixo o retorno será 13.
    - "Planeta Terra".length

-   Podemos utilizar as operações em conjunto:
    -   "Planeta " + "Terra"[3]   
    -   Aqui primeiro iremos na string "Terra" e iremos retirar um caractere que está no índice [3] e depois iremos concatenar com a string "Planeta" então o resultado será "Planeta r".

- E aqui um exemplo semelhante porém executamos assim :
    -   ("Planeta" + "Terra")[3]
    -   Aqui primeiro será executado a concatenação das strings dentro dos parênteses que será "Planeta Terra" e depois iremos retirar um caractere do índice também [3] que no caso será o caractere "n".

- E como o Javascript tem a tipagem fraca então podemos somar/concatenar valores de diferentes tipos no exemplo strings com numbers:
    -   "Eu vivo na Terra a " + 24 + " anos"
    -   o resultado será "Eu vivo na Terra a 24 anos" .
```

<hr>
<br>

-   ### Ordem de precedência das operações

```
5 * 5 + 1
-   Neste exemplo primeiro é realizado a multiplicação e depois a soma resultando no valor 26.

5 * (5 + 1)
-   Neste exemplo primeiro executamos a soma dentro dos parênteses e depois a multiplicação. resultado: 30.

5 * (5 / (5 - 4) + 1)
-   E aqui primeiro realizamos a subtração dos parênteses, depois a divisão do outro parênteses, depois a soma e por último a multiplicação. resultado: 30.
```
<hr>
<br>

## Recursos Nativos do Browser

```
-   console.log( ) :
    -   Com ele podemos exibir alguma mensagem no console do navegador pode ser string ou numbers.
    
-   console.info( ) :
    -   Exibe uma mensagem como o console.log mas com um destaque.

-   console.warn( ) :
    -   Exibe uma mensagem de aviso amarela.

-   console.error() :
    -   Exibe uma mensagem de erro vermelha.

-   alert() :
    -   Exibe uma mensagem de alerta no browser com um botão para confirmar e fechar.

-   confirm() :
    -   Exibe uma mensagem com um botão de Ok e um para sair.

-   prompt() :
    -   Exibe uma caixa no browser em que podemos digitar nela e confirmar.
```
<hr>
<br>

## Declarando Variáveis

-   Temos como declarar variáveis de 3 formas:

<br>

- let:
- Para declarar a variável basta colocar let e o nome da variável e o valor que ela irá receber.
```
- Aqui declaramos a variável spaceship e abaixo exibimos o valor dela no console.log

let spaceship = "FE Supernova"
console.log(spaceship)


- E para sobrescrever o valor da variável basta colocar o nome da variável e atribuir um novo valor.

spaceship = "FE Helmet"
console.log(spaceship)
```

- const :
- Para declarar é a mesma coisa do let, mas o const tem uma diferença, não podemos alterar o valor da variável como no let ocorrendo um erro.
```
const squad = "Estelar"
console.log(squad)

- ao tentar alterar o valor da variável irá ocorrer um erro.

squad = "Espacial"
console.log(espacial)
```

- var :
- O var é basicamente igual o let porém já não é tão usado.
- Podemos alterar o valor dele igual o let.
```
var velocity = 80
console.log(velocity)

velocity = 100
console.log(velocity)
```

- Também podemos declarar uma variável vazia
- o retorno dela será undefined por não ter nenhum valor definido.
```
let noValue
console.log(noValue) 
```

- Podemos utilizar os recursos nativos do browser para armazenar valores nas variáveis.
-   No exemplo utilizamos o confirm, se confirmarmos a mensagem exibida o valor que será atribuido na variável será true , e se cancelarmos será false.
```
let departureConfirmation = confirm("Nave pronta para decolar. Aguardando confirmação!")

console.log(departureConfirmation)
```

-   Neste exemplo utilizamos o prompt()
-   O que for digitado no prompt será atribuído na variável.
-   E se cancelarmos sem digitar nada o retorno será null.
```
let pilot = prompt("Qual seu nome, piloto?")
console.log(pilot)
```

- ### Exercício
```
alert("Bem-Vindo! A seguir pediremos que informe alguns dados.")

let name = prompt("Informe seu Nome")
let age = prompt("Informe sua Idade")

let ageConfirmation = confirm("Sua idade é " + age + " anos?")

alert("Nome: " + name + "\nIdade: " + age + " anos" + "\nIdade confirmada: " + ageConfirmation)
```
<hr>
<br>

## Comentários

- Basicamente é uma forma de escrever textos no código sem ele ser executado.

```
-   Comentário de uma linha

// Meu comentário de uma linha
console.log("Aprendendo Comentários")


-   Comentário de várias linhas

/* Meu
comentário 
de
várias
linhas*/
console.log("Comentário de várias linhas")
```
<hr>
<br>

## Javascript fora do console

- Aqui como utilizar o JS em um arquivo HTML utilizando a tag script
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript fora do console</title>
</head>
<body>
    <h1>Minha página</h1>
    <script src="hello_world.js"></script>
</body>
</html>
```
-   JS
```
alert("Meu código JS externo.")
```
<hr>

- ### Exercício

```
-HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

```
-   Javascript

let nameOlder = prompt("Nome da pessoa mais velha.")
let ageOlder = prompt("Idade da pessoa mais velha.")

let nameYounger = prompt("Nome da pessoa mais nova.")
let ageYounger = prompt("Idade da pessoa mais nova.")

let ageDiff =  ageOlder - ageYounger 


alert(
    "Pessoa mais velha: " + nameOlder + "\nIdade: " + ageOlder + " anos" + 
"\n\nPessoa mais nova: " + nameYounger + "\nIdade: " + ageYounger + " anos" + 
"\n\nA diferença de idade é de : " + ageDiff + " anos")
```
<hr>
<br>

## Comparações de Dados


- ### Operadores de comparação

' == '   - Operador de Igualdade para saber se um valor é igual ao outro
```
let velocity = 80
console.log(velocity == 90)

// resultado será false


- nesse outro exemplo será true porque tem o mesmo valor independente do tipo

let velocity = 80
console.log(velocity == "80")
```

' === ' - Operador de igualdade de tipo usado para ver se o um valor é do mesmo tipo do outro
```
let velocity = 80
console.log(velocity === "80")

// 80 é de um tipo diferente de "80", um é number e o outro é string/texto
```

' != ' - Operador de diferença usado para saber se um valor é diferente de outro independente do tipo
```
let velocity = 80
console.log(velocity != 80)

// resultado será false
```

' !== ' - Operador de diferença, verifica se os valores são de tipos diferentes.
```
let velocity = 80
console.log(velocity !== "80")

// resultado será true porque são de tipos diferentes
```

' > ' - Operador maior que, verifica se um valor é maior que o outro
```
let velocity = 80
console.log(velocity > 70)

// resultado true, 80 é maior que 70


- podemos comparar strings também

let spaceship = "Golias"
console.log(spaceship > "Helmet")

//resultado false porque a string "Golias" não vem antes de "Helmet"
```

' >= ' - Operador maior ou igual, verifica se um elemento é maior ou igual ao outro.
```
let velocity = 80
console.log(velocity >= 90)

// resultado será false porque 80 não é maior e nem igual a 90


- também utilizamos com string

let spaceship = "Golias"
console.log(spaceship >= "Golias")

// resultado true porque são iguais
```

' < ' Operador menor que, verifica se um valor é menor que o outro.
```
let velocity = 80
console.log(velocity < 120)

// true 80 é menor que 120

- com strings

let spaceship = "Golias"
console.log(spaceship < "Helmet")

// true porque "Golias" vem antes de "Helmet"
```

' <= ' - Operador menor ou igual, verifica se um elemento é menor ou igual ao outro.
```
let velocity = 80
console.log(velocity <= 130)

// true 80 é menor que 130

- com strings

let spaceship = "Golias"
console.log(spaceship <= "Helmet")

// true porque "Golias" vem antes de "Helmet"
```
<hr>

##  Operações Lógicas

### O que são operações lógicas:

-   Expressões construídas a partir de operações com valores booleanos.
-   Também retornam um valor booleano.
-   Seguimos os resultados lógicos contidos na Tabela Verdade.

### Tabela Verdade

-   É como uma tabuada

    -   É uma tabela de resultados
    -   A tabuada mostra o resultado das multiplicações de diversos números
    -   Os valores booleanos têm a Tabela Verdade
    -   Mostra o resultado de diversas operações lógicas
    -   Diferente da tabuada , os valores lógicos são apenas dois (true e false)

-   As operações básicas que temos na programação hoje são 3:

    -   E (AND)
    -   OU (OR)
    -   NÃO (NOT)
-   A tabela Verdade é o resultado da combinação dos dois valores booleanos em todas as combinações possíveis.

-   Para simplificar, trabalharemos sempre com expressões de dois termos,

    -   Já que no caso destas 3 operações, mesmo quando há mais termos, podemos isolar de 2 em 2.

### Expressões Lógicas

-   Numa expressão lógica, podemos ter um ou mais operadores lógicos
-   Cada termo é um valor booleano ou operação que retorne um booleano.

```
-   Exemplo 1

10 > ou 5 <= 5

-   Exemplo 2

0 >= 0 ou 5 > 6 e 1 > 0
```

### Operadores Lógicos

&& - Sinal E (AND) // Retorna verdadeiro caso ambas as expressões sejam verdadeiros.

TRUE   e TRUE   = TRUE  
TRUE   e FALSE = FALSE  
FALSE e FALSE = FALSE  

```
-   Exemplo

let spaceship = "Elemental"
let velocity = 20

//console.log(spaceship.length == 9 && velocity > 15)
// V e V = V

//console.log(velocity > 10 && velocity < 19)
// V e F = F

//console.log(velocity < 17 && spaceship == "Elemental")
// F e V = F

//console.log(spaceship == "Golias" && velocity > 21)
// F e F = F
```

|| - Sinal OU (OR) // Retorna verdadeiro se pelo menos uma das expressões for verdadeira.

TRUE   ou TRUE   = TRUE  
TRUE   ou FALSE = TRUE  
FALSE ou FALSE =  FALSE  

```
-   Exemplo

let spaceship = "Elemental"
let velocity = 20

//console.log(spaceship.length == 9 || velocity > 15)
// V e V = V

//console.log(velocity > 10 || velocity < 19)
// V e F = V

//console.log(velocity < 17 || spaceship == "Elemental")
// F e F = F
```

! - Sinal NEGAÇÃO (NOT) // Inverte o resultado da expressão, se for true sera convertida para false, e se for false será convertida para true.

! TRUE   = FALSE  
! FALSE = TRUE
```
-   Exemplo

let spaceship = "Elemental"
let velocity = 20

//console.log(!(velocity > 19))
// o retorno seria true mas com a negação se torna false

console.log(!(spaceship == "Golias"))
// o retorno seria false mas com a negação se torna true
```

```
-   Exemplo mais complexo

let spaceship = "Elemental"
let velocity = 20

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15))

//!(velocity > 25 && spaceship == "Elemental")
//!F e V = F o resultado era true mas com a negação vira false

//(velocity - 3 == 17 && spaceship.length + 1 > 15)
// V e F = V

// F || V = V 
//false ou true = true
```
<hr>
<br>

## Estruturas Condicionais

-   Um dos motivos pelo qual tivemos que aprender operadores lógicos.
-   São blocos de códigos que são executados baseado no resultado de uma expressão lógica.
-   Também são chamadas de Controle de Fluxo
    -   Podem direcionar a aplicação por um determinado fluxo com base no valor das expressões.  
<br>

### Estrutura condicional IF/SE

-   Condição Simples
-   Se a condição for verdadeira/TRUE o bloco de código abaixo será executado. Caso for FALSE o bloco IF se encerrará.

```
if (condição) {
    //Bloco de código a ser executado
}
```
-   Exemplo
```
let velocity = 90

if(velocity < 100){
   console.log("Estamos numa velocidade aceitável")
}

// a mensagem será executada por que a condição é verdadeira
```

### Estrutura condicional IF ELSE/ SE SENÃO
-   Condição Composta
```
-   Se a condição for FALSE o bloco if não será executado mas será executado o bloco do else.
-   Podemos usar outro bloco IF dentro do bloco ELSE.
-   Não podemos utilizar o ELSE sem um IF

if (condição) {
    //Bloco de código a ser executado
} else {
    //Bloco de código a ser executado
}
```

-   Exemplo
```
let velocity = 110

if(velocity < 100){
   console.log("Estamos numa velocidade aceitável")
} else {
  console.log("Entrando em velocidade de risco!")
}
```

### Como usar a estrutura condicional encadeada:
```
if (condição) {
    //Bloco de código a ser executado
} else if{
    //Bloco de código a ser executado
} else
```

- Exemplo:
```
let velocity = 110

if (velocity < 40) {
  console.log("Velocidade baixa !")
} else if(velocity <= 100) {
    console.log("Cuidado! Próximo à velocidade de risco!")
  } else {
    console.log("Velocidade de Risco!")
  }

-   Se a velocidade for menor que 40 irá exibir uma mensagem, se for maior que 40 outra mensagem e se for maior que 100 a outra mensagem.
```

### Operador Condicional Ternário
-   É Basicamente a estrutura IF resumida em só uma linha de código.
-   Se a condição for verdadeira será executado o bloco1, e se for falsa o bloco1 será ignorado e será executado o bloco2.
-   Só é recomendado utilizar o operador ternário quando a expressão e os blocos de código são pequenos e não passam de uma linha de código.
```
condição ? bloco1 : bloco2 
```
-   Exemplo
```
(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")

// Como a condição é verdadeira será executado o primeiro bloco
```
<hr>
<br>

-   ### Exercício

```
-   HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Utilizando Condicionais</title>
</head>
<body>
    <h1>Exercício Utilizando Condicionais</h1>
    <script src="script.js"></script>
</body>
</html>
```
```
-   JAVASCRIPT

// Aqui pegamos o nome do piloto
let pilotName = prompt("Qual o seu nome piloto ?");

// Aqui definimos a velocidade em 0
let velocity = 0;

// Aqui pegamos a velocidade que o piloto deseja acelerar
let newVelocity = prompt("A qual velocidade você gostaria de acelerar ?");
// Aqui confirmamos a velocidade
let confirmVelocity = confirm("Estamos indo para " + newVelocity + " km/s.");

// Aqui verificamos se a velocidade foi confimada e se foi atribuimos o valor na variável velocity
if (confirmVelocity) {
  velocity = newVelocity;
}

// E aqui verificamos as velocidades e exibimos uma mensagem para cada velocidade
if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter");
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir.");
} else {
    alert("Velocidade perigosa. Controle automático forçado.");
}

// Aqui exibimos uma mensagem com os dados, nome do piloto e velocidade da nave
alert(
  "Nome do Piloto: " + pilotName + "\nVelocidade Atual: " + velocity + " km/s."
);
```
<hr>
<br>

### Mini App - Data de partida, segundos, horas, dias

```
-   HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini App - Boolean</title>
    <script src="moment.min.js"></script>
    <script src="index.js"></script>
</head>
<body>
    <h1>MiniAPP</h1>
</body>
</html>
```
<hr>

```
-   JAVASCRIPT

// Aqui utilizamos a biblioteca moment.js para manipular datas
// criamos um arquivo moment.min.js , entre no site do moment.js e copie o código e cole no arquivo moment.min.js e já podemos estar utilizando

// Aqui pegamos a data de partida
let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

// Aqui chamamos o moment e passamos a variável acima como a data de partida
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

// Aqui chamamos o moment() vazio para retornar o dia atual e armazenar na variável today
let today = moment()

// Aqui realizamos o cálculo de diferença de milisegundos entra as datas e armazenamos na variável dateDiff
let dateDiff = today - departureDate

// Aqui pegamos a opção desejada para a conversão 
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

// Aqui verificamos a opção selecionada e realizamos a conversão
if(chosenOption == "1"){
    // aqui convertemos em segundos e utilizamos o método Math.round que arredonda o valor da divisão
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo : " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2"){
    // aqui convertemos em minutos
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo : " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3"){
    //aqui convertemos em horas
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo : " + hoursOfDeparture + " horas")
} else if(chosenOption == "4"){
    //aqui convertemos em dias
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo : " + daysOfDeparture + " dias")
} else {
    // e aqui se nenhuma opção for escolhida será exibido uma mensagem de alerta
    alert("Opção inválida.")
}
```
<hr>
<br>

## Switch

-   Estrutura de Controle de Fluxo
-   Avalia uma expressão
-   Procura a melhor cláusula(caso) que atende ao resultado.
    -   As cláusulas, ou casos, são chamados de "cases"

- Sintaxe
```
switch (expressão) {
  case 1:
    //Bloco de código a ser executado
    break
  case 2:
    //Bloco de código a ser executado
    break
  default:
    //Bloco de código padrão a ser executado
}
```

-   A condicional switch avalia uma expressão, verificando se o valor da expressão bate com o valor de algum case, e executa as instruções associadas ao case.  
-   Se a expressão for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro case que corresponder é selecionado, mesmo se os casos não forem iguais entre si.
-   Executa todos os cases até encontrar um break, ao encontrar encerra a execução. O uso do break é opcional.
-   Caso nenhum case seja correspondido, então o programa procura pela cláusula opcional default, que, se encontrado, tem o controle transferido a ele, executando suas instruções associadas.
-   Se não houver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas seu uso não é obrigatório.

-   Exemplo 1 com numbers
```
let velocity = 80

switch (velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100km/s.")
    break
  case 160:
    console.log("Sua velocidade é 160km/s.")
    break
  default:
    console.log("Velocidade não identificada")
}
```

-   Exemplo 2 com strings
```
let spaceship = "Elemental"

switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente.")
    break
  case "Raptor":
    console.log("Nave mais rápida.")
    break
  case "Enterprise":
    console.log("Nave da Frota Estelar")
    break
  default:
    console.log("Nave comum")
}
```

-   Exemplo 3
```
// O switch sempre procura pelo o primeiro case que atender a expressão, depois que ele encontra o primeiro case ele irá executar todos que vierem depois até encontrar um break.

// Se não houver nada a ser executado no case que corresponda a expressão, será executado o primeiro case que atende a expressão e que tem um break, no exemplo o case 100.

let velocity = 90

switch(velocity){
  case 80:
  case 90:
  case 100:
    console.log("Velocidade aceitável")
    break
  case 110:
    console.log("Velocidade alta mais aceitável")
    break
  default:
    console.log("Velocidade não identificada")
}
```

-   Exemplo 4
```
// Nesse exemplo o segundo case "Elemental" bate com a expressão e executa-rá a mensagem, mas como não tem um break ele irá exibir todas as mensagem abaixo até encontrar a que tenha um break.

// E se removermos o break ele irá exibir todas as mensagens até encontrar o default e encerra-rá a execução.

let spaceship = "Elemental"

switch(spaceship){
  case "Golias":
    console.log("Nave mais resistente")
  case "Elemental":
    console.log("Nave com melhor armamento")
  case "Helmet":
    console.log("Rápida ativação de escudo")
  case "Frontier":
    console.log("Nave de infantaria")
    break
  case "Enterprise":
    console.log("Nave da frota estelar")
  default:
    console.log("Não conheço a nave")
}
```

### Exercício Switch - Conversor de distâncias em Ano-Luz

```
-   HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Switch</title>
</head>
<body>
    <h1>Exercício Switch</h1>
    <script src="index.js"></script>
</body>
</html>
```

```
-   JAVASCRIPT

// Aqui pegamos a distância em anos-luz
let yearLight = prompt("Informe a distância em anos luz : ");

// Aqui exibimos o menu para escolher a conversão
let chosenOption = prompt(
  "Escolha a conversão: \n\n1- Parsec(pc)\n2- Unidade Astronônimica(AU)\n3- Quilômetros(km)\n\n (Digite o número da opção desejada)"
);

// Aqui declaramos 2 variáveis vazias para serem utilizadas abaxio
let chosenUnity;
let convertedDistance;

// Aqui realizamos a verificação da opção escolhida e realizamos o cálculo baseado na conversão escolhida

switch (chosenOption) {
  // aqui a conversão de ano-luz para parsec
  case "1":
    chosenUnity = "Parsec (pc)";
    convertedDistance = yearLight * 0.306601;
    break;

  // aqui a conversão de ano-luz para unidade astronômica
  case "2":
    chosenUnity = "Unidade Astronômica (UA)";
    convertedDistance = yearLight * 63141.1;
    break;

  // aqui a conversão de ano-luz para quilômetros, utilizamos o método Math.pow para potenciação
  case "3":
    chosenUnity = "Quilômetros (km)";
    convertedDistance = yearLight * 9.5 * Math.pow(10, 12);
    break;

  // e aqui caso a opção escolhida seja inválida
  default:
    chosenUnity = "Unidade não identificada\n";
    convertedDistance = "Conversão fora do escopo";
}

// Aqui exibimos um alert com o resultado da conversão
alert(
  "Distância em Anos-Luz: " +
    yearLight +
    "\nConversão desejada: " +
    chosenUnity +
    " " +
    convertedDistance
);
```
<hr>
<br>

## Estruturas de Repetição

-   Estruturas utilizadas para repetir um bloco de código.
-   Pode ser um determinado número de vezes ou até que uma determinada condição seja atendida.
-   Nós veremos 3:
    -   While
    -   For
    -   Do-While

### While (enquanto)

-   Enquanto a expressão for verdadeira o bloco de código será executado, se a expressão se tornar falsa encerra a execução da repetição.

-   SINTAXE
```
    while(expressão){
      //Bloco de código a ser executado enquanto a expressão for verdadeira.
    }
```

-   Exemplo 1
```
- Aqui enquanto a velocidade for menor ou igual a 100 ele executará a repetição e irá exibir um console.log a cada repetição.
- E a cada repetição é incrementado/somado mais 5 na velocidade.
- Ao chegar no 100 a execução é encerrada

let velocity = 50
let acceleration = 5

while(velocity <= 100) {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity += acceleration
}
```

-   Exemplo 2
```
- Aqui iremos percorrer uma string procurando a letra/string 'a' ou 'A' e exibiremos a posição em que elas se encontram e incrementaremos + 1 a cada repetição até a expressão ser falsa.

// Declaramos as variáveis com a string com a posição inicial em 0 e o tamanho da string

let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
  if(constellation[pos] == "a" || constellation[pos] == "A"){
    console.log(pos)
  }
  pos += 1
}

// resultado será posição 0 e 8 da string "Andromeda"
```

### Exercício While

```
-   HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício While</title>
</head>
<body>
    <h1>Exercício While</h1>
    <script src="index.js"></script>
</body>
</html>
```

```
-   JAVASCRIPT

// Aqui declaramos a contagem de dobras em 0 e chosenOption vazio pois irá receber o valor mais abaixo
let warpCount = 0
let chosenOption = " "

// Aqui pegamos o nome da nave e armazenamos na variável
let spaceshipName = prompt("Informe o nome da nave:")

// aqui utilizamos a variável que foi declarada vazia acima e exibimos o menu com as opções 1 e 2
chosenOption = prompt("Deseja entrar em dobra espacial ? \n\n1- Sim\n2- Não")

// aqui iremos realizar o loop, enquanto a opção escolhida for 1- Sim, iremos adicionar 1 dobra na contagem e iremos perguntar novamente, se a opção escolhida continuar sendo 1- Sim, continuaremos adicionando mais 1 dobra na contagem, e se a opção escolhida for a 2- Não, a execução será encerrada.

while(chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra espacial ? \n\n1- Sim\n2- Não")
 }

 // Aqui exibimos um alert com os dados, nome da nave e quantidade de dobras realizadas
alert("Nave: " + spaceshipName + "\nQuantidade de Dobras: " + warpCount)
```

### For

- O while recebe apenas uma expressão.
- Com o for é possível adicionar a variável que utilizaremos para controlar as iterações/loops.
- O for segue o seguinte formato

- Sintaxe:
```
for(<variavel>; <expressão>; <ação de controle>){
    
    //Bloco de código a ser executado
  }


- Exemplo:

  for (var i = 0; i < 9; i ++) {
   console.log(i);
  }

1-   Variável/Valor inicial
2-  Expressão Lógica/ Condição desejada
3 - Ação de controle/ incremento ou decremento

- Primeiro ele verifica se a expressão é verdadeira, 
- Enquanto a expressão for verdadeira será executado o bloco de código declarado, no exemplo o console.log() 
- Após cada execução do bloco, será executada a ação de controle, irá incrementar/somar ou decrementar/subtrair.
- E o loop será executado novamente até que a expressão seja falsa.
```

- Exemplo 2
```
- Aqui uma contagem crescente de 1 até 100.
- Enquanto o i for menor que 100 irá executar o console.log e irá somar mais 1 a cada execução até chegar a 100.

for(i = 0; i < 100; i ++){
    console.log(i)
}


- E aqui uma contagem decrescente de 100 até 1.
- E aqui enquanto o i for maior que 0 ele irá executar o console.log e irá decrementar/ subtrair 1 até chegar a 0.

for(i = 100; i > 0; i --){
    console.log(i)
}
```

- Exemplo 3
```
// Aqui pegamos o nome da nave
let spaceship = prompt("Informe o nome da nave: ")

// Aqui a variável vazia que irá receber a string invertida abaixo
let invertida = ""

// Aqui percorremos uma string e invertemos ela.
// Aqui declaramos o valor inicial com o tamanho da string spaceship - 1,
// Enquanto o i for maior ou igual a 0 o bloco de código será executado e a cada execução decrementamos/subtraimos 1 e passamos para o próximo caractere,
// e a cada execução a variável invertida irá receber o caractere da string.
for(i = spaceship.length - 1; i >= 0; i --){
  invertida += spaceship[i] 
}

//  aqui o alerta com o novo nome da nave
alert("O nome invertido da nave é: " + invertida)

// nome da nave normal
console.log(spaceship)
// aqui exibimos a string invertida no console.log()
console.log(invertida)
```

- Exemplo 4
```
let spaceship = "Helmet"
let newSpaceship = ""

// Aqui iremos percorrer a string declarada caractere a caractere e iremos verificar se o caractere atual da string é igual a "e", se for, iremos substituir pelo caractere "i".
// Se não, iremos adicionar 1 e partiremos para o próximo caractere e a nova variável irá receber o caractere sem alteração.

for (let i = 0; i < spaceship.length; i++) {
  if(spaceship[i] == "e") {
    newSpaceship += "i"
  } else {
    newSpaceship += spaceship[i]
  }
}
console.log(spaceship)
// Aqui a sáida normal que será "Helmet"

console.log(newSpaceship)
// E aqui saída será "Hilmit" pois os caracteres "e" foram substituidos por "i".
```

### Exercício utilizando For
```
- HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício utilizando o For</title>
</head>
<body>
    <h1>Exercício utilizando o For</h1>
    <script src="index.js"></script>
</body>
</html>
```

```
- JAVASCRIPT

// Aqui pegamos o nome da nave
let spaceship = prompt("Informe o nome da nave: ")

// Aqui pegamos qual caractere/letra deseja substituir
let caractere = prompt("Qual caractere deseja substituir ?")

// Aqui pegamos a letra que irá entrar no lugar da que foi escolhida acima
let newCaractere = prompt("Por qual caractere quer substituir?")

// Aqui a variável vazia que irá receber abaixo o novo nome da nave
let newSpaceship = ""

//  Aqui percorremos a string enquanto o valor da variável i for menor que o tamanho da string spaceship.
//  Verificamos se o caractere atual é igual ao que desejamos substituir, 
//  se for iremos trocar o caractere atual pelo o newCaractere e iremos armazenar na variável newSpaceship. 
//  e se não for iremos passar para o próximo caractere/letra até chegar ao fim da string e iremos adicionar o caractere normal em newSpaceship.
for(i = 0; i < spaceship.length; i ++){
    if(spaceship[i] == caractere){
        newSpaceship += newCaractere //.toUpperCase()
    } else {
        newSpaceship += spaceship[i]
    }
}

//  aqui o alerta com o novo nome da nave
alert("O novo nome da nave é : " + newSpaceship)

// nave antes de substituir os caracteres
console.log(spaceship)
// caractere que será removido
console.log(caractere)
// o novo caractere que irá substituir
console.log(newCaractere)
// e aqui o novo nome da nave
console.log(newSpaceship)
```
<hr>
<br>

### Do-While

- O do-while executa pelo menos 1x o bloco de código para depois realizar o teste condicional.
- Se o teste for verdadeiro, a repetição acontecerá novamente, até a condição ser falsa.

- Sintaxe
```
do {
  //bloco de código a ser executado
} while (condição)
```

- Exemplo 1
```
//aqui declaramos a velocidade inicial
let velocity = 50

//aqui declaramos uma taxa de aceleração de 5
let acceleration = 5

// Aqui utilizamos o do-while,
// será executado pelo menos uma vez o bloc de código definido, a velocity irá incrementar/somar com taxa de aceleração 5,
// ai o teste condicional será executado, enquanto o teste for verdadeiro o loop será executado novamente, no exemplo enquanto a velocidade for menor que 100 o código será executado, ao chegar a 100 será encerrado.

do {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity += acceleration
} while(velocity <= 100)


// E aqui basicamente o mesmo exemplo mas agora desacelerando

// definimos a velocidade inicial em 1000
let velocity = 1000

// a taxa de desaceleração em 5
let decceleration = 5

// Será executado o bloco de código e será decrementado/subtraido 5 pelo menos uma vez,
// e ai o teste condicional será executado, enquanto a velocidade for maior ou igual a 0 o do-while será executado novamente.

do {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity -= decceleration
} while(velocity >= 0)
```

### Usando o break

- Ele basicamente encerra a execução do loop em determinado momento.
```
// Declaramos o nome da variável
let spaceshipName = "Supernova"

// aqui percorremos a string enquanto o valor de i for menor que o tamanho de spaceshipName e a cada execução é incrementado 1 e passamos para o próximo caractere/letra,
// verificamos se o caractere atual da string é igual a "o", se for a execução será encerrada utilizando o break.
// e se não for será exibido o console.log() e o loop será executado novamente caractere por caractere.

for(i=0; i < spaceshipName.length; i++){
  if(spaceshipName[i] == "o"){
    break
  }
  console.log(spaceshipName[i])
}
```

### Exercício - Revisando as repetições

```
- HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício - Revisão loops repetição</title>
</head>
<body>
    <h1>Exercício - Revisão loops repetição</h1>
    <script src="index.js"></script>
</body>
</html>
```

```
- JAVASCRIPT

// Aqui pegamos o nome da nave
let spaceshipName = prompt("Informe o nome da nave: ")

// Aqui a variável vazia que irá receber o nome da nave invertido abaixo
let invertedName = ""

// aqui utilizamos o for para percorrer a variável spaceshipName ao contrário enquanto o tamanho dela for maior ou igual a 0 e iremos decrementar a cada execução pulando para o próximo caractere 

//  iremos verificar se tem algum caractere "e" na variavel spaceshipName, se houver a execução será encerrada com o break, e se não houver, a variável invertedName irá receber os caracteres normais invertidos.

for(i = spaceshipName.length - 1; i >= 0; i --){
  if(spaceshipName[i] == "e"){
    break
  } else {
    invertedName += spaceshipName[i] 
  }
}
// aqui será exibido no console.log o nome da nave invertido
console.log(invertedName)

// e aqui será exibidos um alert com o nome antigo da nave e o novo nome após inversão e ocultação
alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)
```
<hr>
<br>

## Funções

### O que é uma função

- Função é um bloco de código para executar uma determinada ação.
- Esse bloco é nomeado.
- Podemos chamar onde e quando precisarmos.
- A declaração e a chamada de uma função segue esse modelo:

- SINTAXE:
```

// declaração da função

function nomeDaFunção( ) {
  // bloco de código a ser executado
}

// e aqui a chamada da função, enquanto ela não for chamada ela não será executada

nomeDaFunção( )
```
- Exemplo 1 - Função simples:
```
// Declaração da Função

function greetPilot() {
    alert("Bom dia, Piloto !")
  }
  
// Chamada da função, ao chamar a função o alert será exibido, se não chamar não será exibido nada
  greetPilot();
```
<hr>

### Parâmetros das Funções

- Parâmetros são como variáveis passadas diretamente na função.
- São opcionais.
- São passados dentro dos parênteses da função.
- Os valores dos parâmetros podem ser passados diretamente na chamada da função.

- Exemplo
```
// Declaração da Função com 2 parâmetros, velocity e acceleration

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log("Nova velocidade: " + newVelocity)
}

// aqui chamamos a função e passamos o valor dos parâmetros.
// devemos passar os valores dos parâmetros na mesma ordem em que foram colocados na declaração da função.
// o primeiro valor é o da velocity e o segundo acceleration

speedUp(60, 10);
speedUp(40, 20);
speedUp(70, 5);
```
<hr>

### Parâmetros com valor padrão

- Caso você não passe nenhum valor de parâmetro para a função, você pode declarar os parâmetros com valores já pré-definidos. 

```
// aqui a declaração da função com 2 parãmetros name e message, o message com um valor padrão já definido.

function greetPilot(name, message = "Olá") {
  alert(message + ", " + name)
}

// aqui passamos somente o valor do parâmetro name
greetPilot("John Mars")

// se o parâmetro tiver um valor padrão já definido, se passarmos um outro valor na chamada da função ele que será utilizado.

greetPilot("John Mars", "Seja bem-vindo")
```
<hr>
<br>

### Armadilhas dos Parâmetros

- Exemplo 1

- Se declararmos uma função com um parâmetro e na chamada não passar o valor dele, ele irá receber um valor do tipo undefined/indefinido porque por padrão um parâmetro recebe o valor undefined.
```
function greetPilot(name, message = "Olá"){
  alert(message + ", " + name)
}

greetPilot( )
// resultado será "Olá undefined"
```

- Exemplo 2:
```
function speedUp(velocity, unit = "km", acceleration){
  let newVelocity = velocity + acceleration
  alert("Nova velocidade: " + newVelocity + unit)
}

// aqui passamos os valores dos parâmetros na ordem em que foram passados na declaração da função.

speedUp(50, "mi/s", 20)
//resultado: Nova velocidade: 70mi/s

// aqui chamamos a função novamente e passamos os valores, 50 para velocity, 20 para o unit e para acceleration não é passado nenhum valor então irá receber undefined, na hora de realizar o cálculo irá calcular 50 + undefined que será igual a NaN not a number.

speedUp(50, 20)

-------------------------------------------------------------------------------------

// Para evitar esse problema o ideal é declarar os parâmetros com valor padrão por último.

function speedUp(velocity, acceleration,  unit = "km"){
  let newVelocity = velocity + acceleration
  alert("Nova velocidade: " + newVelocity + unit)
}

// e passar o valor também por último na mesma ordem da declaração da função

speedUp(50, 20, "mi/s")
//resultado: Nova velocidade: 70mi/s

// e aqui mesmo não passando o último valor ele será executado sem problemas por ter um valor padrão na declaração da função.
speedUp(50, 20)
//resultado: Nova velocidade: 70km
```
<hr>
<br>

### Retorno da função

- Para retornar alguma coisa ou valor em uma função basta usar o 'return'.
- Você usa o return para utilizar o resultado de uma operação/função em outra função.

- Exemplo 1
```
// declaramos a função para acelerar com 2 parâmetros, realizamos o cálculo e utilizamos o return para retornar o valor de newVelocity após o cálculo

function speedUp(velocity, acceleration){
  let newVelocity = velocity + acceleration
  console.log("Nova velocidade: " + newVelocity)
  return newVelocity
}

// aqui passamos os valores das variáveis
let velocity = 80
let acceleration = 5

// aqui exibimos o valor de velocity antes de chamar a função
console.log(velocity)

// aqui a variável velocity recebe a chamada da função que faz o cálculo
velocity = speedUp(velocity, acceleration)

// e neste console.log será exibido o valor de velocity após o cálculo da função
console.log(velocity)
```
- Exemplo 2
```
// declaramos a função para acelerar com 2 parâmetros, realizamos o cálculo e utilizamos o return para retornar o valor de newVelocity após o cálculo
function speedUp(velocity, acceleration){
  let newVelocity = velocity + acceleration
  console.log("Nova velocidade: " + newVelocity)
  return newVelocity
}

// aqui utilizamos o console.log com a chamada da função e os valores dos parâmetros
console.log(speedUp(90, 10))


//resultado "Nova velocidade: 100" será exibido a mensagem declarada no bloco da função e abaixo o valor retornado de newVelocity
```
- Exemplo 3
```
// Criamos a função para acelerar a nave com os parâmetros velocity e acceleration
// e utilizamos o return para retornar o valor da soma em newVelocity para podermos usar o resultado em outras funções.

function speedUp (velocity, acceleration){
  let newVelocity = velocity + acceleration
  return newVelocity
}

// Criamos a função para desacelerar a nave com os mesmo parãmetros da função acima.
function speedDown(velocity, acceleration){
  let velocitySpeedDown = velocity - acceleration
  console.log(velocitySpeedDown)
}

// Aqui armazenamos a chamada da função speedUp com os valores dos parâmetros na variável result, ou seja o resultado da função para acelerar speedUp() é armazenado em result para poder utilizar em outra função.
var result = speedUp(80, 5) 

// E aqui chamamos a função speedDown e passamos o resultado da função speedUp() e o valor 20 como parâmetros para realizar o cálculo na função speedDown.
speedDown((result), 20)
```
- Exemplo 4:

```
// - Exemplo 2:

// Declaramos as variáveis
var number = 4
var anotherNumber = 3

// Criamos a função de soma entre n1 e n2
// 4 + 3
function add(n1,n2) {
  return n1 + n2
}

// Criamos a função para multiplicar n1 com n2
function multiply(n1, n2) {
  return n1 * n2
}

// Aqui armazenamos a chamada da função com os parâmetros passados acima na variável sum
// e o resultado da soma acima será armazenado em sum
var sum = add(number, anotherNumber)


// Armazenamos na variável product a chamada da função multiply com o valor digitado pelo usuário, e sum que é a variável que contém o resultado da soma como parâmetros, e multiplicamos os 2 valores.
var product = multiply(prompt("Enter a number: "), sum)
console.log(product)
```
<hr>
<br>

### Exercício Funções

```
- HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Funções</title>
</head>
<body>
    <h1>Exercício de Funções</h1>
    <script src="index.js"></script>
</body>
</html>
```

```
- JAVASCRIPT

// Aqui pegamos o nome da nave
let spaceshipName = prompt("Nome da nave: ");

// Definimos a velocidade inicial da nave em 0
let spaceshipVelocity = 0;

// Aqui declaramos essa variável sem valor para utilizarmos abaixo
let chosenOption;

//  Aqui criamos uma função para exibir o menu
//  verificamos se o option é diferente de 1, 2, 3 e 4

function showMenu() {
  let option;
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt(
      "O que você deseja fazer ? \n1-Acelerar a nave em 5km/s \n2-Desacelerar em 5km/s \n3-Imprimir dados de bordo \n4-Sair do programa");
  }
  // e retornamos a opção escolhida
  return option;
}

//  Aqui a função para acelerar a nave
function speedUp(spaceshipVelocity) {
  let newVelocity = spaceshipVelocity + 5;
  //  e retornamos o valor após acelerar
  return newVelocity;
}

//  Função para desacelerar a nave
// também verificamos se a newVelocity é menor que 0 ela irá receber o valor 0
function speedDown(spaceshipVelocity) {
  let newVelocity = spaceshipVelocity - 5;
  if (newVelocity < 0) {
    newVelocity = 0;
  }
  //    e retornamos a newVelocity
  return newVelocity;
}

// aqui a função para exibir o alerta com os dados da nave como o nome e a velocidade atual
function printSpaceshipBoardData() {
  alert(
    "Nome da nave: " + spaceshipName + "\nVelocidade atual: " + spaceshipVelocity + "km/s");
}

// aqui executamos a chamada da função que exibe o menu enquanto a opção escolhida for diferente de "4"
do {
  chosenOption = showMenu();
  //  e aqui verificamos qual foi a opção escolhida no menu
  // e para cada opção escolhida será chamada uma função diferente,
  //  case 1 será chamada a função que acelera a nave,
  // case 2 será chamada a função que desacelera a nave,
  // case 3 chama a função que exibe os dados com o nome e a velocidade atual da nave
  // e se nenhuma das opções acima foi escolhida exibiremos um alerta com a mensagem de encerramento do programa
  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity);
      break;
    case "2":
      spaceshipVelocity = speedDown(spaceshipVelocity);
      break;
    case "3":
      printSpaceshipBoardData(spaceshipName, spaceshipVelocity);
      break;
    default:
      alert("Encerrando o programa de bordo!");
  }
} while (chosenOption != "4");
```
<hr>
<br>

## Scope/Escopo de Variáveis
<br>

### Tipos de Escopo:
<br>

- Global : Código como um todo
  - Uma variável declarada fora de uma função ou de qualquer outra estrutura é uma variável de escopo global, o que faz com que seu valor seja acessível em qualquer lugar da aplicação.
```
- Exemplo de variável com escopo Global

// declaramos a variável fora da função
let spaceshipName = "Supernova"

// aqui a função que altera o valor da variável
// alteramos o valor da variável
function changeSpaceshipName () {
  spaceshipName = "Elemental"
}

// e aqui um console.log para mostrar o valor antes de ser alterado
//  depois a chamada da função que altera o valor
//  e abaixo outro console.log mostrando o novo valor da variável
console.log(spaceshipName)
changeSpaceshipName()
console.log(spaceshipName)
```
<br>

- Função : Corresponde ao escopo de uma função
  - Uma variável declarada dentro de uma função é local, o que faz com que ela seja criada e destruída sempre que a função é executada não podendo ser acessada de fora da função.
```
- Exemplo de Variável de escopo de função/local

//  Como a variável foi criada dentro de uma função, ela só pode ser acessada de dentro da função em que foi declarada, portanto ela é de escopo local/função.

function startSpaceshipVelocity() {
  let spaceshipVelocity = 0
}

// Somente se declararmos a mesma variável do lado de fora da função para sobrescrever a variável da função, ai sim conseguiremos acessar ela.
let spaceshipVelocity = 200

// ao executar o código irá ocorrer um erro : "Uncaught ReferenceError: spaceshipVelocity is not defined". 
startSpaceshipVelocity()

console.log(spaceshipVelocity)
```
<br>

- Bloco : Instruções contidas dentro de blocos de código como: if, else, switch, for, while, do while
```
- Exemplo de Variável de Escopo de bloco

//  Na função declaramos a variável velocity, então ela pode ser acessada de qualquer lugar da função por conter escopo local, então ela será exibida normalmente no console.log
//  como declaramos a variável spaceshipName com o var dentro de um bloco if, por estar utilizando o var a variável vai ser elevada para o nível da função, podendo ser acessada somente dentro da função.


function setSpaceshipDetails(){
  let velocity = 50  
  if (velocity == 50) {
    velocity = 60
    var spaceshipName = "Elemental"
    let spaceshipType = "Discovery"
  }

  // e aqui as outras variáveis são exibidas normalmente por estarem em seus devidos escopos, velocity no escopo local/função e spaceshipName no escopo de bloco.
  console.log(velocity)
  console.log(spaceshipName)

  //  e a variável spaceshipType como ela foi declarada dentro de um bloco if utilizando o let ela só pode ser acessada dentro desse bloco em que foi criada, então ocorrerá um erro Uncaught ReferenceError: spaceshipType is not defined.

  console.log(spaceshipType)
}

setSpaceshipDetails()
```

```
- Outro exemplo:


//  Aqui criamos a função,
//  e exibimos 2 console.log nas variáveis antes de serem declaradas,
//  como declaramos spaceshipName com o var ele será considerado como primeiro elemento da função, recebendo o valor undefined que será exibido no console.log.

// e declaramos spaceshipType com o let ou seja ela só poderá ser acessada após a sua declaração.
//  se tentarmos acessá-lá ocorrerá um erro "Uncaught ReferenceError: Cannot access 'spaceshipType' before initialization", você não pode acessar a variável "spaceshipType" antes de sua inicialização/declaração.

function setSpaceshipDetails(){
  console.log(spaceshipName)
  console.log(spaceshipType)
  var spaceshipName = "Elemental"
  let spaceshipType = "Discovery"

  console.log(spaceshipName)
  console.log(spaceshipType)
}

setSpaceshipDetails()
```
<hr>
<br>

## Funções Anônimas

- Uma função anônima é uma função sem nome ou que tem seu nome omitido na criação.
- Uma função anônima pode ser armazenada dentro de uma variável, e sua chamada dentro de outra.

- Exemplo de função anônima
```
//  Aqui declaramos a variável doubleSpeed e armazenamos nela uma função anônima
let doubleSpeed = function (velocity){
  return velocity * 2
}

// aqui criamos a variável newVelocity, que recebe a chamada da função que foi armazenada na variável acima doubleSpeed() e passamos o valor do parâmetro velocity que é 40

let newVelocity = doubleSpeed(40)

// e aqui será exibido o resultado da função que é 40 * 2 = 80
console.log(newVelocity)
```

- Outro exemplo:

  - Funções tradicionais podem ser chamadas antes mesmo de serem criadas.
  - Funções Anônimas por serem armazenadas em variáveis não podem ser chamadas antes de serem criadas.
```
//  Neste exemplo tentamos chamar as funções antes de sua criação, 
//  Primeiro chamamos a função padrão com o console.log e seus parãmetros 60 e 10 e o resultado será 70 que é o cálculo passado na função.
//  depois tentamos chamar a função anônima mas ocorrerá um erro, a função anônima por ser atribuida em uma variável ela segue a regra da chamada de uma variável, não podendo ser acessada/chamada antes da sua declaração.


//  Aqui estamos chamando a função padrão
console.log(speedUp(60, 10))

//  aqui estamos chamando a função anônima e passando o valor 50 para velocity, antes da sua declaração
console.log(doubleSpeed(50))


//  Aqui declaramos a variável doubleSpeed e armazenamos nela uma função anônima
let doubleSpeed = function (velocity){
  return velocity * 2
}

// aqui criamos uma função padrão que recebe 2 parâmetro velocity e acceleration
function speedUp(velocity, acceleration){
  return velocity + acceleration
}
```
<hr>
<br>

## Arrow Functions

- Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função tradicional.
- Uma arrow function é uma simplificação de uma função anônima.

- SINTAXE:  
```
let variável = (parâmetro opcional) => {
  //  Bloco de código a ser executado
}
```

- Exemplo 1: Arrow Function simples
```
// Aqui declaramos a Arrow Function que irá retornar o cálculo da velocity * 2.
const doubleVelocity = (velocity) => {
  return velocity * 2
}

//  Aqui chamamos a função pelo console.log e passamos o valor do parâmetro velocity 60
console.log( doubleVelocity(60))
//  resultado será velocity * 2 ou 60 * 2 = 120
```

- Exemplo 2: Arrow Function simplificada
```
// Aqui essa arrow function faz a mesma coisa que o exemplo acima porém exemplificada, como a função só tinha uma linha com o return podemos remover o return e como a função só tem um parâmetro removemos os parênteses e assim a function terá apenas uma linha de código.
//  primeiro a variável, depois o parâmetro e depois o retorno da função.

const doubleVelocity = velocity => velocity * 2


//  Aqui chamamos a função pelo console.log e passamos o valor do parâmetro velocity 60
console.log( doubleVelocity(60))
//  resultado será velocity * 2 ou 60 * 2 = 120
```
<hr>
<br>

## High Order Functions

- High Order Functions significa Função de Alta Classe.
- São funções que recebem ou retornam outras funções.
- As funções que uma HOF recebem, geralmente são anônimas.
  - Podendo ser uma Arrow function ou não.
- A função que é enviada como parâmetro de uma HOF é chamada de callback.

```
- Exemplo 1 de função High Order
- Função que retorna uma função

// Aqui declaramos a função que recebe multiplier como parâmetro e retorna outra função com aNumber como parâmetro que retorna a multiplicação
function getMultiplier(multiplier){
    return function (aNumber) {
      return aNumber * multiplier
    }
  }

// Aqui uma forma simplificada de declarar a mesma função acima
// Função getMultiplier com o parâmetro multiplier que recebe uma função aNumber que retona aNumber * multiplier

const getMultiplier = multiplier => aNumber => aNumber * multiplier
  
// Aqui armazenamos a chamada da função nas variáveis e cada chamada é passado o valor do parâmetro multiplier para cada função.

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)
  
// e aqui chamamos a funções de multiplicação e passamos o valor para realizar a multiplicação
console.log(double(2))
console.log(triple(5))
console.log(quadruple(4))
```

- Exemplo 2 - Função que retorna outras funções.
```
// Função sum que recebe x como parâmetro que retorna outra função com y de parâmetro que retorna outra função com z como parâmetro, e retorna a soma
function sum(x) {
    return function(y){
      return function(z){
        return x + y + z
      }
    }
  }

// E aqui uma forma simplificada da função acima
  const sum = x => y => z => x + y + z
  
  // Aqui passamos os valores dos parâmetros para realizar a soma no console.log 
  console.log(sum(10)(20)(5))
```
<br>

- Exemplo 3 de função passada como parâmetro:
```
//Aqui declaramos duas funções
function formalGreeting() {
    console.log("How are you?");
  }
  
  function casualGreeting() {
    console.log("What's up?");
  }
  
// E aqui declaramos outra função com o parâmetro type, e também as duas funções criadas acima são passada como parâmetro.
  function greet(type, greetFormal, greetCasual) {
    if(type === 'formal') {
      greetFormal();
    } else if(type === 'casual') {
      greetCasual();
    }
  }

// E aqui informamos o type para verificar qual função será executada.
greet('formal', formalGreeting, casualGreeting);
```
<br>

- Exemplo 4
```
// Aqui criamos uma função com  velocity e a função printer como parâmetros
function doubleVelocity(velocity, printer) {
  console.log("Entrei em doubleVelocity")
  let newVelocity = velocity * 2
  printer(newVelocity)
  return newVelocity
}

// Aqui criamos a função printer que recebe velocity como parâmetro
let printVelocity = velocity => {
  console.log("Nova velocidade: " + velocity + "km/s")
}

// E aqui armazenamos a chamada da função doubleVelocity com os parâmetros 60 que é atríbuido a velocity e a chamada da função printVelocity que é atribuído a printer na variável newVelocity.

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)
```
<br>

- Exemplo 5
```
// Aqui a mesma função do exemplo acima
function doubleVelocity(velocity, printer) {
  console.log("Entrei em doubleVelocity")
  let newVelocity = velocity * 2
  printer(newVelocity)
  return newVelocity
}

// E aqui a chamada da função doubleVelocity que recebe 50 que é o parâmetro velocity e uma função que exibe um console.log.
let anotherVelocity = doubleVelocity(50, velocity => {
  console.log("Outra velocidade : " + velocity)
})
```
<br>

- Exemplo 6
```
// Aqui declaramos uma arrow function que retorna uma mensagem
const greet = name => `Hello, ${name}`

// aqui declaramos uma High Order Function, que recebe outra função como parâmetro
// armazenamos sua chamada na variável text e passamos o valor do parâmetro dessa função que é "Mary"
// retorna uma mensagem
function speakToMary(dialog){
  const text = dialog('Mary')
  return `He says "${text}"`
}

// aqui chamamos a High Order Function speakToMary e passamos outra função como parâmetro que retorna outra mensagem
console.log(speakToMary(name => {
  return `GoodBye, ${name}`
}))
```
<br>

- Exemplo 7 - High Order Function em métodos de Arrays
```
// Aqui criamos um array para o exemplo
const characters = [
  {name: `Frodo`, race: `Hobbit`},
  {name: `Sam`, race: `Hobbit`},
  {name: `Aragorn`, race: `Man`},
  {name: `Legolas`, race: `Elf`},
  {name: `Gimli`, race: `Dwarf`},
  {name: `Boromir`, race: `Man`},
  {name: `Merry`, race: `Hobbit`},
  {name: `Pippin`, race: `Hobbit`},
  {name: `Gandalf`, race: `Ainur`},
]

// Exemplo de High Order Function é o método de array filter, que é uma função retorna uma outra função

const isHobbit = character => character.race === "Hobbit"

// aqui passamos a variável isHobbit como parâmetro para o método filter()
const hobbits = characters.filter(isHobbit)

console.log(hobbits)
```
<hr>

### Exercício Aprofundando nas funções

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Aprofundando em Funções</title>
</head>
<body>
    <h1>Exercício Aprofundando em Funções</h1>
    <script src="index.js"></script>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui declaramos a função que irá desacelerar a nave, recebe 2 parâmetros velocity e uma função printer
// declaramos a taxa de desaceleração e verificamos enquanto a velocidade for maior que 0, iremos chamar a função printer e decrementar a deceleration da velocity
function slowDown(velocity, printer){
    let deceleration = 20
    while(velocity > 0){
      printer(velocity)
      velocity -= deceleration
    }
    // Exibimos um alerta
    alert("Nave parada, As comportas podem ser abertas")
  }
  
  // Aqui declaramos a velocidade da nave
  let spaceshipVelocity = 150
  
  // e aqui chamamos a função slowDown e passamos spaceshipVelocity como o valor do parâmetro velocity e passamos outra função como parãmetro que recebe velocity como parãmetro e que exibe um console.log com a velocidade atual
  slowDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
  })
```
<hr>
<br>

## Arrays

- Array é uma Estrutura de Dados
  - É capaz de armazenar e organizar outros dados

- Dados são organizados em forma de lista
  - Cada valor fica numa determinada posição

- Pode armazenar internamente qualquer outro tipo
  - Number, String, Boolean etc.
  - E até outro Array

```
// Aqui criamos um array com as naves
let hitchedSpaceships = ["Supernova", "Elemental", "Helmet"]

// Aqui acessamos o array na posição 0 que contém a string "Supernova"
console.log(hitchedSpaceships[0])
```

```
// Podemos criar um array misto com qualquer outro tipo
// Se tentarmos acessar um índice que não existe, irá retornar undefined ou seja indefinido

//let spaceshipInfo = ["Colossus", 7, true]
//console.log(spaceshipInfo[3])
```

```
// Aqui outra maneira de criar um array, utilizando o new Array()

let hitchedSpaceships = new Array("Supernova", "Elemental", "Helmet", "Colossus")
console.log(hitchedSpaceships)
```

```
//  Devemos tomar cuidado com o new Array se o array for numérico, se houver apenas 1 valor, no exemplo ao invés de adicionar o valor 5 no array ele irá criar um array com 5 casas vazias e undefined.
//  Então apenas usar o new Array se quiser criar um array vazio, o ideal é sempre criar um array utilizando os colchetes [].

let getNumber = new Array(5)
console.log(getNumber)
```
<br>

### Funções básicas de arrays
<br>

.push("elemento") - Adiciona um elemento no fim do Array
```
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

hitchedSpaceships.push("Enterprise")

console.log(hitchedSpaceships)

// resultado: ["Colossus", "Elemental", "Helmet", "Enterprise"]
```

.pop() - Remove o último elemento do array, também retorna o elemento que foi removido armazenando em uma variável
```
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

let removedSpaceship = hitchedSpaceships.pop()

console.log(removedSpaceship)
// resultado: ["Colossus", "Elemental"]
```

.shift() - Remove o primeiro elemento do array e também retorna o item que foi removido
```
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

let removedSpaceship = hitchedSpaceships.shift()

console.log(removedSpaceship)
// resultado: "Colossus"
```

.unshift("elemento") -  Adiciona um elemento no ínicio do array
```
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

hitchedSpaceships.unshift("Supernova")

console.log(hitchedSpaceships)
// resultado: ["Supernova","Colossus", "Elemental", "Helmet"]
```

.length -  Retorna o tamanho do array
```
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships.length)
// resultado: 4
```

.indexOf() - Retorna em qual posição/índice um elemento se encontra 
```
// se a posição ou o elemento não for encontrado no array irá retornar -1

let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

let elementalPos = hitchedSpaceships.indexOf("Elemental")

console.log(elementalPos)
// resultado: 1
```
<br>

### Arrays bidimensionais

- É basicamente um array armazenado dentro de outro array

```
//  Criamos um array de exemplo

let hitchedSpaceships = [
  ['Elemental', 7],
  ['Helmet', 13],
  ['Golias', 5],
  ['Supernova', 10]
]

// adicionando outro array
//hitchedSpaceships.push(['Colossus',8])

// e para acessar os elementos do array bidimensional
// aqui acessamos o índice 3 do array que é ['Supernova', 10] e depois acessamos o elementos dentro dele no índice 0 que é a string "Supernova".

console.log(hitchedSpaceships[3][0])
```

### Métodos de Array Splice e Slice

- Splice:
  - Significa 'emendar' ou 'costurar'.
  - Substitui o array original.

-Sintaxe:
```
array.splice(index[, deleteCount[, elemento1[, ... [, elementoN]]]])
```
- Espera um primeiro parâmetro que é um índice do Array.
- O Segundo é a quantidade de elementos que queremos remover a partir deste índice.
- Os próximos são os elementos que queremos adicionar no lugar.
- Apenas o primeiro parâmetro é "obrigatório".
- Se não for declarado os elementos que seram adicionados o splice apenas remove os elementos desejados.
- O splice retorna os elementos removidos 

```
// Aqui declaramos o array
let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

// exibimos ele no console.log
console.log(spaceshipNames)

// e aqui criamos uma variável removedSpaceships que recebe o array acima e utilizamos o método splice nele, no exemplo ele irá começar no índice 1 que é "Darwin" e irá remover 2 elementos a partir dele e adiciona "Deméter", "Puller", "Golias" no lugar dos itens removidos.
let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")

// aqui será exibido o array após a utilização do splice
console.log(spaceshipNames)
// resultado: ["Elemental","Deméter","Puller","Golias","Supernova"]

// e aqui exibimos no console.log os elementos que foram removidos
console.log(removedSpaceships)
```
<br>

### Slice

- Significa "fatiar" ou "dividir".
- Extrai uma parte do array sem alterar o array original. 
- Retorna um novo array com os elementos extraidos do original.

-Sintaxe:
```
array.slice([begin[, end]])
```
- Possui um primeiro parâmetro que é o índice inicial.
- O Segundo parâmetro é o índice final.
- Retorna todos os elementos entre o elemento de índice 'begin' e o anterior ao elemento 'end'.

-Exemplo:
```
// Aqui declaramos o array
let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

// aqui declaramos uma variável, e utilizamos o slice no array, começamos no índice 1 e removemos todos os elementos antes do índice 3 passado no método, ou seja irá remover o índice 1 e o 2.
let extractedNames = spaceshipNames.slice(1, 3)

// exibimos o array antes de utilizar o slice no console.log
console.log(spaceshipNames)

// aqui será exibido os elementos removidos do array
console.log(extractedNames)
// resultado: "Darwin", "Artemis"
```
<br>
<hr>

### Iteração em Arrays

- As funções de iteração que veremos são HOF (High Order Functions)
  - Enviamos callbacks (funções que enviamos como parâmetro)
- O callback é chamado para cada elemento do Array

- Segue o seguinte formato:
```
array.funcaoDeIterar(function(elementoAtual, indice, array){
  // Bloco de código
})
```
- Espera um callback que receba como parâmetro o elemento atual, o índice e o array completo
<hr>

- forEach:

  - O método forEach() percorre o array e executa a função para cada elemento de um array.
```
// Aqui declaramos o array 
let hitchedSpaceships = ['Demetér','Darwin','Supernova','Fenix', 'Puller']

// e aqui utilizamos o forEach que irá percorrer o array e irá exibir uma mensagem para cada elemento do array.
hitchedSpaceships.forEach(function(currentSpaceship, index){
  console.log('Nave: ' + currentSpaceship + '\níndice: ' + index)
})
```
<hr>

- map:

  - O método map modifica os elementos do array um a um sem alterar o array original.
  - Ele irá percorrer cada elemento alterando os elementos pelo retorno do callback, e irá pegar o array que foi gerado e irá retorná-lo.

-Exemplo:
```
// Aqui o array declarado
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

//  aqui criamos uma variável, e utilizamos o método map no array
//  e criamos uma variável armazenamos nela a currentSpaceship que é o índice atual e utilizamos o método toUpperCase() para deixar as letras maiúsculas e retornamos a variável
let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship){
  let upcased = currentSpaceship.toUpperCase()
  return upcased
})
// aqui o array antes de ser modificado
console.log(hitchedSpaceships)

// e aqui o array com as letras maiúsculas
console.log(upcasedSpaceships)
//["DEMÉTER","DARWIN","SUPERNOVA","FENIX","PULLER"]
```
<hr>

- filter:

  - Basicamente filtra os elementos de um array e retorna um novo array com os elementos que passaram no teste implementado.
  - Retorna um novo array.

```
// Aqui o array declarado
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

//  aqui criamos uma variável para armazenar a utilização do filter
//  iremos utilizar o filter para retornar somente os elementos que tem o tamanho maior ou igual a 7 caracteres/letras
let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7})

// aqui exibimos a variável que contém os itens com 7 caracteres
console.log(with7Chars)
// resultado: ["Deméter","Supernova"]
```
<hr>

- find:
  
  - É bem parecido com o filter porém retorna só o primeiro elemento que satisfaz tal condição.
  - Retorna somento o elemento.

```
// Aqui o array declarado
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

//  aqui criamos uma variável para armazenar a utilização do find,
//  iremos utilizar o find para retornar o primeiro elemento que tem o tamanho maior ou igual a 7 caracteres/letras
let with7Chars = hitchedSpaceships.find(element => { return element.length >= 7})

// aqui exibimos a variável que contém os itens com 7 caracteres no console.log
console.log(with7Chars)
// resultado: "Deméter"
```
<hr>

- reduce:

  - O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. Resumindo reduz o array em um único elemento.
```
// Aqui criamos um array com numeros
let numeros = [3, 2, 3, 8]

//  aqui criamos uma variável e utilizamos o método reduce no array,
//  passamos uma funçõa que recebe 2 parâmetro o valorInicial do array e o valorAtual, e retornamos a soma dos elementos.
let arrayReduzido = numeros.reduce(function(valorInicial, valorAtual) {
  return valorInicial + valorAtual;
});

// aqui o array reduzido em um elemento após a soma 1 + 2 + 3 + 4
console.log(arrayReduzido);
// resultado: 10
```
<hr>

### Exercício Arrays

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Arrays</title>
</head>
<body>
    <h1>Exercício Arrays</h1>
    <script src="index.js"></script>
</body>
</html>
```

- JAVASCRIPT
```
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

// primeiro utilizamos o filter para filtrar as naves em que a tripulação é maior que 9,
// depois utilizamos o map para retornar o nome das naves que tem a tripulação maior que 9.
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]       
})

// aqui utilizamos o findIndex para retornar qual nave, com o índice 2 igual a false
let ongoingHitchedSpaceships = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false
})


// aqui utilizamos o map para deixar todos os elementos com letra maiúscula
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

// aqui criamosa mensagem que será exibida
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ") 
message += "\nPlataforma com processo de engate: " + (ongoingHitchedSpaceships + 1) 
message += "\nEspaçonaves destacadas: " + highlightedSpaceships
// e aqui exibimos um alert com a mensagem criada acima
alert(message)
```
<hr>
<br>

## Objetos
<br>

### Introdução a Objetos

- Assim como os arrays, também são estruturas de dados
  - Capazes de armazenar e organizar outros dados
- Dados são organizados através de propriedades

- Associação chave-valor
  - Chave é o nome da propriedade
  - Valor é o valor que esta propriedade vai receber.
Também podem armazenar internamente qualquer outro tipo
  - Inclusive Arrays e outros objetos

-Sintaxe:
```
    - Declaração de um objeto dentro de chaves { }.

    let nomeObjeto = {
      propriedade: 'Valor',
      propriedade: 'Valor'
    }

    //Abaixo duas formas de acessar os elementos do Objeto
    console.log(nomeObjeto.propriedade)
    console.log(nomeObjeto['propriedade'])

    // Duas formas de adicionar novos elementos no Objeto.    
     nomeObjeto.propriedade = 'valor'
     nomeObjeto['propriedade'] = 'valor'
```

- Exemplo
```
// Aqui criamos o objeto
let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Batalha"
}

// Para acessar um elemento do objeto basta passar o nome do objeto, colocar um ponto e o nome da propriedade do objeto desejada
//console.log(spaceship.type)
//  "Batalha"

// Aqui outra maneira de acessar os elementos do objeto, basta passar o nome da propriedade entre parênteses dentro de colchetes.
//console.log(spaceship["name"])
// "Fenix"

// também podemos adicionar novos elementos basta passar o nome do objeto, ponto o nome da propriedade com seu valor
spaceship.isHitched = false

// aqui outra maneira de adicionar elementos
spaceship["shieldLevel"] = 100

// aqui acessamos as propriedades não importa como foi criado podemos acessar de qualquer maneira
console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)
```
<hr>

  - Também podemos declarar um objeto vazio

``` 
let nomeObjeto = { }

 ou   

let nomeObjeto = new Object () 
```

- Exemplo
```
let spaceship = { }

// aqui será retornado o objeto vazio
console.log(spaceship)


// Também podemos declarar um objeto vazio utilizando o new Object
let spaceship = new Object()
console.log(spaceship)
```

### Armadilhas Objetos

-  O ideal é evitar criar propriedades com "strings", number, boolean e sim criar assim platformsQuantity: 10 para evitar problemas, erros.

- Exemplo:
```
// Podemos colocar qualquer tipo em uma propriedade
let spacialStation = {
  name: "Fox",
  platformsQuantity: 10,
  "new name": "Estelar",
  true: false,
  2: "Descoberta"
}

// se tentarmos acessar a propriedade 2 com o ponto irá ocorrer um erro
// "Uncaught SyntaxError: missing ) after argument list"
console.log(spacialStation.2)

// para conseguir acessar temos que utilizar colchetes e a propriedade entre parênteses
console.log(spacialStation["2"])
// "Descoberta"

// mesma coisa acessar propriedades com espaço em seu nome utilizando o ponto
// "Uncaught SyntaxError: missing ) after argument list"
console.log(spacialStation.new name)

// para acessar normalmente utilizamos colchetes e parênteses
console.log(spacialStation["new name"])
```

### Comparando Objetos e Arrays

- Relembrando:
  - Os objetos são uma estrutura chave-valor.
  - Utilizamos objetos quando precisamos mapear propriedades, ou atributos.
  - Arrays são uma estrutura de lista sequencial.
  - Utilizamos os arrays quando precisamos armazenar uma sequencia de elementos.
- Quando pensamos em objetos, conseguimos enxergar uma representação do mundo real.

- Exemplo:
```
// Aqui é criado o objeto
let spacialStation = {
  name: "Receptora",
  platformsQuantity: 15,
  shape: "Esférica"
}
// aqui transformamos a propriedade name do objeto em UpperCase
console.log(spacialStation.name.toUpperCase())

// Aqui criamos um array
let spaceshipNames = ["Fenix","Puller","Golias"]
// e aqui também transformamos em UpperCase porém de maneira diferente
console.log(spaceshipNames[0].toUpperCase())
```
- Os arrays e objetos embora possam trabalhar juntos eles tem objetivos diferentes.
- Com os objetos podemos representar melhor as entidades do mundo real com a propriedade valor.
- Já os arrays temos uma lista que não precisa de um atributo direto e seu acesso sempre acontece por meio dos índices.
<hr>
<br>

### Aninhando Objetos e Arrays

- Exemplo de array dentro de um objeto:
```
// Exemplo de array dentro de um objeto
let spaceship = {
  name: "Supernova",
  type: "Batalha",
  crew: ["Capitão Silva", "Ana Julia", "Thiago"]
}

// podemos utilizar os métodos de array normalmente
// utilizamos o push na propriedade crew que contém um array com a tripulação e adicionamos um novo tripulante
spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)
```
<hr>

- Exemplo de Array com Objeto dentro:
```
// Array com objetos dentro
let spaceships = [
  { name: "Elemental", crewQuantity: 10},
  { name: "Colossus", crewQuantity: 8},
  { name: "Helmet", crewQuantity: 15}
]

// aqui exibimos no console.log o índice 0 do array spaceships e a propriedade name dele
console.log(spaceships[0].name)
```
<hr>

- Exemplo utilizando o método forEach() no array de objetos:
```
// Array com objetos dentro
let spaceships = [
  { name: "Elemental", crewQuantity: 10},
  { name: "Colossus", crewQuantity: 8},
  { name: "Helmet", crewQuantity: 15}
]

// aqui utilizamos o forEach no array spaceships
// e para cada elemento do array ele irá exibir uma mensagem de alerta com o nome e a quantidade de tripulantes.
spaceships.forEach(spaceship => {
  alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
})
```
<hr>

- Exemplo Objeto dentro de outro Objeto:
```
let spaceship = {
  name: "Golias",
  maxCrew: 20,
  captain: {
    name: "Hugo Trent",
    age: 37
  }
}

// exibimos o console.log, primeiro acessamos o objeto spaceship depois a propriedade captain que também é um objeto e acessamos a propriedade name exibindo o nome do capitão.
console.log(spaceship.captain.name)
// "Hugo Trent"
```
<hr>
<br>

### Adicionando funções aos objetos

- As propriedades de um Objeto também podem receber funções e quando isso ocorre a gente chama essas funções de métodos, as outras propriedades que não tem funções são chamada de atributos.
```
// Aqui declaramos um objeto que recebe uma função/método chamada turnOn que exibe 2 alertas
let spaceship = {
  name: "Deméter",
  type: "Extração",
  maxCrew: 20,
  turnOn: function(){
    alert("Preparando Propulsão")
    alert("Ligando computador de bordo")

    // aqui exibimos só um console.log para testar o this que no caso referencia o objeto spacehip e acessamos a propriedade name dele
    console.log(this.name)
  }
}
// e aqui chamamos o objeto e chamamos a função contida nele
spaceship.turnOn()

// adicionamos a propriedade velocity com valor 0
spaceship.velocity = 0

// e aqui adicionamos a propriedade speedUp que recebe um método que contém o parâmetro acceleration.
// para não precisarmos ficar chamando o objeto toda hora utilizamos o método this, ele irá referenciar o próprio objeto spaceship, e irá acessar a propriedade velocity
spaceship.speedUp = function(acceleration){
  this.velocity += acceleration
}
// aqui eixbimos o objeto antes de chamar o método de acelerar
console.log(spaceship)

// aqui chamamos o método speedUp e passamos o valor do parâmetro acceleration que é 10
spaceship.speedUp(10)

// aqui exibimos no console.log o objeto após chamar o método
console.log(spaceship)
```
<hr>
<br>

### Exercício Objetos

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Objetos</title>
</head>
<body>
    <h1>Exercício Objetos</h1>
    <script src="index.js"></script>
</body>
</html>
```

- JAVASCRIPT
```
// Aqui o objeto em que irá armazenar os dados da nave
let spaceship = {
  velocity: 0,
  speedUp: function(acceleration) {
    this.velocity += acceleration;
  },
};

// Aqui a função para adicionar os dados da nave no objeto acima
function registerSpaceship() {
  spaceship.name = prompt("Informe o nome da nave");
  spaceship.type = prompt("Informe o tipo da nave");
  spaceship.maxVelocity = prompt("Qual a velocidade máxima da nave (km/s)");
}

//  Aqui a função para acelerar a nave
//  Primeiro pegamos o quanto o usuário quer acelerar e armazenamos na variável acceleration
//  Depois chamamos o método que foi criado no objeto e passamos o valor salvo na variável como parâmetro
//  ai exibimos um menu para selecionar entre acelerar e parar a nave,
// verificamos se a velocidade atual era maior que a velocidade máxima se for exibimos uma mensagem de alerta com a velocidade atual e a máxima da nave
function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!" +
            "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
  }

// Aqui criamos a função para parar a nave
// exibimos um alerta com os dados da nave,
// e definimos a velocidade como 0
function stop(){
    alert("Nome : " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da Nave: " + spaceship.velocity + "km/s" + "\nMáxima da Nave: " + spaceship.maxVelocity + "km/s")
    spaceship.velocity = 0
  }

// Aqui uma função para exibir o menu
// se a opção escolhida for 1 chamamos a função que acelera a nave, e se for 2 iremos chamar a função que para a nave
function showMenu() {
  let chosenOption
  do {
    chosenOption = prompt("O que deseja fazer piloto? \n1-Acelerar \n2-Parar");
    switch (chosenOption) {
      case "1":
        acelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert("Opção inválida");
    }
  } while (chosenOption != "2");
}

// Aqui chamamos as funções de registro e de exibir o menu
registerSpaceship();
showMenu();
```