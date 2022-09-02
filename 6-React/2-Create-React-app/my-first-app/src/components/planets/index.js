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
            id={planet.id}
            key={planet.key}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
