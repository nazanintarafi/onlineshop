import React from 'react';
import backImg from '../../assets/images/sellerHeader.png';
import proImg from '../../assets/images/download.png';
import './sellerHeader.css';

const SellerHeader=(props)=>{
    return(
        <header className="profileHeader SellerHeader"  style={{
            position:props.rightToggle?'fixed':'fixed',right:props.rightToggle?'50%':'10px',left:props.rightToggle?'0':null,
            top:props.rightToggle?'90px':'0px',height:props.rightToggle?'20%':null,
            transition:props.rightToggle?'all 1s':'all 1s',zIndex:props.rightToggle?'100':"null"}}>
            <div className="backgroundImg">
                <img src={backImg} alt="header" />
            </div>
            <div className="titreHeader titreSeller">
                <div className="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div className="profilePhoto">
                    <img src={proImg} alt="profile"/>
                </div>
            </div>
        </header>
    )
}
export default SellerHeader;