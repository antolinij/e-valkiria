import React, { Component } from 'react'
import ProductItem from './ProductItem'
import '../static/sass/ProductList.scss'
import { Tile } from 'react-bulma-components'

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

class ProductList extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Pale Ale',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '113.32',
                stock: 4,
                quantity: 0,
            },
            {
                id: 2,
                name: 'White IPA',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '299',
                stock: 6,
                quantity: 0,
            },
            {
                id: 3,
                name: 'Porter',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '213.54',
                stock: 9,
                quantity: 0,
            },
            {
                id: 4,
                name: 'Golden',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '140.50',
                stock: 0,
                quantity: 0,
            },
            {
                id: 5,
                name: 'New England IPA',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '280',
                stock: 3,
                quantity: 0,
            },
            {
                id: 6,
                name: 'Session IPA',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '250',
                stock: 3,
                quantity: 0,
            },
            {
                id: 7,
                name: 'American IPA',
                description: '4% ABV - 18 SRM - 28 IBUS',
                price: '100',
                stock: 3,
                quantity: 0,
            },
            
        ],
        cart: [],
    }

  render()  {
    const { products } = this.state;

    const productListGrouped = products.chunk_inefficient(3).map( (row, index)=>{ 
            return (
                <ProductGrouped row={row} key={index}></ProductGrouped> 
            )
        })
    return (
        <div>
            {productListGrouped}
        </div>    
    )
  }
}

export default ProductList