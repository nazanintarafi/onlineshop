import React, {useState} from 'react';
import './cartButton.css';
import Close from '../../../../assets/images/Group 6.png';
const CartButton=(props)=>{
    const[changeCart,setChangeCart]=useState(false);
    const ChangeCart=(props)=>{
        setChangeCart(!changeCart)
    }
    let cart=["btnImg"];
    if (changeCart){
        cart.push("Rotate");
    }
    return(
        <>
            <div className="addressBtn">
                <div className="backgroundButton">
                    <button className="button">
                        <img src={Close} alt="close" className="btnImg"  className={cart.join(' ')} onClick={ChangeCart} style={{
                            paddingTop:changeCart?"5px":"0",transition:changeCart?"0.1s":"0.1s"}} 
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
export default CartButton;