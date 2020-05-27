import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  /*
  const moden = cart.reduce((r,{id, name, price, quantity=0}) => {
    r[id] = r[id] || {id, name, price, quantity} 
    r[id].price += price 
    r[id].quantity += 1
    return r
  }, {})
  */


  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}