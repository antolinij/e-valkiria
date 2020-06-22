import React from 'react'

import Navbar from 'react-bulma-components/lib/components/navbar';
import '../static/sass/NavBar.scss'
import { select, boolean } from '@storybook/addon-knobs';
import { CartHeader, CartButton} from './Cart';

const NavBar = (props) => {
    return(
        <Navbar className="navBarQRMarket" fixed="top">
            <Navbar.Brand>
                <Navbar.Item>
                    <img src="logo.png"/>
                </Navbar.Item>
                <Navbar.Item>
                    <CartHeader openCart={props.openCart}/>
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                </Navbar.Container>
                <Navbar.Container position="end">
                <Navbar.Item href="#">
                </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavBar