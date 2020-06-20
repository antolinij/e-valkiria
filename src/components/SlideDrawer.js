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
          drawerClasses = 'side-drawer open has-text-centered'
          document.body.classList.add('sidedraweropen');
            return(
                <div className={drawerClasses}>
                    <Image className="image-checkout" rounded={boolean('rounded', true)} size={64} alt="64x64" src="valkirialogo.jpg" />
                    <CartDrawer/>
                </div>
                )
            }
        else{
            return ('')
        }
}
export default SlideDrawer







