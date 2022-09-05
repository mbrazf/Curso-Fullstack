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
<hr>
<br>

## Eventos no React
<br>

-   Basicamente são bem parecidos com os eventos do JS
-   Exemplo:
```
// Aqui declaramos uma funçõa qualquer

const showMessage = () => {
  console.log("Meu primeiro evento")
}
```
-   E aqui adicionamos o elemento button com o evento onClick, basta passar o nome da função nas chaves do evento.
```
 <button onClick={showMessage}>Exibir Mensagem</button>
```
<hr>
<br>

### Passando um evento como parâmetro para outro component
<br>

-   Exemplo:
```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados
import { Fragment } from "react";
import Planet from "./planet";


// Aqui criamos uma função que recebe o name como parâmetro para exibir um console.log() com uma mensagem e o nome do planeta

const clickOnPlanet = (name) => {
  console.log(`Um Clique no planeta: ${name}`)
}


//  no Component Planet passamos a função como prop para outro component com clickOnPlanet={clickOnPlanet}

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button>Exibir Mensagem</button>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        clickOnPlanet={clickOnPlanet}
      />

      <Planet
        name="Saturno"
        description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
        clickOnPlanet={clickOnPlanet}
      />

       <Planet
        name="Júpiter"
        description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
        link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
        clickOnPlanet={clickOnPlanet}
      />
    </Fragment>
  );
};

export default Planets;
```

```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas


// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// na div adicionamos o evento onClick que chama a função passada do outro component Planets
// ao utilizar parâmetros o evento será executado instantaneamente, quando você não quiser chamar o método na hora e chamar somente quando for clicado basta colocar uma função anônima antes da chamada

const Planet = (props) => {
    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;
```
<hr>
<br>

## Renderização Condicional
<br>

-   É uma forma de exibir um component quando uma condição for verdadeira
```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Aqui iremos utilizar o if else para verificar,
//  Se no component houver a propriedade title_with_underline será exibido o texto riscado se não será exibido normalmente
// E no return adicionamos a variável title que exibe o texto

// e no component GrayImg passamos uma prop gray para outro component

const Planet = (props) => {
    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else 
        title = <h4>{props.name}</h4>

    return (
        <div >
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
        </div>
    )
}

export default Planet;
```

```
-   description_with_link/index.js

// Criamos o component que irá conter a descrição do planeta
import { Fragment } from "react";


// O component recebe props, e nos elementos passamos as props que esperamos receber do outro component

// Aqui utilizamos a renderização condicional, verificamos se o elemento/component contém a props.link, se houver exibe o component normalmente com o link, se não exibe o component sem o link e com o texto underline

const DescriptionWithLink = (props) => {
    if(props.link){
        
        return (
            <Fragment>
                <p>{props.description}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;
```

```
-   gray_img/style.css

// Aqui a classe que deixa a imagem preto e branco
.gray-img {
    width: 300px;
    filter: grayscale(100%);
}

// Aqui adicionamos uma classe para a imagem colorida
.color-img{
    width: 300px;
}
```

```
// Aqui criamos um component para a imagem 

// importamos o css
import "./style.css"


// criamos o component com a imagem, ele recebe como parâmetro as props
// e na imagem chamamos a prop que irá conter a url da imagem.

// Aqui na classe verificamos se algum elemento tiver a props.gray irá aplicar a classe que deixa a imagem preto e branco, se não irá aplicar a classe que deixa a cor da imagem colorida

const GrayImg = (props) => {
    return (
        <img className={props.gray  ? 'gray-img' : 'color-img'} src={props.img_url} alt="Imagem do Planeta"/>
    )
}

export default GrayImg;
```

```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados
import { Fragment } from "react";
import Planet from "./planet";


// E aqui apagamos o link de um dos itens para testar a renderização condicional
//  Aqui passamos as props "title_with_underline={true}" para o texto ser exibido riscado e o "gray={true}" para a imagem ter sua cor alterada para preto e branco.

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button>Exibir Mensagem</button>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        title_with_underline={true}
      />

      <Planet
        name="Saturno"
        description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
        gray={true}
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
<hr>
<br>

### Impedindo o component de renderizar até que uma condição seja atingida
<br>

```
-   description_with_link/index.js


// Criamos o component que irá conter a descrição do planeta

import { Fragment } from "react";


// O component recebe props, e nos elementos passamos as props que esperamos receber do outro component
// E aqui impedimos um component de ser exibido, verificamos se não tiver a prop description iremos retornar null ou seja não irá exibir nada


const DescriptionWithLink = (props) => {

    if(!props.description)
    return null;


    if(props.link){
        return (
            <Fragment>
                <p>{props.description}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;
```
-   No exemplo acima impedimos o component de renderizar porque abaixo não temos a prop description no elemento.

```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados
import { Fragment } from "react";
import Planet from "./planet";


// E aqui apagamos o link de um dos itens para testar a renderização condicional
// e adicionamos a prop title_with_underline como true

// aqui em um dos component removemos a prop description para impedir a renderização do component

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button>Exibir Mensagem</button>
      <hr />
      <Planet
        name="Mercúrio"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        title_with_underline={true}
      />

      <Planet
        name="Saturno"
        description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
        gray={true}
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
<hr>
<br>

### Renderizando Múltiplos Components
<br>

```
-   planet/index.js

// Aqui criamos um component Planet com as informações dos planetas


// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Iremos criar uma variável que irá conter um array e nesse array utilizamos o método map que irá executar uma ação para cada elemento do array, no exemplo iremos criar um item de lista para cada elemento


// E abaixo no return iremos colocar um título e criar uma ul e dentro da ul adicionamos a variável que contem os itens da lista

const Planet = (props) => {

    const names = ['a', 'b','c','d']
    const satellites = names.map((n) => 
        <li>Satélite {n}</li>
    )

    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else 
        title = <h4>{props.name}</h4>

    return (
        <div >
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>

            <h4>Satélites</h4>
            <ul>
                {satellites}
            </ul>
            <hr />
        </div>
    )
}

export default Planet;
```
<hr>
<br>

### Renderizando Múltiplos elementos no JSX
<br>

```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Aqui iremos fazer a mesma coisa que o exemplo anterior mas de uma forma mais direta
// dentro do return criamos o título e uma ul e dentro da ul criamos o array e utilizamos diretamente o método map nele e para cada elemento do array será criado um li 


const Planet = (props) => {

    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else 
        title = <h4>{props.name}</h4>

    return (
        <div >
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>


            <h4>Satélites</h4>
            <ul>
                {['a', 'b','c','d'].map((n) => 
                     <li>Satélite {n}</li>
                    )}
            </ul>
            <hr />

        </div>
    )
}

export default Planet;
```
<hr>
<br>

## O que são Estados / States
<br>

-   Staté é um objeto javascript que guarda os dados de um component e determina seu comportamento.
-   Quando um estado é atualizado o component é re-renderizado
<hr>
<br>

### Diferença entre props e state
<br>

-   Props são passadas por outros components, o component pai passa as props para o component filho, basicamente são mais externas.
-   E o state pertence a cada component, são mais internos.
-   Os dois quando são atualizados serão re-renderizados
<hr>
<br>

### Component de Classe vs Component Funcional
<br>

-   Declaração de um estado em um component de classe:
```
constructor(props){
    super(props);
    this.state = {
        count: 0
    }
}
```
<hr>

### Manipulando o state em um component de classe
<br>

-   Utilizamos o método setState, passamos nele o estado anterior state.count manipulamos ele e setamos/adicionamos no estado count.

```
incrementCount() {
    this.setState((state) => {
        return {count: state.count + 1}
    });
}
```
<hr>

### Para declarar um estado em um component funcional
<br>

-   Precisamos importar o useState no React
-   Primeiro criamos uma variável const e passamos um array  com o nome do estado que é count, depois o nome do método que vai alterar o estado que é o setCount e chamamos o useState com o valor de inicialização.

```
import React, {useState} from 'react';


const [count, setCount] = useState(0);
```
<hr>

### Para manipular um component em um component de classe
```
setCount(count + 1)
```
<hr>
<br>

### Criando um component de classe com estado e alterando estados
<br>

```
// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados
import React, { Fragment } from "react";
import Planet from "./planet";

// Aqui convertemos o component Planets para um component de classe, com estado, no estado criamos um array com um objeto para cada planeta que armazena seus dados.
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          name: "Mercúrio",
          description:
            "Mercúrio é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
        },
        {
          name: "Saturno",
          description:
            "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg",
          link: "https://pt.wikipedia.org/wiki/Saturno_(planeta)",
        },
      ],
    };
  }

  // Aqui criamos um método que remove o último elemento/planeta do state acima,
  // Pegamos todos os dados do state e armazenamos em uma variável,
  // Utilizamos o método pop() que remove o último elemento de um array na variável,
  // Depois alteramos o state atual atribuindo nele a variável que utilizamos para remover o último elemento

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  // E aqui criamos um método que duplica o último elemento
  // Armazenamos o último item em uma variável,
  // e depois setamos/alteramos o state planets e atribuimos nele a variável last_planet

  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  //  Para exibir os itens do component de classe precisamos utilizar o render(),
  //  No botão passamos a chamada do método que irá remover os itens do Array
  //  e adicionamos outro botão que chama o método de duplicar o último planeta,
  //  E utilizamos um método map no array do state para acessar os dados de cada elemento do objeto e exibí-los na tela.

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last!</button>
        <button onClick={this.duplicateLastPlanet}>
          Duplicate Last Planet!
        </button>
        <hr />

        {this.state.planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
```
<hr>
<br>

## O que é o Lifecycle
<br>

### Cada component React tem um Ciclo de Vida
<br>

-   Você pode monitorá-los ou manipulá-los durante 3 fases:  
<br>

-   Mounting:
    -   Quando um elemento é colocado no DOM

-   Updating:
    -   Quando um component é atualizado
        -   Ocorre sempre que ocorre uma mudança no estado ou propriedade de um component

-   UnMounting:
    -   Quando um component é removido do DOM
<hr>
<br>

### Incluindo lifecycle na classe
<br>

```
-   planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e recursos que serão utilizados
import React, { Fragment } from "react";
import Planet from "./planet";


// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}


// Aqui convertemos o component Planets para um component de classe, com estado, no estado criamos um array com um objeto para cada planeta que armazena seus dados.
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }


  // O componentDidMount é um método que será executado sempre que um component for montado/exibido na tela
  // Aqui chamamos a função async getPlanets e utilizamos o then para pegar o result da promise retornada pela função
  // setamos o state com o result da promise
  componentDidMount(){
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  // Aqui criamos um método que remove o último elemento/planeta do state acima,
  // Pegamos todos os dados do state e armazenamos em uma variável,
  // Utilizamos o método pop() que remove o último elemento de um array na variável,
  // Depois alteramos o state atual atribuindo nele a variável que utilizamos para remover o último elemento
  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  // E aqui criamos um método que duplica o último elemento
  // Armazenamos o último item em uma variável,
  // e depois setamos/alteramos o state planets e atribuimos nele a variável last_planet
  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  //  Para exibir os itens do component de classe precisamos utilizar o render(),
  //  No botão passamos a chamada do método que irá remover os itens do Array
  //  e adicionamos outro botão que chama o método de duplicar o último planeta,
  //  E utilizamos um método map no array do state para acessar os dados de cada elemento do objeto e exibí-los na tela.
  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last!</button>
        <button onClick={this.duplicateLastPlanet}>
          Duplicate Last Planet!
        </button>
        <hr />

        {this.state.planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
```
<hr>

### Exercício State e Lifecycle
<br>

```
-   planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";
import React from "react";

// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise, e passamos para ela como parâmetro id que cada item da api irá conter um id.
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

// Aqui iremos transformar o component Planet para um component de classe e criamos um state satellites, e dentro do component de classe os elementos devem ficar dentro do método render()
// Como é um component de classe temos que utilizar o this para acessar as props
// dentro do return criamos o título e uma ul e dentro da ul utilizamos o método map no state satellites onde irá conter os dados de cada planeta e para cada planeta será exibido uma lista com suas luas
class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: []
    };
  }

  // O componentDidMount é um método que será executado sempre que um component for montado/exibido na tela
  // Aqui chamamos a função async getSatellites e passamos o id  e utilizamos o then para pegar o result da promise retornada pela função,
  // setamos o state satellites com o result da promise
  componentDidMount() {
    getSatellites(this.props.id).then(data => {
      this.setState(state => ({
        satellites: data['satellites']
      }));
    });
  }

  render() {
    let title;
    if (this.props.title_with_underline)
      title = (
        <h4>
          <u>{this.props.name}</u>
        </h4>
      );
    else title = <h4>{this.props.name}</h4>;

    return (
      <div>
        {title}
        <DescriptionWithLink
          description={this.props.description}
          link={this.props.link}
        />
        <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
        <h4>Satélites</h4>
        <ul>
            {this.state.satellites.map((satellite, index) =>
                <li key={index}>{satellite.name}</li>
            )}
        </ul>
        <hr />
      </div>
    );
  }
}

export default Planet;
```
<hr>
<br>

## O que são Hooks ?
<br>

- Os Hooks são uma forma de usarmos  state, lifecycle e compartilharmos lógica em componentes funcionais.
- Eles foram inseridos na versão 16.8    
<br>

### Exemplo de component com Hook de state
```
  // Aqui importamos o hook de state

  import React, { useState } from 'react';

// Aqui uma função utilizando o state

function Example() {
    const [count, setCount] = useState(0);

// e aqui os elementos e o botão que chama a função

    return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)} >
                Click me
            </button>
        </div>       
    );
}
```
<hr>

### Exemplo de component com Hook associado a lifecycle
<br>

```
// Aqui importamos os hooks
import React, { useState, useEffect } from 'react';

    // aqui a função com um state 
    function Example() {
    const [count, setCount] = useState(0);


    //  useEffect é Similar ao componentDidMount e componentDidUpdate sempre que o component for montado ou alterado ele será chamado

    useEffect(() => {

        //  Atualiza o título do documento usando API do navegador
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)} >
                Click me
            </button>
        </div>       
    );
}
```
<hr>

### Porque usar Hooks ?
<br>

- Os components de função são mais fáceis de compreender.
- Hooks nos ajudam a compartilhar lógica entre components.
<hr>
<br>

### Refatorando nosso state e lifecycle com hooks
<br>

```
  - planets/index.js


  // Aqui criamos um component Planets

// Aqui importamos components e os hooks
import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";


// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}


// Aqui transformamos o component de classe em um component funcional
const Planets = (props) => {
  
  
  // Aqui declaramos um state o primeiro parâmetro é o nome do state, o segundo o método que irá alterar o state e o último é o valor inicial dentro dos parênteses do useState()
  const [planets, setPlanets ] = useState([])
  

  // Aqui utilizamos o hook useEffect ele é um método que será executado sempre que um component for montado para ser exibido na tela e sempre que o state é atualizado, ele irá re-renderizar o component.
  //  Quando quisermos que o método seja executado uma única vez basta passar um array vazio no fim do método, ou se quiser que seja executado somente quando determinado state seja atualizado basta passar o state dentro do array no fim do método, assim ele será executado sempre que este state for alterado, ou podemos simplesmente deixar vazio assim ele será executado toda vez que um state for atualizado.
  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])
  

    //  Os métodos podem ficar dentro do component funcional mas devem ser declarados como uma const 
    // Aqui criamos um método que remove o último elemento/planeta,
    // Pegamos todos os dados do state e armazenamos em uma variável,
    // Utilizamos o método pop() que remove o último elemento de um array na variável,
    // Depois alteramos o state atual chamando o método setPlanets que altera o state e passamos para ele a variável onde removemos os elementos
    const removeLast = () => {
      let new_planets = [...planets];
      new_planets.pop();
      setPlanets(new_planets)
    };
  
    // E aqui criamos um método que duplica o último elemento
    // Armazenamos o último item em uma variável,
    // e depois setamos/alteramos o state planets e atribuimos nele a variável last_planet
    const duplicateLastPlanet = () => {
      let last_planet = planets[planets.length - 1];
      setPlanets([...planets, last_planet])
    };
  

    //  No botão passamos a chamada do método que irá remover os itens do Array
    //  e adicionamos outro botão que chama o método de duplicar o último planeta,
    //  E utilizamos um método map no state para acessar os dados de cada elemento do objeto e exibí-los na tela.
      return (
        <Fragment>
          <h3>Planet List</h3>
          <button onClick={removeLast}>Remove Last!</button>
          <button onClick={duplicateLastPlanet}>
            Duplicate Last Planet!
          </button>
          <hr />
          {planets.map((planet) => (
            <Planet
              name={planet.name}
              description={planet.description}
              img_url={planet.img_url}
              link={planet.link}
              id={planet.id}
              key={planet.key}
            />
          ))}
        </Fragment>
      );
}

export default Planets;
```
<hr>
<br>

### Exercício Refatorando com Hooks useState e useEffect
```
- planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components e os hooks
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";
import React, { useEffect, useState } from "react";

// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise, e passamos para ela como parâmetro id que cada item da api irá conter um id.
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

// Aqui convertemos o component de classe para component funcional
const Planet = (props) => {

  
  // Aqui criamos um state satellites com o método setSatellites que altera ele
  const [satellites, setSatellites] = useState([]);

  // Aqui utilizamos o useEffect que é chamado uma única vez no ínicio
  useEffect(() => {
    getSatellites().then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  // Aqui uma renderização condicional
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  //  Aqui retorna os components e elementos, e utilizamos o método map em satellites e para cada item iremos criar um li e criar uma chave para cada satellite baseado no seu índice
  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
```
<hr>
<br>

## Controlled e UnControlled Components
<br>

### O que é um Uncontrolled Component?
<br>

- Em geral é um component que tem seus dados gerenciados pelo próprio DOM (como um input normal) sem relação com o state do component
<br>

### Exemplo
```
import React from 'react'

const Form = () => {
    return(
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name"/>
        </div>
    )
}

export default Form;
```
<hr>
<br>

### O que é um Controlled Component ?
<br>

- Components controlados estão associados aos estados do component, ou seja, eles exibem informações baseadas no state e quando alterados alteram também o state.
<br>

### Exemplo
```
    import React, { useState } from 'react';

    const Form = () => {
        const [name, setName] = useState(' ');
        const handleChange = (e) => setName(e.currentTarget.value)

        return(
            <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={handleChange}/>
        </div>
        )
    }

    export default Form;
```
<hr>

### Criando um Form controlado
<br>

- Aqui criamos o component Form
```
- planets/form/index.js

// Aqui importamos os recursos e hooks utilizados
import { Fragment , useState} from 'react'


// Aqui criamos o component Form
const Form = (props) => {

    // Aqui criamos um state name com o método setName
    const [name, setName] = useState(' ')

    // Aqui criamos uma função que recebe o event como parâmetro e altera o state chamando o método setName() com o value digitado no input
    const handleChange = e => setName(e.target.value)


    // Aqui criamos outra função que irá adicionar o planeta digitado no input ao clicar no botão, e utilizamos o e.preventDefault() para evitar o reload da página ao clicar no botão submit
    const handleSubmit = e => {
        props.addPlanet({name : name})
        e.preventDefault()
    }


    // Aqui os elementos do input, no input chamamos o método onChange que chama a função criada acima e no form chamamos o evento onSubmit que chama a função handleSubmit
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Planet Name: </label>
                    <input id="name" type="text" value={name} onChange={handleChange}/>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

// Aqui exportamos o component
export default Form;
```
- E aqui adicionamos o component Form na página
```
- planets/index.js

// Aqui criamos um component Planets

// Aqui importamos components e os hooks
import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";


// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}


// Aqui transformamos o component de classe em um component funcional
const Planets = () => {
  
  
  // Aqui declaramos um state o primeiro valor é o nome do state o segundo o método que irá alterar o state e o último é o valor inicial dentro dos parênteses do useState()
  const [planets, setPlanets ] = useState([])
  

  // Aqui utilizamos o hook useEffect ele é um método que será executado sempre que um component for montado para ser exibido na tela e sempre que o state é atualizado, ele irá re-renderizar o component.
  //  Quando quisermos que o método seja executado uma única vez basta passar um array vazio no fim do método, ou se quiser que seja executado somente quando determinado state seja atualizado basta passar o state dentro do array no fim do método, assim ele será executado sempre que este state for alterado, ou podemos simplesmente deixar vazio assim ele será executado toda vez que um state for atualizado.
  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])


  // Aqui criamos um método para adicionar planetas via Form
  // chamamos o método setPlanets que altera o state planets e insere na variável new_planet
  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }
  
  
    // Aqui dentro do return fica todos os elementos e components,
    //  adicionamos o component Form que recebe a chamada do método addPlanet criado acima.
    //  E utilizamos um método map no state para acessar os dados de cada elemento do objeto e exibí-los na tela.
      return (
        <Fragment>
          <h3>Planet List</h3>
          <hr />
          <Form addPlanet={addPlanet}/>
          <hr />
          {planets.map((planet) => (
            <Planet
              name={planet.name}
              description={planet.description}
              img_url={planet.img_url}
              link={planet.link}
              id={planet.id}
              key={planet.key}
            />
          ))}
        </Fragment>
      );
}

export default Planets;
```
<hr>
<br>

### Controlando Múltiplos Inputs
<br>

```
- planets/form/index.js

// Aqui importamos os recursos e hooks utilizados
import { Fragment , useState} from 'react'


// Aqui criamos um state inicial com um objeto com os itens que serão adicionados no form
const initialState = {
        name: ' ',
        description: ' ',
        img_url: '',
        link: ' '
}

// Aqui criamos o component Form
const Form = (props) => {

    // Aqui criamos um state fields com o método setFields que recebe o objeto initialState com os itens que serão adicionados ao form
    const [fields, setFields] = useState( initialState )

    // Aqui criamos uma função que recebe o event como parâmetro e altera o state 
    // pegamos todos os fields/campos do input  utilizando o spread, e passamos o value digitado nos fields para o name
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })


    // Aqui criamos outra função que irá adicionar o planeta digitado no input ao clicar no botão, e utilizamos o e.preventDefault() para evitar o reload da página ao clicar no botão submit, e abaixo chamamos o método setFields para alterar o state e passamos para ele a variável initialState e alteramos o state para vazio ou seja após enviar o form ele será limpo
    const handleSubmit = e => {
        props.addPlanet(fields)
        e.preventDefault()
        setFields(initialState)
    }


    // Aqui os elementos do input, no input chamamos o método onChange que chama a função criada acima e no form chamamos o evento onSubmit que chama a função handleSubmit
    // Agora podemos adicionar vários inputs e no campo value acessamos o state fields que contém o objeto com os itens e a propriedade desejada, e ai basta alterar o id, o name e seu value
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Planet Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="description">Planet Description: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="img_url">Planet Image: </label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="link">Planet Link: </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

// Aqui exportamos o component
export default Form;
```
- E aqui adicionamos o component Form em planets

```
- planets/index.js


// Aqui criamos um component Planets

// Aqui importamos components e os hooks
import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";


// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}


// Aqui transformamos o component de classe em um component funcional
const Planets = () => {
  
  
  // Aqui declaramos um state o primeiro valor é o nome do state o segundo o método que irá alterar o state e o último é o valor inicial dentro dos parênteses do useState()
  const [planets, setPlanets ] = useState([])
  

  // Aqui utilizamos o hook useEffect ele é um método que será executado sempre que um component for montado para ser exibido na tela e sempre que o state é atualizado, ele irá re-renderizar o component.
  //  Quando quisermos que o método seja executado uma única vez basta passar um array vazio no fim do método, ou se quiser que seja executado somente quando determinado state seja atualizado basta passar o state dentro do array no fim do método, assim ele será executado sempre que este state for alterado, ou podemos simplesmente deixar vazio assim ele será executado toda vez que um state for atualizado.
  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])


  // Aqui criamos um método para adicionar planetas via Form
  // chamamos o método setPlanets que altera o state planets e insere na variável new_planet
  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }
  
  
    // Aqui dentro do return fica todos os elementos e components,
    //  adicionamos o component Form que recebe a chamada do método addPlanet criado acima.
    //  E utilizamos um método map no state para acessar os dados de cada elemento do objeto e exibí-los na tela.
      return (
        <Fragment>
          <h3>Planet List</h3>
          <hr />
          <Form addPlanet={addPlanet}/>
          <hr />
          {planets.map((planet) => (
            <Planet
              name={planet.name}
              description={planet.description}
              img_url={planet.img_url}
              link={planet.link}
              id={planet.id}
              key={planet.key}
            />
          ))}
        </Fragment>
      );
}

export default Planets;
```
<hr>
<br>

### Exercício Criando um Form Controlado
<br>

```
- planet/form/index.js


// Aqui importamos os recursos e hooks utilizados
import { Fragment , useState} from 'react'


// Aqui criamos um state inicial com um objeto com os itens que serão adicionados no form
const initialState = {
        name: ' ',
}

// Aqui criamos o component Form
const Form = (props) => {

    // Aqui criamos um state fields com o método setFields que recebe o objeto initialState com os itens que serão adicionados ao form
    const [fields, setFields] = useState( initialState )

    // Aqui criamos uma função que recebe o event como parâmetro e altera o state 
    // pegamos todos os fields/campos do input  utilizando o spread, e passamos o value digitado nos fields para o name
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })


    // Aqui criamos outra função nela acessamos as props e o método addSatellite criado no Component Planet que irá adicionar os satélites digitados no input ao clicar no botão, e utilizamos o e.preventDefault() para evitar o reload da página ao clicar no botão submit, e abaixo chamamos o método setFields para alterar o state e passamos para ele a variável initialState e alteramos o state para vazio ou seja após enviar o form ele será limpo
    const handleSubmit = e => {
        props.addSatellite(fields)
        e.preventDefault()
        setFields(initialState)
    }


    // Aqui os elementos do input, no input chamamos o método onChange que chama a função criada acima e no form chamamos o evento onSubmit que chama a função handleSubmit
    // Agora podemos adicionar vários inputs e no campo value acessamos o state fields que contém o objeto com os itens e a propriedade desejada, e ai basta alterar o id, o name e seu value
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Satellite Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

// Aqui exportamos o component
export default Form;
```

```
- planet/index.js


// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components e os hooks
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";
import React, { useEffect, useState } from "react";
import Form from "./form";

// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise, e passamos para ela como parâmetro id que cada item da api irá conter um id.
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

// Aqui convertemos o component de classe para component funcional
const Planet = (props) => {
  // Aqui criamos um state satellites com o método setSatellites que altera ele
  const [satellites, setSatellites] = useState([]);

  // Aqui utilizamos o useEffect que é chamado uma única vez no ínicio
  useEffect(() => {
    getSatellites().then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  //  Aqui criamos um método para adicionar novos satélites pelo form
  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  // Aqui uma renderização condicional
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  //  Aqui retorna os components e elementos, e utilizamos o método map em satellites e para cada item iremos criar um li e criar uma chave para cada satellite baseado no seu índice
  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>
      <Form addSatellite={addSatellite} />
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
```