# CSS Moderno

## CSS Moderno + Responsividade

- O que é e para que serve - responsividade

- A responsividade nada mais é do que a mudança do layout para diferentes tamanhos de tela. Com a responsividade, você não só muda coisas de lugar, mas pode fazer coisas serem substituídas. Se você tiver uma navbar normal, você pode substituir em certo ponto ela para uma navbar hambúrguer.
<hr>
<br>

- Aqui criamos o layout da página com as imagens e o parágrafo com o texto abaixo e adicionamos as classes para alterar os estilos com o css
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Responsividade</title>
</head>

<body>
    <img src="https://images.pexels.com/photos/4395377/pexels-photo-4395377.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-01" class="img-content">
    <p class="text-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut atque nesciunt alias aut nihil
        quasi aperiam eligendi earum maxime! Quo porro voluptate autem exercitationem tempora possimus facilis vitae
        nihil adipisci?</p>

    <img src="https://images.pexels.com/photos/6704270/pexels-photo-6704270.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-02" class="img-content">
    <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam aliquid tempore,
        debitis rerum quia dolorem magni eligendi, possimus, sit excepturi ad molestiae! Quia, minima! Placeat rerum
        corrupti at et?</p>

    <img src="https://images.pexels.com/photos/4395377/pexels-photo-4395377.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-03" class="img-content">
    <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maxime deleniti
        perspiciatis sed eveniet necessitatibus qui minus laboriosam aperiam amet eos voluptates explicabo nulla
        consequatur ullam, pariatur corrupti quo eius?</p>
</body>
</html>
```
<br>

- Aqui selecionamos os elementos com suas classes e definimos seus estilos 

- E abaixo utilizamos as media queries um item utilizado para responsividade, se a largura máxima da página (max-width) for de um determinado tamanho definimos abaixo os diferentes estilos para cada tamanho nos exemplos 795px, 510px e 410px, e alteramos os tamanhos da imagem e do texto
```
.img-content {
    width: 765px;
    height: 400px;
}

.text-content{
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
}


@media (max-width: 795px)  {
    .img-content{
        width: 500px;
    }
    .text-content{
        font-size: 16px;
    }
}

@media (max-width: 510px){
    .img-content{
        width: 100%;
        height: auto;
    }
}
@media (max-width: 410px){
    .text-content{
        text-align: center;
    }
}
```
<br>

- Aqui basicamente o mesmo exemplo apenas adicionamos um título

```
<body>
    <!-- Aqui criamos o layout da página com as imagens e o parágrafo com o texto abaixo e adicionamos as classes para alterar os estilos com o css-->
    <img src="https://images.pexels.com/photos/4395377/pexels-photo-4395377.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-01" class="img-content">
        <h1 class="title-content">Título 1</h1>
    <p class="text-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut atque nesciunt alias aut nihil
        quasi aperiam eligendi earum maxime! Quo porro voluptate autem exercitationem tempora possimus facilis vitae
        nihil adipisci?</p>

    <img src="https://images.pexels.com/photos/6704270/pexels-photo-6704270.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-02" class="img-content">
        <h1 class="title-content">Título 2</h1>
    <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam aliquid tempore,
        debitis rerum quia dolorem magni eligendi, possimus, sit excepturi ad molestiae! Quia, minima! Placeat rerum
        corrupti at et?</p>

    <img src="https://images.pexels.com/photos/4395377/pexels-photo-4395377.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=1"
        alt="img-03" class="img-content">
        <h1 class="title-content">Título 3</h1>
    <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maxime deleniti
        perspiciatis sed eveniet necessitatibus qui minus laboriosam aperiam amet eos voluptates explicabo nulla
        consequatur ullam, pariatur corrupti quo eius?</p>
</body>
```
<br>

- Aqui as alterações da responsividade
```
/* Aqui selecionamos os elementos com suas classes e definimos seus estilos */
.img-content {
    width: 765px;
    height: 400px;
}
.text-content{
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
}

@media  (min-width: 1440px) and (max-width:2560px) {
    body{
        background-color: red;
        color: white;
    }
}

@media (max-width:790px){
    .img-content{
        width: 90%;
        height: auto;
    }
}

@media (max-width: 425px){
    .img-content{
        width: 100%;
        height: auto;
    }
    .text-content{
        font-size: 18px;
        text-align: center;
    }
    .title-content{
        text-align: center;
    }
}

@media (max-width: 320px){
    .text-content{
        font-size: 14px;
    }
}
```
<br>
<hr>

# Flexbox

- O flexbox é um método de organização de layout. Com ele, você manipula itens dentro de um container de forma dinâmica, ou seja, independente do tamanho do container, os itens vão estar se adaptando a ele.
- As aplicações que criamos, elas são acessadas de vários dispositivos. E como foi dito, o flexbox vai organizar o container de acordo com o tamanho do dispositivo. Com isso, nós podemos fazer diversas manipulações de forma automática para vários dispositivos.
- Utilizado para alinhar elementos em linhas ou colunas.

- Aqui o layout que será usado para estudo
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Flexbox</title>
</head>
<body>
    <div class="container">
        <div class="item">
            <p>Item 1</p>
        </div>
        <div class="item">
            <p>Item 2</p>
        </div>
        <div class="item">
            <p>Item 3</p>
        </div>
    </div>
</body>
</html>
```

- Aqui o css
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
}

.item {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background-color: white;
    font-size: 20px;
}
```
- ## flex:
        - display: flex - Define o flexbox no elemento.

- ## flex-direction:
        - Define o tipo do flex

        - row(valor padrão): define o flex em linha/horizontal.
        - column: define o flex em coluna/vertical .
        - row-reverse: define o flex em linha só que ao contrário. 
        - column-reverse: define o flex em coluna só que ao contrário.

- ## gap:      
        - row-gap: espaçamento entre os elementos em linha/vertical.
        - column-gap: espaçamento entre os elementos em coluna/horizontal.
        - gap: espaçamento entre os elementos geral linha e coluna/ vertical e horizontal.

- ## justify-content: 
        - Alinha os items na horizontal se o flex-direction for row.

        - flex-start(valor padrão) : alinha os items no início do container.
        - center: centraliza os elementos .
        - flex-end: alinha os items no fim do container .
        - space-around: espaço em volta dos items .
        - space-between: espaço entre os items .
        - space-evenly: espaçamento igual entre e nas laterais dos items.

- ## align-items: 
         - Alinha os items na vertical se o flex-direction for column.   

        - flex-start(valor padrão) : alinha os items no início do container.
        - center: centraliza os elementos .
        - flex-end: alinha os items no fim do container .
        - space-around: espaço em volta dos items .
        - space-between: espaço entre os items .
        - space-evenly: espaçamento igual entre e nas laterais dos items.
        - stretch: se não houver largura ou altura definido ele irá ocupar todo o espaço da tela.

- ## flex-wrap:
        - Define se haverá quebra de linha nos items ou não.

        - wrap: haverá quebra de linha.
        - nowrap(valor padrão): não haverá quebra de linha.
        - wrap-reverse: haverá quebra de linha ao contrário para cima.


- ## Exemplo
```
- HTML do exemplo

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Flexbox Layout</title>
</head>
<body>
    <div class="container">
        <div class="item">
            <p>Item 1</p>
        </div>
        <div class="item">
            <p>Item 2</p>
        </div>
        <div class="item">
            <p>Item 3</p>
        </div>
    </div>
</body>
</html>
```

```
- CSS do exemplo

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: flex;
    gap:  0px 15px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.item {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background-color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
<hr>
<br>

- ## Exercício

```
-   HTML do exercício

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Exercício Flexbox</title>
</head>

<body>
    <header class="header">
        <img src="/Flexbox/exercício-flex/iconrock-red.svg" alt="logo-rock" class="logo-rock">
        <img src="/Flexbox/exercício-flex/logo-onebitcode.svg" alt="logo-onebitcode" class="logo-onebitcode">
        <div class="buttons">

            <button class="buttonHeader">
                Início
            </button>

            <button class="buttonHeader">
                FAQ
            </button>

            <button class="buttonHeader">
                Suporte
            </button>
        </div>
    </header>
</body>

</html>
```

```
-   CSS do exercício

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.header{
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
}
.logo-rock {
    width: 40px;
}
.logo-onebitcode {
    width: 200px;
}
.buttons {
    display: flex;
    gap: 10px;
}
.buttonHeader{
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: transparent;
    border-color: white;
    color: white;
    cursor: pointer;
    transition: 0.4s;
}
.buttonHeader:hover {
    border-color: #ff0044;
}
```

- ## flex-basis
    -    flex-basis basicamente define um tamanho para os itens se não houver uma width/largura definida.

- ## flex-grow
    -    flex-grow define o grau do crescimento do item (quanto maior o valor maior a área ocupada do item) ocupando o tamanho restante do container flex.

- ## flex-shrink
    -   flex-shrink especifica o quanto o item irá encolher em relação ao resto dos itens flexíveis dentro do mesmo container, quanto maior o valor mais irá encolher.

- ## flex
    -    flex: 1 0 200px;    flex basicamente é a junção do flex-basis, flex-grow e flex-shrink , o primeiro valor é o flex-grow e o quanto ele irá crescer, o segundo o flex-shrink e o quanto o item irá encolher e o último é o flex-basis com o tamanho dos itens flex.

- ## align-self
    -    align-self alinha cada elemento individualmente | flex-start | flex-end | center (valor inicial)

- ## order
    -    order basicamente define a ordem que o item será exibido, 0, 1, 2, 3
<hr>
<br>

- ## Exemplo

-   HTML
```

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Flexbox Layout</title>
</head>
<body>
    <div class="container">
        <div class="item item1">
            <p>Item 1</p>
        </div>
        <div class="item item2">
            <p>Item 2</p>
        </div>
        <div class="item item3">
            <p>Item 3</p>
        </div>
    </div>
</body>
</html>
```

- E aqui o CSS 

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: flex;
    gap:  0px 15px;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    /*flex-wrap: wrap;*/
}

.item {
    width: 100%;
    height: 70px;
    border: 2px solid black;
    background-color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item1 {
    order: 2; 
    align-self: flex-end; 
}

.item2{
    /*flex: 1 0 200px; */  
    order: 3;
    align-self: flex-start;
}

.item3{
    order: 1;
}

@media (max-width: 390px) {
    .item2 {
        flex: 1 0 620px;
    }
}
```
<br>

- ## Exercício 2

- HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Flexbox Layout</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <p class="paragraph">HEADER</p>
        </header>
        <section class="mainContent">
            <div class="item">
                <p class="paragraph">Item 1</p>
              </div>
              <div class="item">
                <p class="paragraph">Item 2</p>
              </div>
              <div class="item">
                <p class="paragraph">Item 3</p>
              </div class="item">
              <div class="item">
                <p class="paragraph">Item 4</p>
              </div>
              <div class="item">
                <p class="paragraph">Item 5</p>
              </div>
              <div class="item">
                <p class="paragraph">Item 6</p>
              </div>
        </section>
        <footer class="footer">
            <p class="paragraph">FOOTER</p>
        </footer>
    </div>
</body>
</html>
```

- CSS 

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
  flex-basis: 100%;
  background-color: white;
  border: 2px solid black;
  display: flex;
  justify-content: center;
	padding: 10px;
}

.paragraph {
    font-size: 30px;
}

.mainContent{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    flex: 1 0 auto;
}

.item{
    flex-basis: 350px;
    height: 230px;
    border: 2px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer{
    flex-basis: 100%;
    border: 2px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
```
<hr>
<br>

# Grid Layout

- O que é: Assim como o flexbox, o grid é um organizador de layout. Com ele nós vamos ter uma divisão de linhas e colunas, diferente da divisão de linha e coluna do flexbox, a do grid é muito mais organizada se você quiser linhas e colunas definidas.

- Para que serve: O grid ele serve para como foi dito, ter linhas e colunas. Ou seja, você poderia por exemplo, ter um layout de um blog, onde nós temos uma coluna para o conteúdo principal e uma lateral sendo o sidebar.

- Quando é utilizado: Como foi explicado no tópido “para o que serve”, ele vai ser utilizado em momentos que a gente queira ter divisão de colunas, tipo conteúdo principal e barra lateral. Só que, nós também podemos ter uma linha que tem duas colunas de tamanhos iguais, cada uma com o seu conteúdo.
<hr>

- ## display: grid 
    -   utilizado para definir o grid layout no container

- ## grid-template-columns: repeat(3, 1fr) 
    -   grid-template-columns é utilizado para definir as colunas do grid - podemos utilizar % e fr (frame: parte da tela que você quer que o elemento ocupe 1fr 1fr 1fr), também temos o repeat usado para repetir as colunas, o primeiro valor é o número de colunas e o segundo a medida que o elemento irá ocupar da tela.

- ## row-gap: ; 
    -   espaçamento entre as linhas

- ## column-gap: ; 
    -   espaçamento entre as colunas

- ## gap: 10px 15px; 
    -   espaçamento geral -  primeiro valor espaço entre as linhas e o segundo entre as colunas

- ## grid-template-rows: repeat(3, 1fr);  
    -   é utilizado para definir as linhas do grid
    
- ## grid-auto-rows: minmax(210px, 100%); 
    -   aqui definimos o tamanho das linhas e com o minmax()  podemos definir o tamanho mínimo e o tamanho máximo do item

<hr>
<br>

- ## EXEMPLO

-   HTML
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Grid Layout</title>
</head>
<body>
    <div class="container">
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi iusto consequuntur, dolorem labore pariatur animi veniam!</p>
        </div>
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi temporibus doloribus quae reprehenderit sed, sit molestias soluta fuga nobis, corporis omnis?</p>
        </div>
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero inventore facilis totam?</p>
        </div>
        <div class="item">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates magni nesciunt excepturi
              praesentium eligendi vitae illum.
            </p>
          </div>
          <div class="item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis odit, accusantium eligendi,
              perspiciatis ad voluptatum similique quasi molestiae corrupti et at!
            </p>
          </div>
          <div class="item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, qui? Eligendi, saepe dicta.
            </p>
          </div>
    </div>
</body>
</html>
```
<br>

- CSS
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: grid; /*display: grid é utilizado para definir o grid layout no container */
    grid-template-columns: repeat(3, 1fr); /* grid-template-columns é utilizado para definir as colunas do grid - podemos utilizar % e fr (frame: parte da tela que você quer que o elemento ocupe 1fr 1fr 1fr), também temos o repeat usado para repetir as colunas, o primeiro valor é o número de colunas e o segundo a medida que o elemento irá ocupar da tela*/
    /*row-gap: ;  espaçamento entre as linhas*/
    /*column-gap: ; espaçamento entre as colunas*/
    gap: 10px 15px; /* espaçamento geral -  primeiro valor espaço entre as linhas e o segundo entre as colunas*/
    /*grid-template-rows: repeat(3, 1fr);  grid-template-rows é utilizado para definir as linhas do grid*/
    grid-auto-rows: minmax(210px, 100%); /* aqui definimos o tamanho das linhas*/ 
    /* com o minmax()  podemos definir o tamanho mínimo e o tamanho máximo do item*/
}

.item {
    border: 2px solid black;
    background-color: white;
    font-size: 30px;
    padding: 10px;
}
```

## Exercício 1

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Grid Layout</title>
</head>
<body>
    <div class="container">
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi iusto consequuntur, dolorem labore pariatur animi veniam!</p>
        </div>
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi temporibus doloribus quae reprehenderit sed, sit molestias soluta fuga nobis, corporis omnis?</p>
        </div>
        <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero inventore facilis totam?</p>
        </div>
        <div class="item">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates magni nesciunt excepturi
              praesentium eligendi vitae illum.
            </p>
          </div>
          <div class="item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis odit, accusantium eligendi,
              perspiciatis ad voluptatum similique quasi molestiae corrupti et at!
            </p>
          </div>
          <div class="item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, qui? Eligendi, saepe dicta.
            </p>
          </div>
    </div>
</body>
</html>
```
<br>

- CSS

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr; 
    gap: 10px 15px; 
    grid-auto-rows: minmax(310px, auto); 
}

.item {
    border: 2px solid black;
    background-color: white;
    font-size: 30px;
    padding: 10px;
}
```
<br>

## Manipulando linhas e colunas

- ## EXEMPLO

- HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Grid Layout</title>
</head>
<body>
    <div class="container">
        <div class="item item1">
            <p>ITEM 1</p>
        </div>
        <div class="item item2">
            <p>ITEM 2</p>
        </div>
        <div class="item item3">
            <p>ITEM 3</p>
        </div>
        <div class="item item4">
            <p>
              ITEM 4
            </p>
          </div>
          <div class="item item5">
            <p>
              ITEM 5
            </p>
          </div>
          <div class="item item6">
            <p>
              ITEM 6
            </p>
          </div>
          <div class="item item7">
            <p>
              ITEM 7
            </p>
          </div>
          <div class="item item8">
            <p>
              ITEM 8
            </p>
          </div>
          <div class="item item9">
            <p>
              ITEM 9
            </p>
          </div>
    </div>
</body>
</html>
```
<br>

- CSS
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(80px, auto); 
    gap: 10px 15px; 

    /*Aqui uma forma de desenhar o layout basta colocar aonde cada item irá ficar e quanto de espaço irá ocupar  */
    grid-template-areas:  
        "item1 item1 item1"
        "item2 item2 item3"
        "item2 item2 item4"
        "item5 item5 item5"
        "item5 item5 item5"
        "item6 item7 item7"
        "item8 item7 item7"
        "item9 item9 item9";
}

.item {
    border: 2px solid black;
    background-color: white;
    font-size: 30px;
    padding: 10px;
}

.item1 {
    /*  grid-column: 1/4;  utilizado para definir o tamanho da coluna, o número 1 representa a linha 1 e o 4 a linha 4 (verticais)  ou seja o item irá ocupar todo o espaço disponível*/
     /* grid-row: 2/4;  grid-row é basicamente a mesma coisa que o grid-column mas agora as linhas estão na horizontal ou seja o item6 irá ocupar da linha 4 até a linha 6 na horizontal*/

     grid-area: item1; /* e aqui em cada item que faz parte do grid associamos os itens a sua classe*/
}

.item2 {
    grid-area: item2;
}

.item3{
    grid-area: item3;
}

.item4{
    grid-area: item4;
}

.item5{
    grid-area: item5;
}

.item6{
    grid-area: item6;
}

.item7 {
    grid-area: item7;
}

.item8{
    grid-area: item8;
}

.item9 {
    grid-area: item9;
}
```
<br>

- ## Exercício 2


-   HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Grid Layout</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <p>HEADER</p>
        </header>
        <section class="main-content">
            <div class="item item1">
                <p>ITEM1</p>
              </div>
              <div class="item item2">
                <p>ITEM2</p>
              </div>
              <div class="item item3">
                <p>ITEM3</p>
              </div>
              <div class="item item4">
                <p>ITEM4</p>
              </div>
              <div class="item item5">
                <p>ITEM5</p>
              </div>
              <div class="item item6">
                <p>ITEM6</p>
              </div>
        </section>
          <footer class="footer">
              <p>FOOTER</p>
          </footer>
    </div>
</body>
</html>
```
<br>

-   CSS
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    background-color: darkgray;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.item {
    border: 2px solid black;
    background-color: white;
}

.header , .footer{
    background-color: white;
    width: 100%;
    height: 60px;
    border: 2px solid black;
}

.main-content{
    flex: 1 0 auto;
    padding: 10px;
    display: grid;
    /*aqui definmos 3 colunas ocupando 1 fr */
    grid-template-columns: repeat(3, 1fr); 

    /*aqui definimos o tamanho minimo e máximo das linhas do grid */
    grid-auto-rows: minmax(100px, auto); 

    /* aqui posicionamos os itens como quisermos */
    grid-template-areas: 
        "item1 item2 item3"
        "item4 item4 item4"
        "item5 item5 item6";
    gap: 5px;
}

/* aqui associamos as classes aos itens grid */
.item1 {
    grid-area: item1;
    min-width: 250px;
  }
  .item2 {
    grid-area: item2;
    min-width: 250px;
  }
  .item3 {
    grid-area: item3;
    min-width: 250px;
  }
  .item4 {
    grid-area: item4;
  }
  .item5 {
    grid-area: item5;
    min-width: 350px;
  }
  .item6 {
    grid-area: item6;
    min-width: 250px;
  }

  /* aqui adicionamos uma mudança na responsividade quando a largura máxima da tela for de 780px os itens irão ficar empilhados em coluna*/
  @media (max-width: 780px) {
      .main-content{
          grid-template-areas: 
                "item1 item1 item1"
                "item2 item2 item2"
                "item3 item3 item3"
                "item4 item4 item4"
                "item5 item5 item6"; 
      }
  }

  /* aqui adicionamos uma mudança na responsividade quando a largura máxima da tela for de 630px*/
  @media (max-width: 630px) {
    .main-content{
        grid-template-areas: 
              "item1 item1 item1"
              "item2 item2 item2"
              "item3 item3 item3"
              "item4 item4 item4"
              "item5 item5 item5"
              "item6 item6 item6"; 
    }
}

/* aqui adicionamos uma mudança na responsividade quando a largura máxima da tela for de 360px alterar a largura minima do item5*/
@media (max-width: 360px) {
    .item5{
        min-width: auto;
    }
}
```
<hr>
<br>

- ## EXERCÍCIO FINAL GRID + FLEX

-   HTML
```
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Exercício Final - GRID + FLEXBOX</title>
</head>

<body>
    <div class="container">
        <header class="header">
            <img class="logoNavBar" src="img/logo-onebitcode.svg" alt="logoNavBar">
            <nav class="headerBtnGroup">
                <button class="navBtn">Login</button>
                <button class="navBtn">Registro</button>
                <button class="navBtn">FAQ</button>
            </nav>
        </header>
        <p class="sectionTitle" id="backToTop">BEM VINDO A ONEBITSPORTS!</p>
        <p class="sectionDescription">Aqui é onde você encontra todos os itens mais novos e modernos do seu esporte
            preferido.</p>

        <section class="gridContainer">
            <div class="mainContent">
                <div class="categoryCard">
                    <img src="img/boxe.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">BOXE</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                        vitae consequuntur magni doloremque omnis aut provident nobis ratione nihil dolores.</p>
                </div>
                <div class="categoryCard">
                    <img src="img/crossfit.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">CROSSFIT</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni
                        vel consectetur mollitia ratione possimus quasi fugiat adipisci nobis ea tempora!</p>
                </div>
                <div class="categoryCard">
                    <img src="img/natacao.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">NATAÇÃO</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/roupas.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">ROUPAS</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/basquete.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">BASQUETE</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/corrida.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">CORRIDA</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/surf.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">SURF</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/trilha.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">TRILHA</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
                <div class="categoryCard">
                    <img src="img/tenis.jpg" alt="mainCardImg" class="mainCardImg">
                    <p class="mainCategoryCardTitle">TÊNIS</p>
                    <p class="mainCategoryCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae voluptatem ipsa dicta, facere dolores reiciendis facilis beatae corporis atque itaque!
                    </p>
                </div>
            </div>
            <div class="sidebarContent">
                <p>CATEGORIAS EXTRAS</p>
                <div class="sidebarCard">
                    <img src="img/bicicletas.jpg" alt="sidebarCardImg" class="sidebarCardImg">
                    <p class="sidebarCardTitle">BICICLETAS</p>
                </div>
                <div class="sidebarCard">
                    <img src="img/esportesNaNeve.jpg" alt="sidebarCardImg" class="sidebarCardImg">
                    <p class="sidebarCardTitle">ESPORTES DE FRIO</p>
                </div>
                <div class="sidebarCard">
                    <img src="img/skate.jpg" alt="sidebarCardImg" class="sidebarCardImg">
                    <p class="sidebarCardTitle">SKATE</p>
                </div>
                <div class="sidebarCard">
                    <img src="img/futebolAmericano.jpg" alt="sidebarCardImg" class="sidebarCardImg">
                    <p class="sidebarCardTitle">FUTEBOL AMERICANO</p>
                </div>
                <div class="sidebarCard">
                    <img src="img/yoga.jpg" alt="sidebarCardImg" class="sidebarCardImg">
                    <p class="sidebarCardTitle">YOGA</p>
                </div>
            </div>
        </section>
        <footer class="footer">
            <img src="img/logo-onebitcode.svg" alt="logo-footer" class="logoFooter">
            <a href="#backToTop" class="footerAnchor">VOLTAR PARA O TOPO</a>
        </footer>
    </div>
</body>
</html>
```
<br>

-   CSS
```
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #292929;
  min-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
  gap: 8px 15px;
}

.logoNavBar {
  width: 180px;
}

.headerBtnGroup {
  display: flex;
  gap: 15px;
}

.navBtn {
  border: 2px solid transparent;
  color: white;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  padding: 6px;
  transition: 0.4s;
}

.navBtn:hover {
  border-bottom: 2px solid black;
}

.sectionTitle {
  text-align: center;
  font-size: 26px;
  padding-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.sectionDescription {
  text-align: center;
  color: #383838;
}

.gridContainer {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "mainContent sideBarContent";
  padding: 20px;
  flex: 1 0 auto;
}

.mainContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  grid-area: "mainContent";
}

.categoryCard {
  width: 280px;
  height: 380px;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
}

.categoryCard:hover {
  border-color: black;
}

.mainCardImg {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}

.mainCategoryCardTitle {
  font-family: Arial, Helvetica, sans-serif;
  padding: 6px;
}

.mainCategoryCardDescription {
  padding: 6px;
}

.sidebarContent {
  background-color: #383838;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: "sidebarContent";
  gap: 20px;
}

.sidebarCard {
  width: 75%;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
}

.sidebarCardImg {
  width: 100%;
  border-radius: 10px;
}

.sidebarCardTitle {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 10px;
}

.sidebarCard:hover {
  border-color: gainsboro;
}

.footer {
  background-color: #292929;
  min-height: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 15px;
}

.logoFooter {
  width: 180px;
}

.footerAnchor {
  color: white;
  text-decoration: none;
}

@media (max-width: 630px) {
  .gridContainer {
    grid-template-areas: "mainContent" "sidebarContent";
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .sidebarContent {
    min-width: 280px;
  }

  .footerAnchor {
    font-size: 19px;
  }
}

@media (max-width: 463px) {
  .header,
  .footer {
    justify-content: center;
  }
}
```