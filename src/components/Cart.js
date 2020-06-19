import React, {useState,useContext} from 'react';
import {CartContext} from '../context/CartContext';

import Hero from 'react-bulma-components/lib/components/hero';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';

import { FaBeer } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import Backdrop from '../views/Backdrop';

import '../static/sass/Cart.scss';

export const CartHeader = () => {
  const [state, dispatch] = useContext(CartContext)
  return (
    <div>
        <div className="cartLength"><FaBeer />  en el carro: {state.quantityTotal} - $ {state.priceTotal}</div>
    </div>
  )
}

export const CartButton = (props) => {
  const [state, dispatch] = useContext(CartContext)

  const style = { textAlign: 'center' };
    /*
    let price = 0
    state.cart.map((product) => {
      price += product.quantity * product.price
    })
    */
    if (state.quantityTotal){
        return (
              <Button
                className="button-cart"
                style={style}
                renderAs="span"
                color="success"
                onClick={props.openCart}
                
              >
              ({state.quantityTotal}) REVISAR PEDIDO [${state.priceTotal}]
            </Button>
        )
    }
    return ('')
    
  }

export const CartDrawer = () => {
    const [state, dispatch] = useContext(CartContext)
    const style = { textAlign: 'center' };
    var pedido = "Hola! quería hacer un pedido =), este es el detalle: "
    
    state.cart.map((product)=>{
      pedido += " " +product.quantity +" botella/s de "+ product.name + " - "
    })
    pedido += " Muchas gracias Salú "
    
    let pedidoEncoded = encodeURI(pedido)
    
    var uri = "https://api.whatsapp.com/send?phone=5492665030860&text="+pedidoEncoded
    
    const rows = state.cart.map(( r, i ) => {
        return (
          <div className="listProducts" key={i}>
            <List.Item key={i}>* Cerveza Estilo: {r.name} - Cantidad: {r.quantity} - Precio unit: $ {r.price} - Subtotal: $ {parseInt(r.price) * parseInt(r.quantity) }</List.Item>
          </div>
        ) 
      })
    return (
        <Section style={style}>
            <strong>TU PEDIDO ( {state.quantityTotal} ) <br/> </strong>
            <Box>
              <List hoverable>
                {rows}
              </List>
              <List>
              <List.Item >Vas a comprar: {state.quantityTotal} unidades - importe total: $ {state.priceTotal}</List.Item>
              </List>
            </Box>
            <span className="image-checkout">
                <a target="_blank" href={uri}><FaWhatsapp/> PEDIR POR WHATSAPP</a>
            </span>
        </Section>  
    )
}

