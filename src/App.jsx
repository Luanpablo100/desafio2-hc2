import React, {useState} from 'react';
import Items from './components/Items';
import AddThings from './components/AddThings';

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
  
  const dataConverted = JSON.stringify(newProducts)
  localStorage.setItem('registerProduct', dataConverted);

    setProduct(newProducts)
  }

  const handleAddClient = (itemData) => {
    const newClients = [...registeredClients, {
      name: itemData
  }]
  const dataConverted = JSON.stringify(newClients)
  localStorage.setItem('registerClient', dataConverted);

    setClient(newClients)
  }

  return (
    <div className="container">
      <div>
          <div className="products">
            <h1>Produtos</h1>
            <Items itemsData={registeredProducts}/>
            <AddThings handleAddItem={handleAddProduct}/>
          </div>
          <div className="clients">
            <h2>Nossos clientes</h2>
            <Items itemsData={registeredClients}/>
            <AddThings handleAddItem={handleAddClient}/>
          </div>
      </div>
      <div>

      </div>
    </div>
  );
}
 
export default App;

