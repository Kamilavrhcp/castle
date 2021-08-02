import React from 'react';
import tshirt from "./images/camisetaFrente09.png";
import icon from "./images/icon.png"
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Product
      store="2 STORE"
      tshirt={tshirt}
      description="Camisa Branca Correr Comer"
      descriptionAlt="camisa branca correr comer"
      fullPrices="49,90"
      currentPrice="R$19,90"
      icon={icon}
      installment="1x "
      />
    </div>
  );
}

export default App;
