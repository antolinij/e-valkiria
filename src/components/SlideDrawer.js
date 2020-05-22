import React from 'react'
import '../static/css/SlideDrawer.css';
import {CartDrawer } from './Cart';

const SlideDrawer = (props) => {
       let drawerClasses = 'side-drawer'
       if(props.show) {
          drawerClasses = 'side-drawer open'
            return(
                <div className={drawerClasses}>
                    <CartDrawer/>
                </div>
                )
            }
        else{
            return ('')
        }
}
export default SlideDrawer







