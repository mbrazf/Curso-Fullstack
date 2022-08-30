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


## Hello World com React
<br>

- Primeiro criamos um html padrão e importamos os links do React via CDN,
- Depois criamos um container com o id root onde será inserido os elementos do React,
- E criamos um arquivo JS e importamos na página para adicionar os códigos.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World - React</title>
</head>
<body>
    <!-- Tudo que for criado com React fica automaticamente dentro do nó/container que tiver o id root-->
    <div id="root">

    </div>
    
    <!-- Adicionando React via link CDN-->
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script src="helloWorld.js"></script>
</body>
</html>
```
-   Aqui o JS com a criação dos elementos React

```
// Aqui utilizamos esse método responsável por atualizar o DOM da página, e exibir os elementos na tela
ReactDOM.render(

    //  Aqui criamos um elemento para ser injetado no DOM utilizando o React.createElement
    //  O primeiro item é o elemento desejado no exemplo um h1
    //  O segundo é alguma propriedade como id, classe ou  null se não quiser passar nada
    //  O terceiro item é o conteúdo, texto que será inserido no h1
    React.createElement(
        'h1',
        null,
        'Hello, World'
    ),

    //  E aqui selecionamos a div com o id root onde será inserido os elementos React
    document.getElementById("root")
)
```

## Como o React atualiza as views
<br>

### DOM - Document Object Model
<br>

-   É um objeto/interface criado pelo Browser que representa a estrutura do nosso documento HTML e que nos dá meios para interagir com ele (usamos em geral o Javascript para fazer isso).

-   Um exemplo de interação com o DOM:
```
    var myBtn = document.getElementById('btn');

    myBtn.addEventListener('click', function(event) {
        alert("Botão pressionado");
    }, false);
```
<hr>

### Virtual DOM
<br>

-   É uma representação em Javascript do DOM verdadeiro. Quando alterações e eventos acontecem, primeiro o React atualiza o Virtual DOM, analisa as mudanças e o que precisa ser atualizado no DOM , e depois realiza isso conciliando o Virtual DOM e o DOM.
<hr>

### Porque o React usa o Virtual DOM ?
<br>

-   Acessar o DOM é mais lento que as operações em Javascript
-   O Virtual DOM automaticamente encontra a maneira mais economica de atualizar o DOM (atualizando só os elementos necessários)
<hr>

### Entendendo os elementos
<br>

-   Os menores blocos do React são os elements, através deles é que descrevemos o que vai aparecer na nossa tela.
```
    const element = <h1>Hello, World</h1>;
```

-   Diferentes dos elementos do DOM , os elementos do React são objetos simples e "baratos" de criar
-   O Virtual DOM é o responsável por atualizar o DOM e exibir esses elementos na tela
-   Para renderizar um elementos, primeiro escolhemos um nó do DOM, exemplo:
```
    <div id="root"></div>
```

-   Tudo dentro desse nó será atualizado pelo Virtual DOM
-   Agora para inserirmos nosso elemento na tela, podemos rodar :
```
    const element = <h1>Hello, World </h1>;
    ReactDOM.render(element, document.getElementById('root'));
```
<hr>
<br>

## Create React App
<br>

-   Você precisar ter node e o npm instalado,
basta você rodar o seguinte comando na pasta desejada,
ele irá instalar tudo o que for necessário para fazer um projeto com React.
```
    npx create-react-app nome-desejado
```
-   Após instalar tudo, para abrir o projeto react no navegador, basta acessar a pasta onde foi criado o projeto e utilizar o comando:
```
    npm start
```
<hr>

## Criando, importando e exportando um component
<br>

-   Exemplo de como é criado um component:
```
// Component de função

function HelloWorld(){
    return <h1>Hello World!</h1>;
}

// e aqui exportamos o component para ser utilizado em outro arquivo

export default HelloWorld;
```
-   Também podemos criar um component com arrow function
```
const HelloWorld = () => {
    return <h1>Hello World!</h1>;
}

// e aqui exportamos o component para ser utilizado em outro arquivo

export default HelloWorld;
```

-   Também podemos criar um component de classe
```
class HelloWorld extends React.Component {
    render ( ) {
        return <h1>Hello World!</h1>;
    }
}

// e aqui exportamos o component para ser utilizado em outro arquivo

export default HelloWorld;
```

- E no component App no App.js é onde tudo é inserido
```
// Aqui importamos os recursos a serem utilizados
// E importamos os components criados

import HelloWorld from "./Hello";

// Exemplo de como injetar um componente na página, vc passa o nome do component de função criado, como uma tag <HelloWorld/>

function App() {
  return (
    <div>
        <HelloWorld/>
    </div>
  );
}

// Aqui exportamos os components
export default App;
```
<hr>
<br>

### Agrupando components
<br>

-   Criamos dentro da pasta src uma pasta components onde irá conter todos os components criados
-   e dentro da pasta components criamos uma outra pasta planets e dentro dela uma pasta planet.

```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos o estilo css criado
import "./style.css"

const Planet = () => {
    return (
        <div>
            <h4>Mercúrio</h4>
            <p>Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.</p>
            <img className="gray-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="Imagem do Planeta mercúrio" />
        </div>
    )
}

export default Planet;
```
-   Criamos um estilo para esse component
```
-   planet/style.css

/* Aqui criamos um arquivo css com os estilos */

.gray-img {
    width: 300px;
    filter: grayscale(100%);
}
```
-   E aqui no component Planets inserimos os  components Planet
```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados, o fragment é semelhante a uma div mas não tem um significado
import {Fragment} from 'react'

import Planet from './planet';

// Todos os components só podem retornar um nó , então o ideal é sempre colocar os components dentro de uma div , ou um fragment

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet/>
            <Planet/>
            <Planet/>
        </Fragment>
    )
}

export default Planets;
```
-   E inserimos tudo dentro do App.js
```
-   App.js


// Aqui no App.js onde são inseridos todos os elementos e componentes


// Aqui importamos os components criados
import Planets from "./components/planets";

// E aqui no component App dentro do return  é onde todos os elementos e componentes são inseridos
function App() {
  return (
    <div>
      <Planets/>
    </div>
  );
}

export default App;
```
<hr>
<br>

### Dividindo e reutilizando components
<br>

-   Dentro da pasta src/components criamos uma pasta shared que é onde todos os components que serão reutilizados são colocados e dentro de shared criamos a pasta gray_img com o component da imagem
-   Aqui retiramos a imagem do component Planet e criamos um component só da imagem e na imagem adicionamos uma classe para utilizar o css com o className
```
-   src/components/shared/gray_img/index.js

// Aqui criamos um component individual para a imagem 

// importamos o css
import "./style.css"


// criamos o component com a imagem
const GrayImg = () => {
    return (
        <img className="gray-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="Imagem do Planeta Mercúrio" />
    )
}

export default GrayImg;
```
-   Importamos o css do component
```
-   src/components/shared/gray_img/style.css


.gray-img {
    width: 300px;
    filter: grayscale(100%);
}
```
-   E aqui no component Planet inserimos o component da imagem
```

-   src/components/planets/planet/index.js



// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos o component da imagem
import GrayImg from "../../shared/gray_img";

// E inserimos o component abaixo dos textos

const Planet = () => {
    return (
        <div>
            <h4>Mercúrio</h4>
            <p>Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.</p>
            <GrayImg/>
        </div>
    )
}

export default Planet;
```
<hr>

## Conhecendo as Props
<br>

### O que são Props (Propriedades) e funções puras
<br>

### Uma função pura
<br>

```
    function sum(a, b){
        return a + b
    }
```
-   A função recebe duas propriedades a e b
-   A função não altera o valor das entradas
-   Sempre retorna o mesmo resultado para os mesmos tipos de entradas
<hr>

### Uma função impura
<br>

```
    function withdraw(account, amount){
        account.total -= amount;
    }
```
-   A função altera o valor de sua entrada
<br>

### Única regra estrita do React
<br>

-   Todos os components React tem que agir como funções puras em relação ao seus props.
-   Utilizando o exemplo acima:
```
-   gray_img/index.js

// Aqui criamos um component para a imagem 

// importamos o css
import "./style.css"


// criamos o component com a imagem, ele recebe como parâmetro as props
// e na imagem passamos uma prop que irá conter a url da imagem.
const GrayImg = (props) => {
    return (
        <img className="gray-img" src={props.img_url} alt="Imagem do Planeta"/>
    )
}

export default GrayImg;
```

-   Aqui no component Planet ele também recebe as props, e em cada elemento passamos as props que esperamos receber props.name, props.description e props.img_url
```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas


// Aqui importamos o component da imagem
import GrayImg from "../../shared/gray_img";

// Aqui o component Planet recebe as props como parâmetro, e nos elementos e components passamos o nome da prop que esperamos receber
const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;
```

-   E aqui no component Planets que irá conter os components Planet,  em cada component Planet presente nós passamos os valores das props name, description e img_url
```
-   planets/index.js



// Aqui importamos components e recursos que serão utilizados, o fragment é semelhante a uma div mas não tem um significado
import {Fragment} from 'react'

import Planet from './planet';

// Todos os components só podem retornar um nó , então o ideal é sempre colocar os components dentro de uma div , ou um fragment

// Aqui na chamada dos components passamos os valores das props name, description e img_url do outro component
const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet name="Mercúrio" description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar." img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"/>
        </Fragment>
    )
}

export default Planets;
```
<hr>

### Exercício Props

-   Aqui criamos o component que irá conter a descrição dos planetas
```
-   shared/description_with_link/index.js


// Criamos o component que irá conter a descrição do planeta

import { Fragment } from "react";


// O component recebe props, e nos elementos passamos as props que esperamos receber do outro component
const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <p>
                <a href={props.link}>{props.link}</a>
            </p>
        </Fragment>

    )
}

export default DescriptionWithLink;
```

-   Aqui adicionamos as props que o component irá receber
```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas


// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Aqui o component Planet recebe as props como parâmetro, e nos elementos e components passamos o nome da prop que esperamos receber
const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;
```

-   E aqui passamos os valores das props na chamada do component Planet
```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados, o fragment é semelhante a uma div mas não tem um significado
import { Fragment } from "react";

import Planet from "./planet";


// Aqui na chamada dos components passamos os valores das props name, description ,img_url e link do outro component
const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      />

      <Planet
        name="Saturno"
        description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
      />

       <Planet
        name="Júpiter"
        description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
        link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
      />
    </Fragment>
  );
};

export default Planets;
```






