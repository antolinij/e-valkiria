import React, {useState, useContext} from 'react';

import SlideDrawer from './components/SlideDrawer';
import Backdrop from './components/Backdrop';
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';
import Container from 'react-bulma-components/lib/components/container';


import { CartProvider } from './components/CartContext';
import { CartHeader, CartButton} from './components/Cart';

import ProductList from './components/ProductList';

import './static/css/App.css';
//import './App.sass';
import './static/sass/Cart.scss';

function App() {
  const [drawer, setDrawer] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawer( !drawer )
  }

  const backdropClickHandler = () => {
    setDrawer( false )
  }

  let backdrop;
  if(drawer){
    backdrop = <Backdrop close={backdropClickHandler} />;
   }
   
  return (
    <div>
      <CartProvider>
        <NavBar openCart={drawerToggleClickHandler} />
        <SlideDrawer show={drawer} />
        { backdrop }
        <HeaderBar/>
        <ProductList/>
        <CartButton openCart={drawerToggleClickHandler}/>    
      </CartProvider>
    </div>
  );
}

export default App;
