import React, { useContext, useState, useRef, useEffect } from 'react'
import { Tile } from 'react-bulma-components'
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Columns from 'react-bulma-components/lib/components/columns';
import '../static/sass/ProductItem.scss'
import Button from 'react-bulma-components/lib/components/button';


import { CartContext } from '../context/CartContext';

function ProductItem(props) {
    const [state, dispatch] = useContext(CartContext)

    let addToCart = (product) => {
        product.quantity += 1
        dispatch({
            type: 'ADD',
            payload: {product: product}
        })
    }

    const removeToCart = product => {
        product.quantity -= 1
        dispatch({
            type: 'REMOVE',
            payload: {product: product}
        })
    }

    const foo = () => {
        dispatch({
            type: 'FOO',
            payload: {product: {'id': 1}}
        })
    }

    const style = { textAlign: 'center' }
   return (
        <Tile className="box" size={3} kind="child">
            <Columns style={style}>
                <Columns.Column>
                    <Heading>{props.product.name}</Heading>
                    <Heading subtitle>{props.product.description}</Heading>
                </Columns.Column>
            </Columns>
            <Image src="aaa.HEIC" />
            <Columns style={style}>
                <Columns.Column>
                    <p>$100 x unidad</p>
                </Columns.Column>
                <Columns.Column>
                    <div className="actions">
                        <button className="button is-rounded is-small" disabled={!props.product.quantity} onClick={() => removeToCart(props.product)}>-</button>
                        <small>{props.product.quantity?' '+props.product.quantity+' ':' 0 '}</small>
                        <Button
                            className="button is-rounded is-small"
                            renderAs="span"
                            onClick={() => addToCart(props.product)}
                        >
                            +
                        </Button>
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