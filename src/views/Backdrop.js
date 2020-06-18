import React from 'react'
import '../static/css/Backdrop.css'

const Backdrop = (props) => {
    return(
      <div className="backdrop" 
        onClick={props.close}
      />
    )
}

export default Backdrop