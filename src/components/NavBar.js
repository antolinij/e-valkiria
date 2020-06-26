import React from 'react'

import Navbar from 'react-bulma-components/lib/components/navbar';
import Section from 'react-bulma-components/lib/components/section';
import Card from 'react-bulma-components/lib/components/card';

import '../static/sass/NavBar.scss'

import { CartHeader, CartButton} from './Cart';

const NavBar = (props) => {
    return(
        <div>
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
            <Section>
                <Card>
                    <Card.Image size="3by1" src="valkiria.jpg" />
                </Card>
            </Section>
        </div>
    )
}

export default NavBar