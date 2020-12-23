import React, {useState} from 'react';

export const CartContext = React.createContext();
const CartContextProvider=(props)=>{

    const[showAddress,setShowAddress]=useState(false);
    const[showReview,setShowReview]=useState(false);

    const ShowAddress=()=>{
        setShowAddress(!showAddress);
    }

    const ShowReview=()=>{
        setShowReview(!showReview);
    }


    return(
        <CartContext.Provider value={{showAddress,showReview,ShowAddress,ShowReview}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;