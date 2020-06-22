    import React, { useContext } from 'react'
    import ProductItem from './ProductItem'
    import { Tile } from 'react-bulma-components'
    import { CartContext } from '../context/CartContext';

    import Heading from 'react-bulma-components/lib/components/heading';
    import Image from 'react-bulma-components/lib/components/image';
    import Columns from 'react-bulma-components/lib/components/columns';
    import Button from 'react-bulma-components/lib/components/button';

    import '../static/sass/ProductList.scss'
    
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

        let keyharcoded = 0
        const rows = props.products.map(( r, i ) => {
            keyharcoded ++
            return (
                <Tile className="box tileProductList" size={3} kind="child" key={i}>
                    <Columns style={style}>
                        <Columns.Column>
                            <Heading>{r.name}</Heading>
                            <Heading subtitle>{r.description}</Heading>
                        </Columns.Column>
                    </Columns>
                    <Image src="birra.jpg" />
                    <Columns style={style}>
                        <Columns.Column>
                            <p>$100 x unidad</p>
                        </Columns.Column>
                        <Columns className="btnAddUnit">
                            <Columns.Column>
                                    <Button
                                            className="button is-rounded is-medium buttonseparated"
                                            renderAs="span"
                                            onClick={() => removeToCart(r)}
                                            disabled={!r.quantity}
                                        >
                                            -
                                    </Button>
                                    <strong className="totaladded">{r.quantity?' '+r.quantity+' ':' 0 '}</strong>
                                    <Button
                                        className="button is-rounded is-medium buttonseparated"
                                        renderAs="span"
                                        onClick={() => addToCart(r)}
                                    >
                                        +
                                    </Button>                            
                                </Columns.Column>
                            </Columns>
                        <Columns.Column>
                            <p className="bd-notification is-success"><small>*unidad referencia <br/> botella 500ml</small></p>
                        </Columns.Column>
                    </Columns>
                </Tile>
            ) 
        })

        return (
            <Tile kind="ancestor">
                <Tile size={12}>
                    <Tile className="wrapProductTile" kind="parent">
                        {rows}
                    </Tile>
                </Tile>
        </Tile>
        )
    }