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

-   Para ver a documentação de Tipografia completa [Bootstrap Tipografia](https://getbootstrap.com/docs/5.1/content/typography/)
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

-   Para ver a documentação de Botões completa [Bootstrap Botões](https://getbootstrap.com/docs/5.1/components/buttons/)
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

-   Para ver a documentação de Cards completa [Bootstrap Cards](https://getbootstrap.com/docs/5.1/components/card/)
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
<br>

-   Para ver a documentação de Grid completa [Bootstrap Grid](https://getbootstrap.com/docs/5.1/layout/grid/)
<hr>
<br>

## Imagens e outros elementos
<br>

-   Imagens

    - Classe container é utilizada em divs, sections
    - Para ter uma imagem responsiva utilizamos a classe img-fluid
    - e para imagem pequena de thumbnail utilizamos img-thumbnail
```
 <!--Utilizamos a classe container em uma div,section -->

    <div class="container img-class">
        <!-- Utilizamos a classe img-fluid em uma imagem para ela se tornar responsiva ao tamanho da tela-->
        <img src="./img/praia.jpg" class="img-fluid" alt="...">
    </div>
    
    <!-- Aqui utilizamos a class img-thumbnail para imagens pequenas-->

    <img src="./img/beach-g15be4fa32_640.jpg" class="img-thumbnail"alt="">
```
<br>

-   Espaçamentos
    -   A classe container-fluid faz o container ocupar toda a largura da tela
    -   py é o padding vertical vai de 1 a 5 e o px é o padding horizontal
    -   p é o padding geral, pt padding-top, pb padding-bottom, ps padding-start, pe padding-end
    -   my é a margem vertical e mx margem horizontal e m a margem geral
    -   mb margin-bottom, mt margin-top, ms margin-start e me margin-end

```
    <div class="container-fluid px-5">
        <h1>Hello World</h1>
    </div>
```
<br>

-   Display
    -   d-flex define o display flex, d-block define o display como block e o d-none oculta o elemento
```
    <div class="container-fluid">
        <button class="d-block">Olá</button>
        <button class="d-block">Tchau</button>
        <button class="d-none">Até mais</button>
    </div>
```
-   Documentação [Imagens Bootstrap](https://getbootstrap.com/docs/5.1/content/images/)
<hr>
<br>

## Formulários
<br>

-   Formulário comum
```
<form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
```
<br>

-   Tamanho dos forms
    -   Alteramos o tamanho do input com o form-control lg é o grande e sm o pequeno
```
<div class="container pt-5">
    <input class="form-control form-control-lg" type="text" placeholder="Form grande" aria-label=".form-control-lg example">
    <input class="form-control" type="text" placeholder="Form padrão" aria-label="default input example">
    <input class="form-control form-control-sm" type="text" placeholder="Form pequeno" aria-label=".form-control-sm example">
</div>
```
<br>

-   Input para upload de arquivo
```
<div class="container pt-5">
    <div class="mb-3">
        <label for="formFile" class="form-label">Upload Input</label>
        <input class="form-control" type="file" id="formFile">
    </div>
</div>
```
<br>

-   Input para selecionar cor
```
<div class="container">
    <label for="exampleColorInput" class="form-label">Color picker</label>
    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#FF0043" title="Choose your color">
</div>
```
<br>

-   Validação Formulário
```
<form class="row g-2 needs-validation" novalidate>
    <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Primeiro Nome</label>
        <input type="text" class="form-control" id="validationCustom01" placeholder="Coloque seu nome"  required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Sobrenome</label>
        <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Nome de usuário</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend" style="height: 100%;">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
                Por favor escolha um nome de usuário
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Cidade</label>
        <input type="text" class="form-control" id="validationCustom03" required>
        <div class="invalid-feedback">
                Por favor selecione uma cidade válida.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Estado</label>
        <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Escolha...</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Minas Gerais</option>
        </select>
        <div class="invalid-feedback">
            Por favor selecione um estado válido
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom05" class="form-label">CEP</label>
        <input type="text" class="form-control" id="validationCustom05" required>
        <div class="invalid-feedback">
            Plor favor coloque um CEP válido.
        </div>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
                Concordo com os termos e condições
            </label>
            <div class="invalid-feedback">
                Você deve confirmar antes de enviar
            </div>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Enviar</button>
    </div>
</form>
```
-    Documentação [Forms Bootstrap](https://getbootstrap.com/docs/5.1/forms/overview/)
<hr>
<br>



## Manipulando Bootstrap com Sass
<br>

-   Primeiro instalamos o bootstrap via npm, no terminal digite este comando
```
    npm install bootstrap
```

- após instalar adicionamos os links do arquivo do bootstrap instalado no html
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Link Bootstrap-->
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
    <title>Bootstrap com Sass</title>
</head>
<body>
    <div class="container bg-primary">
        <h1>Hello World</h1>
    </div>

   <!--Script do Bootstrap-->
   <script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>
</html>
```
-   para manipular o bootstrap com o sass, o mais comum é manipular as variáveis no arquivo na pasta bootstrap/scss/_variables.scss onde estão todas as cores, estilos, vamos alterar alguma cor no exemplo a primary.
-   Utilizamos este comando para verificar as alterações e compilar o scss para css
```
sass --watch node_modules/bootstrap/scss:node_modules/bootstrap/dist/css
```
<hr>
<br>

## Exercício Criando uma Landing Page
<br>

```
-   index.html

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Link Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!--Style CSS-->
    <link rel="stylesheet" href="./css/style.css">

    <!--Favicon-->
    <link rel="shortcut icon" href="./img/FAVICON-SPACEX.png" type="image/x-icon">

    <title>Rumo a marte - OneBitX</title>

</head>

<body class="py-5">
    <div class="container px-4 container-1">

        <!--Logo-->
        <div class="text-center">
            <img class="img-fluid topLogo mt-4 mb-3" src="./img/logoOneBitDark.png" alt="LPLogo">
        </div>

        <!--Primeira divisão do form-->
        <p class="paragraph">
            1 - Qual o seu nome ?
        </p>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Primeiro Nome:</span>
            <input type="text" class="form-control" placeholder="Digite aqui:" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Segundo Nome:</span>
            <input type="text" class="form-control" placeholder="Digite aqui:" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <!--Segunda divisão do form-->
        <p class="mt-3 paragraph">2 - Qual o seu gênero?</p>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Homem
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                Mulher
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label" for="flexRadioDefault3">
                Prefiro não informar
            </label>
        </div>

        <!--Terceira divisão do form-->
        <p class="mt-3 paragraph">3 - Marque os treinamentos que você fez: </p>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Treinamento básico de astronauta</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2">
            <label class="form-check-label" for="flexSwitchCheckDefault2">Treinamento físico básico</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3">
            <label class="form-check-label" for="flexSwitchCheckDefault3">Treinamento avançado de astronauta</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault4">
            <label class="form-check-label" for="flexSwitchCheckDefault4">Treinamento físico intenso</label>
        </div>

        <!--Quarta divisão do form-->
        <p class="mt-2 paragraph">4 - Quais você acha que são suas qualidades?</p>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option1" id="inlineCheckbox1">
            <label class="form-check-label" for="inlineCheckbox1">
                Proativo
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option2" id="inlineCheckbox2">
            <label class="form-check-label" for="inlineCheckbox2">
                Resistente
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option3" id="inlineCheckbox3">
            <label class="form-check-label" for="inlineCheckbox3">
                Não vomito fácil
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option4" id="inlineCheckbox4">
            <label class="form-check-label" for="inlineCheckbox4">
                Não temo marcianos
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="option5" id="inlineCheckbox5">
            <label class="form-check-label" for="inlineCheckbox5">
                Já vi todos os Star Wars
            </label>
        </div>

        <!--Quinto elemento do form-->
        <div class="text-center">
            <button class="btn btn-outline-danger  btn-send mb-3 mt-2" type="button">Enviar</button>
        </div>
    </div>

    <!--Footer da página-->
    <div class="container text-center footer">
        <p>Feito por Marcelo Braz &copy;</p>
    </div>

    <!--Script do Bootstrap-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</body>
</html>
```

```
-   sass/others/colors.scss

// Aqui declaramos as variáveis
$background-color: #131212f1;
$button-color: #ff0043;
```

```
-   sass/style.scss
// Aqui importamos os estilos scss para converter para css
@import './others/colors.scss';

@import './others/page.scss';
```

```
-   sass/others/page.scss

// Aqui declaramos os estilos da página
* {
    padding: 0px;
    margin: 0px;
}

body {
    background-image: url("../img/backgroundLp.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    color: white;
}

// Container onde está tudo
.container-1 {
    background-color: $background-color;
    width: 450px;
    height: auto;
}

.topLogo{
    width: 185px;
}

.paragraph {
    margin: 8px 0px;
}

// Botão
.btn-send{
    color: $button-color;
    border: 1px solid $button-color;

    &:hover{
        background-color: $button-color;
        color: white;
    }
}

.footer {
    margin-top: 30px;
    margin-bottom: -30px;
}

// Responsividade
@media (max-width:  485px) {
    .container-1{
        width: 100%;
    }
}
```

<hr>
<br>

## Icones Bootstrap
<br>

-   Temos duas formas de instalar os icones via link no site [](https://icons.getbootstrap.com/#install) e via npm no terminal com o comando
```
    npm i bootstrap-icons
```
-   Também podemos instalar utilizando o link, basta colocar este link na head do seu projeto
```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
```
-   após instalar é só utilizar
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Bootstrap Icons-->
    <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.css">

    <!--Boostrap CSS-->
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">

    <title>Icones do Bootstrap</title>

    <style>
        .bi-xbox{
            color: green;
        }
    </style>

</head>
<body>
    
    <!--Assim utilizamos os icones basta olhar o nome na documentação-->
   <i class="bi bi-xbox"></i>

   <!--Podemos utilizar os icones em títulos, textos, botões-->
    <button class="btn btn-outline-danger">
        <i class="bi bi-instagram"></i>
        Instagram
    </button>
   
    <!--Utilizando icone em títulos-->
    <h1>
        <i class="bi bi-xbox"></i>
        Melhor videogame
    </h1>
</body>
</html>
```
-   Para ver todos os icones disponíveis acesse a [Documentação Bootstrap Icons](https://icons.getbootstrap.com/#icons)
<hr>
<br>
