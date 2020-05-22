import React, {useContext} from 'react';
import {CartContext} from './CartContext';

import Hero from 'react-bulma-components/lib/components/hero';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

import { FaBeer } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import '../static/css/Cart.css';

export const CartHeader = () => {
  const [cart, setCart] = useContext(CartContext);
  //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
        <div className="cartLength"><FaBeer />items in cart : {cart.length} </div>
    </div>
  )
}

export const CartButton = (props) => {
    const [cart, setCart] = useContext(CartContext);
    //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  
    if (cart.length){
        return (
            <Button
            className="vosboton"
            renderAs="span"
            color="success"
            onClick={props.openCart}
          >
            REVISAR PEDIDO
          </Button>
        )
    }
    return ('')
    
  }

export const CartDrawer = () => {
    const [cart, setCart] = useContext(CartContext);
    //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  
    return (
    <div>
        <strong>TU PEDIDO ( {cart.length}) <br/> </strong>
        <span>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=2984901230Hola%2c%20quería%20pedir%3a%0a%0a%2a%20%5bEnsaladas%5d%20-%20Ensalada%20italiana%20pequeña%20picada%20-%20Elegí%20la%20carne%3a%20Panceta%20-%20%24350%0a%0aTotal%3a%20%24350%0a%0aGracias.&source=&data=&app_absent=">PEDIR POR WHATSAPP</a>
        </span>
    </div>
    )
}