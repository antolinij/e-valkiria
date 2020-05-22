import React, { useContext } from 'react'
import { Tile } from 'react-bulma-components'
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';

import { CartContext } from './CartContext';

function ProductItem(props) {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
      const p = { name: props.product.name, description: props.product.price };
      setCart(currentState => [...currentState, p]);
    }

    return (
        <Tile className="box" size={4} renderAs="article" kind="child">
            <Heading>{props.product.name}</Heading>
            <Heading subtitle>{props.product.description}</Heading>
            <Image src="birra.jpg" />
            <button className="button is-rounded is-small" onClick={addToCart}>Add to cart</button>
        </Tile>
    )
}
export default ProductItem