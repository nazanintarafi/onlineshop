import React from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
import SelectAddress from "../../components/CartComponents/selectAddress/selectAddress";

const Cart=(props)=>{
    return(
        <>
            <div className="Cart">
                <div className="firstPage">
                    <div className="firstPageContent">
                        <YourCart />
                    </div>
                </div>
                <div className="secondPageContent">
                    <SelectAddress />
                </div>
            </div>
        </>
    )
}
export default Cart;