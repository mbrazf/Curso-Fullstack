# Bootstrap

## O que é e como funciona o Bootstrap ?
<br>

-   Frameworkd front-end
-   Facilita e agiliza a criação da parte front-end
-   Ajuda na responsividade do site de maneira fácil, apenas com divs
-   Na versão atual totlamente customizável e simplificado
-   Compatível com uso de outros frameworks (Angular, Vue.js, React.js)
<hr>
<br>

## Instalação do Bootstrap
<br>

-   Inserimos o link css do Bootstrap na head, e o link do js no fim do body e assim instalamos o bootstrap via link.
```
- index.html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link CSS do Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Instalação Bootstrap</title>

</head>
<body>
    
    <h1>Hello, World!</h1>

    <!--Link JS do Bootstrap-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
</body>
</html>
```
- ou podemos instalar pelo npm usando o comando
```
    npm install bootstrap
```
<hr>
<br>

## Tipografia
<br>

```
 <!-- Títulos diretamente pela tag-->

    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>

    <!-- Podemos colocar titulos via classe também-->

    <h1 class="h1">H1</h1>
    <h2 class="h2">H2</h2>
    <h3 class="h3">H3</h3>
    <h4 class="h4">H4</h4>
    <h5 class="h5">H5</h5>
    <h6 class="h6">H6</h6>

    <!---O Display é basicamente um título só que maior-->

    <p class="display-1">Display 1</p>
    <p class="display-2">Display 2</p>
    <p class="display-3">Display 3</p>
    <p class="display-4">Display 4</p>
    <p class="display-5">Display 5</p>
    <p class="display-6">Display 6</p>

    <h1 class="h1">Efeitos em texto</h1>

    <p>Texto em <mark>destaque</mark>.</p>
    <p><del>Um bloco de texto que foi deletado.</del></p>
    <p><s>Texto tratado como não preciso.</s></p>
    <p><ins>Texto adicionado recentemente.</ins></p>
    <p><u>Texto com underline.</u></p>
    <p><small>Texto pequeno.</small></p>
    <p><strong>Texto em negrito</strong></p>
    <p><em>Texto com enfase/itálico.</em></p>

    <hr>

    <h1 class="h1 text-start">Citação no início/esquerda</h1>

    <figure class="text-start">
        <blockquote class="blockquote">
            <p>Bloco de texto citação
        </blockquote>
        <figcaption class="blockquote-footer">
            Alguém famoso <cite title="Source Title">Nome do criador da citação.</cite>
        </figcaption>
    </figure>

    <hr>

    <h1 class="h1 text-center">Citação no centro</h1>

    <figure class="text-center">
        <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
    </figure>

    <hr>

    <h1 class="h1 text-end">Citação no fim/direita</h1>

    <figure class="text-end">
        <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
    </figure>
    <hr>


    <h1 class="h1">Lista sem ordenação</h1>

    <ul class="list-unstyled">
        <li>Isso é uma lista  não-ordenada</li>
        <li>Item1.</li>
        <li>item2.</li>
        <li>Item3.</li>
        <li>Item4:
            <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
            </ul>
        </li>
        <li>This may still come in handy in some situations.</li>
    </ul>


    <h1 class="h1">Lista ordenada</h1>


    <ol class="list">
        <li>Isso é uma lista  ordenada</li>
        <li>Item1.</li>
        <li>item2.</li>
        <li>Item3.</li>
        <li>Item4:
            <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
            </ul>
        </li>
        <li>This may still come in handy in some situations.</li>
    </ul>
```
<hr>
<br>

## Botões

```
 <h1>Botões padrão</h1>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>

    <hr>

    <h1>Botões Outline</h1>

    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>

    <hr>

    <h1>Tamanho dos Botões</h1>

    <button type="button" class="btn btn-primary btn-lg">Botão Grande</button>
    <button type="button" class="btn btn-primary">Botão Normal</button>
    <button type="button" class="btn btn-primary btn-sm">Botão Pequeno</button>
```
<hr>
<br>

## Cards
<br>

```
 <h1>Cards</h1>

    <hr>

    <h1>Card padrão com imagem</h1>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, alias?</p>
            <a href="#" class="btn btn-primary">Link</a>
        </div>
    </div>

    <hr>

    <h1>Card com textos e links</h1>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <h6 class="card-subtitle mb-2 text-muted">Subtitulo do card</h6>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore!</p>
            <a href="#" class="card-link">Link do Card</a>
            <a href="#" class="card-link">Outro Link</a>
        </div>
    </div>

    <hr>

    <h1>Card com Lista</h1>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titulo do card</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, et..</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Item 1</li>
            <li class="list-group-item">item 2</li>
            <li class="list-group-item">Item 3</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Link do Card</a>
            <a href="#" class="card-link">Outro Link</a>
        </div>
    </div>

    <hr>

    <h1>Header e Footer</h1>

    <div class="card">
        <div class="card-header">
            Título
        </div>
        <div class="card-body">
            <h5 class="card-title">Título 2</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, blanditiis!.</p>
            <a href="#" class="btn btn-primary">Link</a>
        </div>
    </div>

    <hr>

    <h1>Card simples com imagem</h1>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolores?.</p>
        </div>
    </div>

    <hr>

    <h1>Navegação entre cards</h1>

    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="true" href="#">Link Ativo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Desativado</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Título</h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, totam!</p>
            <a href="#" class="btn btn-primary">Link</a>
        </div>
    </div>

    <hr>

    <h1>Card com imagem</h1>

    <div class="card mb-3">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat?</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
```
<hr>
<br>

## Grid
<br>

-   O grid ele é dividido por divs, que tem linhas , colunas e gutters.
-   Você pode deixar as colunas de forma automática, como é o caso dessas, que elas ocupam o espaço que elas tem, essas aqui cada uma com 6, essa aqui cada uma com 4, etc..
```
    <h1>Responsividade do grid</h1>
    <p>Grid com uma linha e 12 colunas</p>
    
    <div class="row">
        <div class="col coll">1</div>
        <div class="col coll">2</div>
        <div class="col coll">3</div>
        <div class="col coll">4</div>
        <div class="col coll">5</div>
        <div class="col coll">6</div>
        <div class="col coll">7</div>
        <div class="col coll">8</div>
        <div class="col coll">9</div>
        <div class="col coll">10</div>
        <div class="col coll">11</div>
        <div class="col coll">12</div>
    </div>
```

-   Assim como você pode fazer para deixar um tamanho automático, fixo de 6, a que está embaixo tem de 5, por ai vai.
```
 <h1>Uma coluna com tamanho fixo</h1>
    <p>classe col-6 altera o tamanho da coluna de 1 a 12</p>

    <div class="row">
        <div class="col coll">
            1 of 3
        </div>
        <div class="col-6 coll">
            2 of 3 (Fixo de 6)
        </div>
        <div class="col coll">
            3 of 3
        </div>
    </div>
    <div class="row">
        <div class="col coll">
            1 of 3
        </div>
        <div class="col-5 coll">
            2 of 3 (Fixo de 5)
        </div>
        <div class="col coll">
            3 of 3
        </div>
    </div>
```

-   No quarto exemplo temos breakpoints, que são pontos onde o elemento vira 100% para celular em determinado momento.
```
 <h1>Breakpoints</h1>
    <p>Duas linhas, a primeira com 4 colunas com breakpoints sm/pequeno e a outra linha com 2 colunas com breakpoint md/medio com tamanho fixo de 8 e 4</p>

    <div class="row">
        <div class="col-sm coll">col BreakPoint pequeno</div>
        <div class="col-sm coll">col BreakPoint pequeno</div>
        <div class="col-sm coll">col BreakPoint pequeno</div>
        <div class="col-sm coll">col BreakPoint pequeno</div>
    </div>
    <div class="row">
        <div class="col-md-8 coll">col-8 BreakPoint Médio</div>
        <div class="col-md-4 coll">col-4 BreakPoint Médio</div>
    </div>
```
-   E os sites são atualmente feitos com os grids, os grids que fazem eles serem 100% responsivo e também organizados.