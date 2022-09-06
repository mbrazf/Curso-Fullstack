import React from 'react'

// Aqui importamos os recursos que serão utilizados do react-router
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Aqui importamos os components
import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'

import NotFoundScreen from './screens/notFound'


//  Aqui criamos o component ScreenRoutes para configurar/ adicionar as rotas.
//  O BrowserRouter é o principal elemento, ele é como se fosse uma estrutura externa para armazenar as rotas, todas as telas de um projeto tem que ser exibidas dentro dele.

//  Também temos o Routes basicamente é o component que tem que ficar em volta das rotas, as rotas tem que estar dentro do Routes.

//  E o Route é a rota em si, recebe três parâmetros, element que recebe o componente que será exibido ao acessar a rota. O parâmetro path é o caminho na URL que precisa ser acessado para mostrar o componente, definido pelo parâmetro component. O parâmetro exact determina qual o componente vai ser exibido apenas se a rota for igual ao definido entre aspas, no nosso caso se for exatamente "/".

// Na segunda rota iremos pegar o parâmetro da URL

const ScreenRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/"  element={ <PlanetsScreen/> }/>
                <Route exact path="/planet/:id"  element={<PlanetScreen/> }/>
                <Route path ='*' element={<NotFoundScreen/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenRoutes;