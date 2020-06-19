import React, { useContext, useState, useRef, useEffect } from 'react'
import { Tile } from 'react-bulma-components'
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Columns from 'react-bulma-components/lib/components/columns';
import '../static/sass/ProductItem.scss'
import Button from 'react-bulma-components/lib/components/button';


import { CartContext } from '../context/CartContext';

export default function ProductItem(props) {
    const [state, dispatch] = useContext(CartContext)

    const foo = () => {
        dispatch({
            type: 'FOO',
            payload: {product: {'id': 1}}
        })
    }

    return (
        <div>
            <div>Contador de compras: {state.quantityTotal}</div>
            <Image src="birra.jpg" />
            <Button
                className="button is-rounded is-small"
                renderAs="span"
                onClick={foo}
            >
                +
            </Button>
        </div>
    )
}