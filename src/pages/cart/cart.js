import React from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
import SelectAddress from "../../components/CartComponents/selectAddress/selectAddress";
import ReviewCart from "../../components/CartComponents/reviewCart/reviewCart";
import Successful from "../../components/CartComponents/successful/successful";
import EmptyCart from "../../components/CartComponents/emtyCart/emptyCart";
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
                <div className="secondPageContent" style={{display:"block"}}>
                    <EmptyCart />
                </div>
                <div className="thirdPageContent" style={{display:"none"}}>
                    <ReviewCart />
                </div>
                <div className="forthPageContent" style={{display:"none"}}>
                    <Successful />
                </div>
            </div>
        </>
    )
}
export default Cart;