import React, {useReducer} from 'react';

export const CartContext = React.createContext();

const initialState = {
  cart: [],
  quantityTotal: 0,
  priceTotal: 0
}

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD':
        let product = action.payload.product
        const ndx = state.cart.findIndex(e => e.id === product.id ); 
        if (ndx === -1) {
            product['quantity'] = 1
            return {
                cart: [...state.cart, action.payload.product],
                quantityTotal: state.quantityTotal + 1,
                priceTotal: Math.round((state.priceTotal + product.price) * 100) / 100
            }
        }
        else{
            return {
                cart: [...state.cart],
                quantityTotal: state.quantityTotal + 1,
                priceTotal: Math.round((state.priceTotal + product.price) * 100) / 100
            }
        }
    case 'REMOVE':
        const productRemoved = action.payload.product
        if (productRemoved.quantity === 0){
            state.cart = state.cart.filter(item => item.id !== productRemoved.id)
        }
        
        return {
            cart: [...state.cart],
            quantityTotal: state.quantityTotal - 1,
            priceTotal: Math.round((state.priceTotal - productRemoved.price) * 100) / 100
        }
    default: 
        throw new Error()
    }
}

export const CartContextProvider = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider>
    )
}