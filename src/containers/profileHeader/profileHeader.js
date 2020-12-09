import React, {useContext} from 'react';
import './profileHeader.css';
import backImg from '../../assets/images/back_profile.png';
import {MenuContext} from '../../context/MenuContext/MenuContext';

const ProfileHeader=(props)=>{

    const {show} = useContext(MenuContext);

    return(
        <header className="profileHeader"  style={{
            position:show?'fixed':'fixed',position:show?'fixed':'fixed',right:show?'65%':'10px',left:show?'0':null,
            top:show?'90px':'0px',height:show?'20%':null,
            transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
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