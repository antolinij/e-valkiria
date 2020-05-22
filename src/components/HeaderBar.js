import React from 'react'

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Section from 'react-bulma-components/lib/components/section';

import { boolean } from '@storybook/addon-knobs';

import '../static/css/HeaderBar.css'

const HeaderBar = (props) => {

    return (
        <Section>
            <Card>
            <Card.Image size="3by1" src="valkiria.jpg" />
            <Card.Content>
                <Media>
                <Media.Item className="tttt" renderAs="figure" position="left">
                    <Image rounded={boolean('rounded', true)} size={64} alt="64x64" src="valkirialogo.jpg" />
                </Media.Item>
                <Media.Item position="center">
                    <p>
                    <strong>Valkiria La Fabria</strong>
                    </p>
                </Media.Item>
                <Media.Item position="right">
                    <p>
                    <span><br/><a href="instagram/valkiria.birra">LOGOS REDES AQUI</a></span>
                    </p>
                </Media.Item>
                
                </Media>
            </Card.Content>
            </Card>
        </Section>
    )
}

export default HeaderBar