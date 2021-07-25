import React, {useState} from 'react';
import Items from './components/Items';
import AddThins from './components/AddThings';

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

  const handleAddProduct = (itemData) => {
    const newProducts = [...registeredProducts, {
      name: itemData
  }]
    setProduct(newProducts)
  }

  const handleAddClient = (itemData) => {
    const newClients = [...registeredClients, {
      name: itemData
  }]
    setClient(newClients)
  }

  return (
    <div className="container">
      <div>
          <div className="products">
            <h1>Produtos promocionais</h1>
            <Items itemsData={registeredProducts}/>
            <AddThins handleAddItem={handleAddProduct}/>
          </div>
          <div className="clients">
            <h2>Nossos clients</h2>
            <Items itemsData={registeredClients}/>
            <AddThins handleAddItem={handleAddClient}/>
          </div>
      </div>
      <div>

      </div>
    </div>
  );
}
 
export default App;

