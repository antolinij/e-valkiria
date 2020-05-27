import React, {useContext} from 'react';
import {CartContext} from './CartContext';

import Hero from 'react-bulma-components/lib/components/hero';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';

import { FaBeer } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import '../static/sass/Cart.scss';

export const CartHeader = () => {
  const [cart, setCart] = useContext(CartContext);
  //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
        <div className="cartLength"><FaBeer />  en el carro: {cart.length} </div>
    </div>
  )
}

export const CartButton = (props) => {
    const [cart, setCart] = useContext(CartContext);
    //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  
    let price = 0
    cart.map((product) => {
      console.log(product)
      price += product.quantity * product.price
    
    })
    console.log(price)

    if (cart.length){
        return (
            <Button
              className="button-cart"
              renderAs="span"
              color="success"
              onClick={props.openCart}
            >
            ({cart.length}) REVISAR PEDIDO [${price}]
          </Button>
        )
    }
    return ('')
    
  }

export const CartDrawer = () => {
    const [cart, setCart] = useContext(CartContext);
    const style = { textAlign: 'center' };
    var pedido = "Hola! quería hacer un pedido =), este es el detalle: "
    
    cart.map((product)=>{
      pedido += " " +product.quantity +" botella/s de "+ product.name + " - "
    })
    pedido += " Muchas gracias Salú "
    
    let pedidoEncoded = encodeURI(pedido)
    
    var uri = "https://api.whatsapp.com/send?phone=5492665030860&text="+pedidoEncoded
    const rows = cart.map(( r, i ) => {
        return (
          <div className="listProducts">
            <List.Item key={i}>Cerveza Estilo: {r.name} - Cantidad: {r.quantity} - Precio: {r.price}</List.Item>
          </div>
        ) 
      })
    return (
        <Section style={style}>
            <strong>TU PEDIDO ( {cart.length} ) <br/> </strong>
            <Box>
              <List hoverable>
                {rows}
              </List>
            </Box>
            <span className="wabutton">
                <a target="_blank" href={uri}><FaWhatsapp/> PEDIR POR WHATSAPP</a>
            </span>
        </Section>  
    )
}

