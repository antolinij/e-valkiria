import React, { useContext, useState, useRef, useEffect } from 'react'
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
    const [myState, _setMyState] = useState(0)

    const myStateRef = useRef(myState)

    const setMyState = data => {
        myStateRef.current = data
        _setMyState(data)
    }

    const listener = () => {
        console.log('state in handler' + myStateRef.current)
    }

    /*
    useEffect(() => {
        window.addEventListener('click', listener)
    })
    */
    function updateToCart(item, action){
        const ndx = cart.findIndex(e => e.id === item.id);

        if (ndx === -1) {
            console.log("agregaste tu primer producto papu")
            setMyState(myState + 1)
            item['quantity'] = myStateRef.current
            setCart([...cart, item]);
        }
        else{
            switch(action) {
                case 'add':
                    setMyState(cart[ndx]['quantity'] + 1)
                    cart[ndx]['quantity'] = myStateRef.current
                    return
                case 'remove':
                    setMyState(cart[ndx]['quantity'] - 1)
                    cart[ndx]['quantity'] = myStateRef.current
                    return 
            }


        }
    }
    return (
        <Tile className="box" size={4} renderAs="article" kind="child">
            <Heading>{props.product.name}</Heading>
            <Heading subtitle>{props.product.description}</Heading>
            <Image src="birra.jpg" />
            <div className="actions">
                <button className="button is-rounded is-small" disabled={!props.product.quantity} onClick={() => updateToCart(props.product, 'remove')}><FaMinus/></button>
                <small>{props.product.quantity?' '+props.product.quantity+' ':' 0 '}</small>
                <button className="button is-rounded is-small" onClick={()=> updateToCart(props.product, 'add')}><FaPlus/></button>
            </div>
        </Tile>
    )
}
export default ProductItem