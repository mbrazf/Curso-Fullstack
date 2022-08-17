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