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
