// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components e os hooks
import React, { useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/description_with_link";
import Form from "./form";

// Aqui importamos o hook useParams para poder utilizar parâmetro na URL, e o useNavigate para redirecionar
import { useParams, useNavigate, Navigate } from "react-router-dom";

// Aqui criamos uma async function que será executada de forma assíncrona ou seja será executada antes de tudo, ela retorna uma promise, e passamos para ela como parâmetro id que cada item da api irá conter um id.
// Nela iremos consumir a API fictícia na pasta api e armazenar o result da promise na variável response e depois iremos tranformar em json e armazenamos na variável data e iremos retornar ela
async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

// Aqui convertemos o component de classe para component funcional
const Planet = () => {
  // Aqui criamos um state satellites com o método setSatellites que altera ele
  const [satellites, setSatellites] = useState([]);

  // Aqui declaramos um state para planet
  const [planet, setPlanet] = useState({ })

  // Aqui um state usado para redirecionar caso houver algum erro na chamada da API
  const [redirect, setRedirect] = useState(false)


  // Aqui criamos uma variável id e chamamos o useParams(), ele irá retornar um objeto com os parâmetros
  let { id } = useParams()

  //  Aqui utilizamos o hook useNavigate, para redirecionar as páginas
  let navigate = useNavigate()

  // Aqui utilizamos o useEffect que é chamado uma única vez no ínicio
  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites']);
      setPlanet(data['data'])
    }, error => {
      setRedirect(true)
    })
  },  [ ]);


  // Aqui criamos um método para navegar entre páginas, chamamos esse método em um botão
  const goToPlanets = () => {
      navigate('/')
  }

  //  Aqui criamos um método para adicionar novos satélites pelo form
  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  // Aqui uma renderização condicional
  let title;
  if (planet.title_with_underline)
    title = (
      <h4>
        <u>{planet.name}</u>
      </h4>
    );
  else title = <h4>{planet.name}</h4>;


  // e aqui verificamos o state redirect e for true redirecionamos para a página inicial
  if(redirect){
      return <Navigate to="/"></Navigate>
  }

  //  Aqui retorna os components e elementos, e utilizamos o método map em satellites e para cada item iremos criar um li e criar uma chave para cada satellite baseado no seu índice
  return (
    <div>
      {title}
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      <h4>Satélites</h4>
      <Form addSatellite={addSatellite} />
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
          <button type="button" onClick={goToPlanets}>Voltar para Home</button>
    </div>
  );
};

export default Planet;
