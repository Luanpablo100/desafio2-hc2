import React, {useState} from 'react';
import Items from './components/Items';
import AddThins from './components/Add';

const App = () => {

  const [registeredProducts, setProduct] = useState([
    {
      name: 'Headset Gamer',
    },
    {
      name: 'Notebook Dell',
    }
  ])


  const [registeredClients, setClient] = useState([
    {
      name: 'Joao da Silva',
    },
    {
      name: 'Luciana Barbosa',
    }
  ])

  return (
    <div className="container">
      <div>
          <div className="products">
            <h1>Produtos promocionais</h1>
            <Items itemsData={registeredProducts}/>
            <AddThins/>
          </div>
          <div className="clients">
            <h2>Nossos clients</h2>
            <Items itemsData={registeredClients}/>
            <AddThins/>
          </div>
      </div>
      <div>

      </div>
    </div>
  );
}
 
export default App;

