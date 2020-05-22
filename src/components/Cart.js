import React, {useContext} from 'react';
import {CartContext} from './CartContext';

import Hero from 'react-bulma-components/lib/components/hero';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';

import { FaBeer } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import '../static/css/Cart.css';

export const CartHeader = () => {
  const [cart, setCart] = useContext(CartContext);
  //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
        <div className="cartLength"><FaBeer />productos en el carro: {cart.length} </div>
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
  
    const rows = cart.map(( r, i ) => {
        return (
            <List.Item key={i}>Cerveza: {r.name}</List.Item>
        ) 
      })

    return (
    <Box>
    <div>
      <Section>
        <strong>Listado de tu Pedido ( {cart.length}) <br/> </strong>
        <Box>
          <List hoverable>
            {rows}
          </List>
        </Box>
        <span>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5492665030860&text=Hola%2c%20quer%c3%ada%20pedir estas cervezas%3a%0a%0a%2a%20%5bTotal%3a%20%24250%0a%0aGracias.&source=&data=&app_absent=">PEDIR POR WHATSAPP</a>
        </span>
        </Section>
    </div>
    </Box>
    )
}
