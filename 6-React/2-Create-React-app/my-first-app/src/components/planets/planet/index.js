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
