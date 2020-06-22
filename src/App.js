import React, {useState, useContext, useEffect} from 'react';

import SlideDrawer from './components/SlideDrawer';
import HeaderBar from './components/HeaderBar';
import Home from './components/Home';
import Foo from './components/Foo';
import NavBar from './components/NavBar';
import Container from 'react-bulma-components/lib/components/container';
import { CartContextProvider } from './context/CartContext';
import Backdrop from './views/Backdrop';
import {Helmet} from "react-helmet";

import axios from 'axios';

import { CartHeader, CartButton} from './components/Cart';

import ProductList from './components/ProductList';

import './static/css/App.css';
//import './App.sass';
import './static/sass/Cart.scss';

function App() {
  const [data, setData] = useState({ products: [
      {
          id: 1,
          name: 'Pale Ale Especial Edition',
          description: '5.8% ABV - 18 SRM - 40 IBUs',
          price: 100,
          stock: 4,
          quantity: 0,
      },
      {
          id: 2,
          name: 'Session Pale 01 - Proyecto Cuarentena',
          description: '4.1% ABV, 7 SRM - 51 IBUs',
          price: 100,
          stock: 6,
          quantity: 0,
      },
      {
          id: 3,
          name: 'English Red IPA',
          description: '5.5% ABV - 15 SRM - 52 IBUs',
          price: 100,
          stock: 9,
          quantity: 0,
      },
      {
          id: 4,
          name: 'Golden Ale - Proyecto Cuarentena',
          description: '4.9% ABV - 4 SRM - 28 IBUs',
          price: 100,
          stock: 0,
          quantity: 0,
      },
      {
          id: 5,
          name: 'Session IPA',
          description: '4.5% ABV - 6 SRM - 38 IBUs',
          price: 100,
          stock: 3,
          quantity: 0,
      },
    ] 
  });
  const [drawer, setDrawer] = useState(false);
    
  let backdrop;

  const drawerToggleClickHandler = () => {
      setDrawer( !drawer )
    }

    const backdropClickHandler = () => {
      setDrawer( false )
  }
  
  if(drawer){
      backdrop = <Backdrop close={backdropClickHandler} />;
  }

  /*
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=python',
      );
      console.log(result)
      setData(result.data);
    };
 
    fetchData();
  }, []);
  */

  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>QR Market Tienda online deValkiria </title>
          <link rel="canonical" href="https://valkiria.qrmarket.com.ar" />
      </Helmet>
      <Home products={data.products}/>
    </div>
  );
}

export default App;
