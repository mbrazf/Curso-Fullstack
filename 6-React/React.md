# React

## Introdução ao React
<br>

-   O que é o React e como funciona
-   Como criar seu primeiro projeto com React
-   O que são components e como utilizá-los
-   O que são estados e como utilizá-los
-   O que é o Lifecycle dos components
-   O que são eventos e como utilizá-los
-   Renderização condicional
-   Listas e chaves
-   Controlled e UnControlled Components
-   Como criar Forms
-   Como os organizar os components
-   Como utilizar Hooks no React
-   Como pensar reativamente

<hr>
<br>

## O que é React
<br>

-   React é "uma biblioteca Javascript declarativa, eficiente e flexível para a criação de interfaces de usuários (UI)",

-   Surgiu em 2011 no Facebook,

-   Características:
    -   É uma biblioteca, não um framework
    -   É baseado em Components
    -   É usado para criar SPAs.  
<br>

-   React é feito com Javascript, então você pode reaproveitar seus conhecimentos.
-   O React é eficiente (Virtual DOM),
-   O React pode ser utilizado para crias APPS mobile com o React Native,
-   React é a biblioteca de criação de interfaces mais popular e é utilizado em grandes empresas:
    -   Facebook
    -   Instagram
    -   WhatsApp
    -   Netflix
    -   DropBox
<hr>
<br>

## O que são Components e porque eles são importantes
<br>

-   O React é uma biblioteca baseada no conceito de components,
-   Os components permitem divir a interface do Usuário em partes independentes e reutilizáveis,  
<hr>

### São como funções Javascript
<br>

-   Aceitam entradas arbitrárias (chamadas props)
-   Retorna Elementos React
<hr>

### Dois Tipos de Components
<br>

-   Função
-   Classe (features extras)
<hr>

### Veja como é definido um Componente de Função
<br>

```
    function Welcome(props) {
    return <h1> Hello, {props.name} </h1>
}
```
<hr>
<br>

## O que é JSX
<br>

-   Um exemplo de código JSX:
```
    const element = <h1 className="title"> Hello world! </h1>;
```

-   Não é apenas HTML nem apenas JS
-   JSX serve para descrever como a nossa User Interface(UI) deve ser ,
-   JSX não é interpretado pelo browser, por este motivo devemos ,utilizar um transpiler (em geral babel) para realizar essa transpilação,
-   Ao contrário do passado, em vez de colocar Javascript em HTML, o JSX nos permite colocar HTML em Javascript.

-   O código que vimos acima após o transpiler se tornará:
```
    const element = React.createElement(
    "h1",
    { className: "title" },
    "Hello World !"
)
```
-   Com esse código preparamos nosso elemento para ser exibido no DOM
<hr>

### Vantagens do JSX
<br>

-   Similaridade com o HTML
-   Melhor integração entre o HTML e o JS
<hr>

### Quem utiliza o JSX?
<br>

-   Preact
-   Inferno
-   React-Native
-   VueJS (Opcional)
<hr>
<br>


