import React from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
import SelectAddress from "../../components/CartComponents/selectAddress/selectAddress";
import ReviewCart from "../../components/CartComponents/reviewCart/reviewCart";
const Cart=(props)=>{
    return(
        <>
            <div className="Cart">
                <div className="firstPage" style={{display:"none"}}>
                    <div className="firstPageContent">
                        <YourCart />
                    </div>
                </div>
                <div className="secondPageContent" style={{display:"none"}}>
                    <SelectAddress />
                </div>
                <div className="secondPageContent" style={{display:"none"}}>
                    <SelectAddress />
                </div>
                <div className="thirdPageContent">
                    <ReviewCart />
                </div>
            </div>
        </>
    )
}
export default Cart;