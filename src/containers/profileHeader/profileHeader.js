import React from 'react';
import './profileHeader.css';
import backImg from '../../assets/images/back_profile.png';
import { buildQueries } from '@testing-library/react';
const ProfileHeader=(props)=>{
    return(
        <header className="profileHeader"  style={{
            position:props.rightToggle?'fixed':'fixed',right:props.rightToggle?'50%':'10px',left:props.rightToggle?'0':null,
            top:props.rightToggle?'110px':'0px',
            transition:props.rightToggle?'all 1s':'all 1s',zIndex:props.rightToggle?'100':"null"}}>
            <div className="backgroundImg">
                <img src={backImg} alt="header" />
            </div>
            <div className="profileTitre">
                <h1>{props.titre}</h1>
            </div>
        </header>
    )
}
export default ProfileHeader;