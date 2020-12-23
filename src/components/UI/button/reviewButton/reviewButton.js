import React, {useState} from 'react';
import './reviewButton.css';
import Close from '../../../../assets/images/down-arrow.png';
const ReviewButton=(props)=>{
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
                <div className="backgroundButton">
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