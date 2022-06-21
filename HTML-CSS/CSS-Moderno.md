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