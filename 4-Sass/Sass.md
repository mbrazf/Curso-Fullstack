# Sass

## O que é e para que serve o Sass

-   Ferramenta de desenvolvimento front-end com css
-   Abreviação de Syntactically Awesome StyleSheets  
<br>

-   Pré-Processado
-   Escrevemos os estilos com sass e depos de processar ele se tornará o css
-   2 Tipos:
    -   Sass
    -   Scss  
<br>

-   Organização
    -   Facilidades(variáveis, imports, funções)  
<br>

-   Processar o arquivo
<hr>

## Instalando o NPM no Windows  
<br>

-   Instalamos o [Node.js](https://nodejs.org/en/) e o NPM já vem incluso com ele  

-   Abrimos o PowerShell como admnistrador
-   Executamos esse comando no PowerShell para permitir a abertura de scripts para a nossa máquina.
```
    Get-ExecutionPolicy
```
-   Se retornar "Restricted" você irá executar o seguinte comando no terminal do PowerShell
-   E selecionar a opção "S" para "Sim"
```
    Set-ExecutionPolicy RemoteSigned
```
-   Depois do sucesso executaremos o comando inicial Get-ExecutionPolicy novamente e devemos ter o retorno "RemoteSigned"
<hr>
<br>

## Instalando e configurando o Sass
<br>

-   Para instalar o Sass entramos no site [Sass](https://sass-lang.com/install)
-   E utilizamos o seguinte comando no terminal
```
npm install -g sass
```
-   ele será instalado de forma global ou seja não precisamos ficar instalando toda vez  
<br>
<hr>

## Utilizando o sass

### Arquivo do tipo style.sass

-   Criamos um HTML qualquer
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instalação do Sass</title>
</head>
<body>
    <div class="quadrado">
        
    </div>
</body>
</html>
```
<br>

-   Depois criamos uma pasta chamada sass dentro da pasta do projeto  
-   Dentro dela criamos o arquivo style.scss ou style.sass onde escreveremos os estilos
```
- sass/style.sass

- O arquivo do tipo sass é indentado não utiliza chaves como o css comum

.quadrado 
    background-color: red
    width: 200px
    height: 200px
```

-   para iniciar o sass utilizamos o seguinte comando: 
-   Ele irá monitorar alterações na pasta sass e o arquivo style.sass desejado  e irá criar uma nova pasta style com o estilo compilado para css comum
```
    sass --watch sass/style.sass:style/style.css
```
<br>

- Ao utilizar o comando será criado uma pasta style com os estilos compilados para css
```
-   style/style.css

.quadrado {
  background-color: red;
}
```
- e ai só linkar o html com a pasta style com os estilos convertidos para css
```
-   index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instalação do Sass</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <div class="quadrado">
        
    </div>
</body>
</html>
```
- e para o sass parar de monitorar a pasta e arquivo  basta dar ctrl c que ele será parado.
<hr>
<br>

### Arquivo do tipo style.scss
<br>

-   Utilizamos o html
```
-   index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instalação do Sass</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <div class="quadrado">
        
    </div>
</body>
</html>
```

-   O arquivo do tipo scss é mais parecido com o css comum
```
-   style.scss

.quadrado {
    background-color: red;
    width: 100px;
    height: 100px;
}
```

-    E utilizamos o comando para monitorar e iniciar o sass novamente
```
sass --watch sass/style.scss:css/style.css
```
-   ele irá criar a pasta css com arquivo style.css com os estilos
<hr>
<br>

## Variáveis no Sass
<br>

```
- index.html


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variáveis no Sass</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <button class="btn1">Comprar</button>
    <button class="btn2">Vender</button>
</body>
</html>
```

-   criamos a pasta sass com o arquivo style.scss
-   E aqui vemos como utilizar as variáveis no sass
```
/*Aqui declaramos as variáveis com cifrão $ nessa variável setamos a cor do botão e a largura*/

$btn-color: #ff4043;
$width-btn: 95px;


/*Aqui as classes dos itens html e para utilizar o variável basta chamar ela com o nome que ela foi criada $btn-color */

.btn1{
    width: $width-btn;
    background-color: $btn-color;
}

.btn2{
    width: $width-btn;
    background-color: $btn-color;
}
```

- e aqui utilizamos o comando para iniciar o sass
```
sass --watch sass/style.scss:css/style.css
```
<hr>
<br>

## O que é Nesting e como usar?  
<br>
-   O Nesting é uma forma de escrever os estilos de um elemento interno a ele mais facilmente com menos código.
<br>  

```
- index.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nesting</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="classe1">
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
        </ul>

        <button>Comprar</button>
    </div>
</body>
</html>
```

- Criamos a pasta sass com style.scss
- utilizamos o comando para iniciar o sass
```
sass --watch sass/style.scss:css/style.css
```

- Aqui utilizamos o nesting uma forma de escrever os estilos com menos linhas de código
```
-   sass/style.scss

/*
Aqui selecionamos a classe1 e a ul e alteramos a cor de fundo e abaixo selecionamos a classe1 novamente e a li e alteramos a sua cor de fundo também

.classe1 ul {
    background-color: red;
}

.classe1 li {
    background-color: blue;
}
*/

/*Aqui utilizamos o nesting que faz basicamente a mesma coisa que o exemplo acima mas de uma forma mais simplificada, selecionamos a classe1 uma única vez e dentro dela selecionamos os elementos que estão internos e alteramos seus estilos */

/*E para utilizar o nesting nos botões basta utilizar o &: e a ação desejada no exemplo &:hover */

.classe1{
    ul{
        background-color: red;
    }

    li{
        background-color: blue;
        padding: 10px 0;
    }

    button{
        background-color: green;
        color: white;
        cursor: pointer;

        &:hover{
            background-color: red;
            transition: 500ms;
        }
    }
}
```
<hr>
<br>

## Organizando o código com os Imports
<br>

```
-   index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Imports</title>
</head>
<body>
    <p class="textBuy">Clique no botão para comprar</p>
    <button class="btn">Comprar</button>
</body>
</html>
```

-   Criamos a pasta sass e dentro dela criamos o style.scss que é o arquivo principal em que iremos importar os itens,
-   Dentro da pasta sass criamos outras duas pastas, colors com colors.scss que irá conter as variáveis com as cores, e também a pasta pages com os estilos das páginas criadas.

```
- colors/colors.scss

/*Aqui declaramos a variáveis com as cores */
$primary-color: #ff4043;
$secondary-color: #ff4;
```

```
-   pages/home.scss

.textBuy{
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    color: $primary-color;
}

.btn{
    padding: 10px 15px;
    border: 1px solid red;
    background-color: $secondary-color;
}
```

```
-   style.scss

/*Aqui importamos todos os itens */
/* Importamos as cores de colors.scss*/

// Import Colors
@import "./colors/colors.scss";

/* Importamos a página Home*/

// Import Home
@import "./pages/home.scss"
```

- e utilizamos o comando para o sass ser executado
```
sass --watch sass/style.scss:css/style.css
```
<hr>
<br>

## Aproveitamento de código com Mixins
<br>

```
- index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Mixins</title>
</head>
<body>
    <div class="texts">
        <h1>Hello , World!</h1>
        <p>Hello, World!</p>
    </div>
</body>
</html>
```

```
- sass/styles.scss

/*.
// Aqui definimos os estilos dos elementos de uma forma comum
texts {
    h1 {
        color: #ff4043;
        font-size: 34px;
        font-family: Arial, Helvetica, sans-serif;
    }

    p {
        color: blue;
        font-size: 22px;
        font-family: sans-serif;
    }
}
*/

// Aqui uma forma de escrever estilos com o mixin, o mixin é uma forma de reaproveitar os estilos mais facilmente, declaramos o @mixin e depois o nome dele e dentro de () passamos as variáveis quer serão utilizadas como parâmetro, associamos as propriedades css com as variáveis
@mixin text-style($color, $font-size, $font-family){
    color: $color;
    font-size: $font-size;
    font-family: $font-family;
}


// e para utilizar o mixin utilizamos o @include com o nome do mixin e passamos os estilos como parâmetro

// também podemos utilizar com variáveis independentes
$primary-color: purple;

.texts {
    h1 {
        @include text-style(#ff4043, 34px, Arial)
    }

    p {
        @include text-style($primary-color, 22px, sans-serif)
    }
}
```

- não esqueça de utilizar o comando para o sass ser executado
```
sass --watch sass/style.scss:css/style.css
```
<hr>
<br>

## Heranças e Extends
<br>

-   Criamos o html com alguns botões e neles adicionamos 2 classes uma principal e uma secundária
```
- index.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Heranças e Extends</title>
</head>
<body>
    <button class="btn-roxo">Button Roxo</button>
    <button class="btn btn-amarelo">Button Amarelo</button>
    <button class="btn btn-azul">Button Azul</button>
</body>
</html>
```

```
-   sass/style.scss


// Aqui declaramos os estilos que todos os botões irão conter na classe principal
.btn {
    width: 125px;
    padding: 10px 0px;
    border-radius: 20px;
    display: block;
    margin-top: 10px;

// Aqui utilizamos a herança com o &. e o nome da classe secundária, só podemos utilizar a herança se o elemento tiver 2 classes uma principal e a secundária que irá herdar.
    &.btn-amarelo {
        background-color: yellow;
        color: black;
    }

    &.btn-azul {
        background-color: blue;
        color: white;
    }
}

// Aqui utilizamos o @extend e o nome da classe em que herdaremos os estilos, com o extend não precisamos criar uma outra classe
.btn-roxo {
    @extend .btn;
    background-color: rebeccapurple;
    color: white;
}
```
<hr>
<br>

## Boas práticas Sass
<br>

- Estrutura das pastas e arquivos

![teste](https://github.com/mbrazf/Curso-Fullstack/blob/master/3-Sass/estrutura-pastas-sass.png)

- Criamos uma index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Home</title>
</head>
<body>
    <h1 id="title-home">Home</h1>
    <a href="./paginas-html/cadastro.html">
        <button class="btn">Cadastro</button>
    </a>
    <a href="./paginas-html/login.html">
        <button class="btn">Login</button>
    </a>
</body>
</html>
```
-   Criamos uma pasta paginas-html onde ficaram as páginas
```
- paginas-html/login.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <h1 id="title-home">Login</h1>
        <a href="../index.html">
            <button class="btn">Home</button>
        </a>
        <a href="./login.html">
            <button class="btn">Login</button>
        </a>
        <p>Login aqui!</p>
    </div>
</body>
</html>
```
```
- paginas-html/cadastro.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Cadastro</title>
</head>
<body>
    <h1 id="title-home">Cadastro</h1>
    <a href="../index.html">
        <button class="btn">Home</button>
    </a>
    <a href="login.html">
        <button class="btn">Login</button>
    </a>
    <p id="cadastro-text">Cadastre-se aqui!</p>
</body>
</html>
```

- Criamos a pasta sass com style.scss
```
- sass/style.scss

// Import do arquivo com as cores
@import "./variables/colors/colors.scss";

// Import do arquivo common.scss
@import "./variables/common/common.scss";

// Import dos estilos da página de cadastro
@import "./pages/cadastro.scss";

// Import dos estilos da página de login
@import "./pages/login.scss";
```

- dentro da pasta sass criamos a pasta pages onde fica os estilos de cada página
```
-   sass/pages/cadastro.scss

// Aqui selecionamos o id cadastro-text e utilizamos o mixin criado em outro arquivo, basta passar o valor das propriedades css
#cadastro-text {
    @include text-style(red, 16px, sans-serif);
}
```

```
-   sass/pages/login.scss

// Aqui selecionamos a div com a classe .container e utilizando nesting acessamos o elemento p dentro dela, e utilizamos o mixin e passamos os valores das propriedades
.container {
    p {
        @include text-style($btn-background, 22px, sans-serif);
    }
}
```

- dentro da pasta sass também criamos a pasta variables e dentro de variables outras 2 pastas colors com colors.scss e common com common.scss
```
- sass/variables/colors/colors.scss

// Aqui declaramos as variáveis de cores
$primary-color: #ff4043;
$btn-background: #0a092c;
```

```
- sass/variables/common/common.scss

// Aqui colocamos todos os estilos que serão comuns em todas as páginas
#title-home {
    font-size: 44px;
    font-family: sans-serif;
}

// Aqui o estilo principal dos botões
.btn {
    width: 95px;
    padding: 10px;
    cursor: pointer;
    background-color: $btn-background;
    color: white;
    display: block;
    margin-top: 10px;
}

// Aqui criamos um mixin para os elementos que tem o mesmo estilo
@mixin text-style($color, $font-size, $font-family){
    color: $color;
    font-size: $font-size;
    font-family: $font-family;
}
```
<hr>
<br>

## O que são e como usar as Funções no Sass
<br>

```
-   index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Funções no Sass</title>
</head>
<body>
    <div class="title">
        <h1>Hello, World!</h1>
    </div>

    <!-- <h1 id="title">Hello, World!</h1> -->
    
</body>
</html>
```

```
- sass/style.scss

/*
// Aqui um exemplo da função mix que mistura duas cores 

#title{
    color: mix( green,  blue,  50%);
}
*/

// Aqui um reset css para remover as margens e paddings dos elementos
* {
    margin: 0;
    padding: 0;
}

// Aqui criamos uma função 
// ela irá alterar a cor do texto baseado no brilho da cor de fundo
@function color-title($background-color){
    @if(lightness($background-color) > 50){
        @return black;
    } @else {
        @return white;
    }
}

// Aqui criamos um mixin para alterar a cor de fundo, e chamamos a função passando o parâmetro $color para eles.
@mixin background-color-mixin($color){
    background-color: $color;
    color: color-title($color);
}

// Aqui utilizamos o mixin e passamos a cor de fundo como parâmetro
.title{
    height: 100vh;
    @include background-color-mixin(black);
}
```

-   Para ver as funções do Sass [W3C Funções do Sass](https://www.w3schools.com/sass/sass_functions_string.php)
<hr>
<br>

## Como deixar o site mais rápido com minify
<br>

- O minify é uma forma de diminuir ainda mais o código css gerado após processar o scss, para acelerar o site

```
- Aqui o estilo final css gerado após o Sass ser processado

#title-home {
  font-size: 44px;
  font-family: sans-serif;
}

.btn {
  width: 95px;
  padding: 10px;
  cursor: pointer;
  background-color: #0a092c;
  color: white;
  display: block;
  margin-top: 10px;
}

#cadastro-text {
  color: red;
  font-size: 16px;
  font-family: sans-serif;
}

.container p {
  color: #0a092c;
  font-size: 22px;
  font-family: sans-serif;
}
```

-   Para reduzir o tamanho do código utilizamos este comando no terminal.
-   basta passar o caminho e o nome do arquivo e adicionar --style compressed para comprimir o código
```
    sass sass/style.scss:css/style.css --style compressed
```
- o resultado será esse
```
#title-home{font-size:44px;font-family:sans-serif}.btn{width:95px;padding:10px;cursor:pointer;background-color:#0a092c;color:#fff;display:block;margin-top:10px}#cadastro-text{color:red;font-size:16px;font-family:sans-serif}.container p{color:#0a092c;font-size:22px;font-family:sans-serif}/*# sourceMappingURL=style.css.map */
```