import React, { useContext, useState, useRef, useEffect } from 'react'
import { Tile } from 'react-bulma-components'
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Columns from 'react-bulma-components/lib/components/columns';
import List from 'react-bulma-components/lib/components/list';
import '../static/sass/ProductItem.scss'

import { CartContext } from './CartContext';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

function ProductItem(props) {
    const [cart, setCart] = useContext(CartContext);
    const [myState, _setMyState] = useState(0)

    const style = { textAlign: 'center' }
    const myStateRef = useRef(myState)

    const setMyState = data => {
        myStateRef.current = data
        _setMyState(data)
    }

    const listener = () => {
        console.log('state in handler' + myStateRef.current)
    }

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
            <Columns style={style}>
                <Columns.Column>
                    <Heading>{props.product.name}</Heading>
                    <Heading subtitle>{props.product.description}</Heading>
                </Columns.Column>
            </Columns>
            <Image src="birra.jpg" />
            <Columns style={style}>
                <Columns.Column>
                    <p>$150 x unidad</p>
                </Columns.Column>
                <Columns.Column>
                    <div className="actions">
                        <button className="button is-rounded is-small" disabled={!props.product.quantity} onClick={() => updateToCart(props.product, 'remove')}><FaMinus/></button>
                        <small>{props.product.quantity?' '+props.product.quantity+' ':' 0 '}</small>
                        <button className="button is-rounded is-small" onClick={()=> updateToCart(props.product, 'add')}><FaPlus/></button>
                    </div>
                </Columns.Column>
                <Columns.Column>
                    <p className="bd-notification is-success"><small>*unidad referencia <br/> botella 500ml</small></p>
                </Columns.Column>
            </Columns>
        </Tile>
    )
}
export default ProductItem