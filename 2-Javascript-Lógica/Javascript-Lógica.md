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