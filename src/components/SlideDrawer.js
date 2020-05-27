import React from 'react'
import '../static/sass/SlideDrawer.scss';
import {CartDrawer } from './Cart';
import Hero from 'react-bulma-components/lib/components/hero';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Section from 'react-bulma-components/lib/components/section';

import { boolean } from '@storybook/addon-knobs';

const SlideDrawer = (props) => {
       let drawerClasses = 'side-drawer'
       const style = { textAlign: 'center' };
       if(props.show) {
          drawerClasses = 'side-drawer open'
            return(
                <div className={drawerClasses}>
                    <Hero className="foo" color="info" >
                        <Hero.Head renderAs="header">
                        <Image className="checkout" rounded={boolean('rounded', true)} size={64} alt="64x64" src="valkirialogo.jpg" />
                        </Hero.Head>
                    </Hero>
                    <CartDrawer/>
                </div>
                )
            }
        else{
            return ('')
        }
}
export default SlideDrawer







