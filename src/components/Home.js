import React, {useState, useContext} from 'react';

import NavBar from '../components/NavBar';
import SlideDrawer from '../components/SlideDrawer';
import HeaderBar from '../components/HeaderBar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

import Backdrop from '../views/Backdrop';

import { CartContextProvider } from '../context/CartContext';
import { CartHeader, CartButton} from '../components/Cart';

export default function Home(props){
    const [drawer, setDrawer] = useState(false);
    
    let backdrop;

    const drawerToggleClickHandler = () => {
        setDrawer( !drawer )
      }
    
    const backdropClickHandler = () => {
        document.body.classList.remove('sidedraweropen');
        setDrawer( false )
    }
    
    if(drawer){
        backdrop = <Backdrop close={backdropClickHandler} />;
    }
    return (
        <div>
            <CartContextProvider>
                <SlideDrawer show={drawer} />
                <NavBar openCart={drawerToggleClickHandler} />
                { backdrop }
                <HeaderBar/>
                <ProductList products={props.products}/>
                <CartButton openCart={drawerToggleClickHandler}/> 
            </CartContextProvider>  
            <Footer/>
        </div>
    )
}