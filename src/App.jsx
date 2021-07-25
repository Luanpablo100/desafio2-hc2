import React, {useState} from 'react';
import Items from './components/Items';
import AddThings from './components/AddThings';
import './App.css'

const App = () => {

  const [registeredProducts, setProduct] = useState([
    {
      name: 'Headset Gamer',
      imgLink: 'https://cdn.pichau.com.br/wysiwyg/Descricao/Logitech/981-000769/981-000769.png'
    },
    {
      name: 'Notebook Dell',
      imgLink: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/oc_g3_3500_new_size_bk.png'
    }
  ])


  const [registeredClients, setClient] = useState([
    {
      name: 'Logitech',
      imgLink: 'https://i.pinimg.com/originals/ba/b7/8b/bab78b1ab6202c17519384fb90b06412.png'
    },
    {
      name: 'Dell Inc.',
      imgLink: 'https://marcas-logos.net/wp-content/uploads/2020/03/Dell-Logo-1.png'
    }
  ])

  const handleAddProduct = (itemData) => {
    const newProducts = [...registeredProducts, {
      name: itemData.name,
      imgLink: itemData.imgLink
  }]
  
  const dataConverted = JSON.stringify(newProducts)
  localStorage.setItem('registerProduct', dataConverted);

    setProduct(newProducts)
  }

  const handleAddClient = (itemData) => {
    const newClients = [...registeredClients, {
      name: itemData.name,
      imgLink: itemData.imgLink
  }]
  const dataConverted = JSON.stringify(newClients)
  localStorage.setItem('registerClient', dataConverted);

    setClient(newClients)
  }

  return (
    <div className="container">
      <div>
          <div className="product-container">
            <h1>Produtos</h1>
            <div className="products">
              <Items itemsData={registeredProducts}/>
            </div>
            <AddThings handleAddItem={handleAddProduct}/>
          </div>
          <div className="client-container">
            <h2>Nossos parceiros</h2>
            <div className="clients">
              <Items itemsData={registeredClients}/>
            </div>
            <AddThings handleAddItem={handleAddClient}/>
          </div>
        </div>
    </div>
  );
}
 
export default App;

