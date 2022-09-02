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
