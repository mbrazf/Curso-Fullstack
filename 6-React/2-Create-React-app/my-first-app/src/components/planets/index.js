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
          {planets.map((planet, index) => (
            <Planet
              name={planet.name}
              description={planet.description}
              img_url={planet.img_url}
              link={planet.link}
              id={planet.id}
              key={index}
            />
          ))}
        </Fragment>
      );
}

export default Planets;