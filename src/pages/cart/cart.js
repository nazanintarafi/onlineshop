import React from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
import SelectAddress from "../../components/CartComponents/selectAddress/selectAddress";

const Cart=(props)=>{
    return(
        <>
            <div className="Cart">
                <div className="firstPage">
                <YourCart />
                    {/*<div className="firstPageContent">
                        <SelectAddress />
                    </div>*/}
                    
                </div>
            </div>
        </>
    )
}
export default Cart;