import React from 'react';
import './profileHeader.css';
import backImg from '../../assets/images/back_profile.png';
const ProfileHeader=(props)=>{
    return(
        <header className="profileHeader"  style={{
            position:props.rightToggle?'fixed':'fixed',right:props.rightToggle?'50%':'10px',left:props.rightToggle?'0':null,
            top:props.rightToggle?'90px':'0px',height:props.rightToggle?'20%':null,
            transition:props.rightToggle?'all 0.2s':'all 0.2s',zIndex:props.rightToggle?'100':"null"}}>
            <div className="backgroundImg">
                <img src={backImg} alt="header" />
            </div>
            <div className="profileTitre" style={{opacity:props.profile?'0':'1'}}>
                <h1>{props.titre}</h1>
            </div>
            <div className="titreHeader" style={{opacity:props.profile?'1':'0'}}>
                <h1>نام کاربری</h1>
                <div className="profilePhoto">
                    <img src="#" alt="profile"/>
                </div>
            </div>
        </header>
    )
}
export default ProfileHeader;