import React, { useState , useContext } from 'react';
import './reviewButton.css';
import Close from '../../../../assets/images/down-arrow.png';
import ReviewCart from '../../../CartComponents/reviewCart/reviewCart';
import {CartContext} from '../../../../context/CartContext/cartContext';
const ReviewButton=(props)=>{
    const cartContext = useContext (CartContext);
    const { showReview } = cartContext;
    const[changeCart,setChangeCart]=useState(false);
    const ChangeCart=(props)=>{
        setChangeCart(!changeCart)
    }
    let cart=["btnImg"];
    if (changeCart){
        cart.push("Rotate");
    }
    let carts=["button"];
    if (changeCart){
        carts.push("buttonPadding");
    }
    return(
        <>
            <div className="ReviewButton">
                <div className="backgroundButton" style={{top:showReview?"-7px":"-20px"}}>
                    <button className={carts.join(' ')}>
                        <img src={Close} alt="close" className={cart.join(' ')} onClick={ChangeCart} style={{
                            paddingTop:changeCart?"5px":"0",transition:changeCart?"0.1s":"0.1s"}} 
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
export default ReviewButton;