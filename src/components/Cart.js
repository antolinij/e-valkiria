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

export const CartHeader = (props) => {
  const [state, dispatch] = useContext(CartContext)
  return (
    <div>
        <Button onClick={props.openCart}><div className="cartLength"><FaBeer />  en el carro: {state.quantityTotal} - $ {state.priceTotal}</div></Button>
    </div>
  )
}

export const CartButton = (props) => {
  const [state, dispatch] = useContext(CartContext)

  const style = { textAlign: 'center' };

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

    if (! state.quantityTotal ){
      return (
        <div>UPS!, NADA POR AQUÍ</div>
      )
    }
    var pedido = "Hola Valkirianos! quería pedir lo siguiente: \n "
    
    state.cart.map((product)=>{
      pedido += "*" +product.quantity +"* botella/s de *"+ product.name + "* \n "
    })
    pedido += "Muchas gracias!"
    
    let pedidoEncoded = encodeURI(pedido)
    
    var uri = "https://api.whatsapp.com/send?phone=5492665030860&text="+pedidoEncoded
    
    const rows = state.cart.map(( r, i ) => {
        return (
          <div className="listProducts" key={i}>
            <List.Item key={i}><li><bold>{r.quantity} unidad/es de {r.name}. </bold><br/><small>Valor c/u: $ {r.price} subtotal: $ {parseInt(r.price) * parseInt(r.quantity) }</small></li></List.Item>
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
              <List.Item >Total: {state.quantityTotal} unidad/es <br/> Importe total: $ {state.priceTotal}</List.Item>
              </List>
            </Box>
            <span className="wabutton">
                <Button renderAs="span" color="success"><a target="_blank" href={uri} ><FaWhatsapp/> PEDIR POR WHATSAPP</a></Button>
            </span>
        </Section>  
    )
}

