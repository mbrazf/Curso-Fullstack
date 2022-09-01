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
