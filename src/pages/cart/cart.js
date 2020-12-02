import React from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
const Cart=(props)=>{
    return(
        <>
            <div className="Cart">
                <div className="firstPage">
                    <YourCart />
                </div>
            </div>
        </>
    )
}
export default Cart;