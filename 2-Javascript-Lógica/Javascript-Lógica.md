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