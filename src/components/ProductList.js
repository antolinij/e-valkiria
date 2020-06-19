    import React, { useContext } from 'react'
    import ProductItem from './ProductItem'
    import '../static/sass/ProductList.scss'
    import { Tile } from 'react-bulma-components'
    import { CartContext } from '../context/CartContext';

    import Heading from 'react-bulma-components/lib/components/heading';
    import Image from 'react-bulma-components/lib/components/image';
    import Columns from 'react-bulma-components/lib/components/columns';
    import Button from 'react-bulma-components/lib/components/button';

    Object.defineProperty(Array.prototype, 'chunk_inefficient', {
        value: function(chunkSize) {
            var array = this;
            return [].concat.apply([],
            array.map(function(elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
            );
        }
    });
    let keyharcoded = 0
    const ProductGrouped = props => {
        const rows = props.row.map(( r, i ) => {
            keyharcoded ++
            return (
                <ProductItem product={r} key={keyharcoded}></ProductItem>
            ) 
        })
        return (
            <Tile kind="ancestor">
                <Tile size={12}>
                    <Tile>
                        <Tile kind="parent">
                            {rows}
                        </Tile>
                    </Tile>
                </Tile>
            </Tile>
        )
    }

    export default function ProductList(props){
        const [state, dispatch] = useContext(CartContext)
        const productListGrouped = props.products.chunk_inefficient(3).map( (row, index)=>{ 
            return (
                <ProductGrouped row={row} key={index}></ProductGrouped> 
            )
        })

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

        const rows = props.products.map(( r, i ) => {
            keyharcoded ++
            return (
                <ProductItem product={r} key={keyharcoded}></ProductItem>
            ) 
        })

        return (
            <Tile kind="ancestor">
                <Tile size={12}>
                    <Tile className="foo" kind="parent">
                        {rows}
                    </Tile>
                </Tile>
        </Tile>
        )
    }