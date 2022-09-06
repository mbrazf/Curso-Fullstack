// Aqui no App.js onde são inseridos todos os elementos e componentes

import React from 'react';

// Aqui importamos o component onde está configurado as rotas
import ScreenRoutes from './routes';


// E aqui no component App dentro do return  é onde todos os elementos e componentes são inseridos
function App() {
  return (
    <div>
      <ScreenRoutes/>
    </div>
  );
}

export default App;
