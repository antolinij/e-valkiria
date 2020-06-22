import React from 'react'

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Level from 'react-bulma-components/lib/components/level';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';
import { boolean } from '@storybook/addon-knobs';

import '../static/css/HeaderBar.css'
import '../static/sass/HeaderBar.scss'

import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const HeaderBar = (props) => {
    const style = { textAlign: 'center' };
    return (
        <Section>
            <Card>
            <Card.Image size="3by1" src="valkiria.jpg" />
            <Card.Content>
                <Media>
                    <Media.Item className="tttt" renderAs="figure" position="left">
                        <Image rounded={boolean('rounded', true)} size={64} alt="64x64" src="valkirialogo.jpg" />
                    </Media.Item>
                    <Media.Item position="left">
                        <p>
                            <strong>Valkiria</strong>
                        </p>
                        <p>
                            La Fabrica
                        </p>
                        {/* 
                        Boton para filtrar TODO

                        <Columns style={style}>
                            <Columns.Column>
                                <Container className="filterProducts">
                                    <Button></Button><Button>un boton</Button>
                                </Container>
                            </Columns.Column>
                        </Columns>
                        */}
                    </Media.Item>
                    <Columns className="postionSocialButton" style={style}>
                            <Columns.Column>
                                <Container>
                                    <a class="button" target="_blank" href="https://www.facebook.com/cervezavalkiria"><FaFacebookSquare size={28}/></a>
                                    <a class="button" target="_blank" href="https://www.instagram.com/valkiria_birra/"><FaInstagram size={28}/></a>
                                    <a class="button" target="_blank" href="https://api.whatsapp.com/send?phone=5492665030860&text="><FaWhatsapp size={28}/></a>
                                </Container>
                            </Columns.Column>
                        </Columns>
                </Media>
            </Card.Content>
            </Card>
            <Hero>
                <Hero.Body>
                    ENVÍOS HASTA LAS 19hs
                </Hero.Body>
            </Hero>
        </Section>
    )
}

export default HeaderBar