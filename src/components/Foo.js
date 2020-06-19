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

    const style = { textAlign: 'center' }
    return (

        <Tile kind="ancestor">
            <Tile size={12}>
                <Tile>
                    <Tile kind="parent">
                        <Tile className="box" size={4} renderAs="article" kind="child" key={1}>
                        <Columns style={style}>
                            <div>Contador de compras: {state.quantityTotal}</div>
                            <Columns.Column>
                                <Heading>American IPA</Heading>
                                <Heading subtitle>Suave</Heading>
                            </Columns.Column>
                        </Columns>
                        <Image src="birra.jpg" />
                        <Columns style={style}>
                            <Columns.Column>
                                <p>$100 x unidad</p>
                            </Columns.Column>
                            <Columns.Column>
                                <div className="actions">
                                    <Button
                                        className="button is-rounded is-small"
                                        renderAs="span"
                                        onClick={foo}
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
                    <Tile className="box" size={4} renderAs="article" kind="child" key={2}>
                        <Columns style={style}>
                            <div>Contador de compras: {state.quantityTotal}</div>
                            <Columns.Column>
                                <Heading>American IPA</Heading>
                                <Heading subtitle>Suave</Heading>
                            </Columns.Column>
                        </Columns>
                        <Image src="birra.jpg" />
                        <Columns style={style}>
                            <Columns.Column>
                                <p>$100 x unidad</p>
                            </Columns.Column>
                            <Columns.Column>
                                <div className="actions">
                                    <Button
                                        className="button is-rounded is-small"
                                        renderAs="span"
                                        onClick={foo}
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
                    </Tile>
                </Tile>
            </Tile>
        </Tile>
    )
}