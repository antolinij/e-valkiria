import React, { useContext, useState } from 'react'
import { Tile } from 'react-bulma-components'
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import List from 'react-bulma-components/lib/components/list';
import '../static/sass/ProductItem.scss'

import { CartContext } from './CartContext';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

function ProductItem(props) {
    const [cart, setCart] = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    
    const addToCart = (item, action) => {   
        const ndx = cart.findIndex(e => e.id === item.id);

        if (ndx === -1) {
            console.log("no existia el producto")
            setQuantity(quantity + 1)
            item['quantity'] = quantity
            setCart([...cart, item]);
        }
        else{
            console.log("existia el producto")
            switch(action) {
                case 'add':
                    setQuantity(quantity + 1)
    
                    cart[ndx]['quantity'] = quantity
                    return
                case 'remove':
                    console.log("era quitar")
                    console.log("esto hay en cart: " + cart[ndx].name + " q: " + cart[ndx].quantity)
                    setQuantity(quantity - 1)
                    cart[ndx]['quantity'] = quantity
                    return 
            }
        }
        console.log(cart)
    }
    return (
        <Tile className="box" size={4} renderAs="article" kind="child">
            <Heading>{props.product.name}</Heading>
            <Heading subtitle>{props.product.description}</Heading>
            <Image src="birra.jpg" />
            <div className="actions">
                <button className="button is-rounded is-small" onClick={() => addToCart(props.product, 'add')}><FaPlus/></button>
                <div>
                    {quantity}
                </div>
                <button className="button is-rounded is-small" disabled={!quantity} onClick={() => addToCart(props.product, 'remove')}><FaMinus/></button>
            </div>
        </Tile>
    )
}
export default ProductItem