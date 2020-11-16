import React from 'react';
import './logo.css';
import logo from '../../assets/images/logoonlineshop_ en.png';
const Logo=() =>{
    return(
        <div className="logoStyle">
            <img src={logo} alt="online shop" />
        </div>
    )
}
export default React.memo(Logo);