import React, {useState} from 'react';

export const CartContext = React.createContext();
const CartContextProvider=(props)=>{

    const[showAddress,setShowAddress]=useState(false);
    const[showReview,setShowReview]=useState(false);
    const[showLoader,setShowLoader]=useState(false);

    const ShowLoader=(props)=>{
        setShowLoader(!showLoader)
    }

    const ShowAddress=()=>{
        setShowAddress(!showAddress);
        setShowReview(false);
    }

    const ShowReview=()=>{
        setShowReview(!showReview);
    }


    return(
        <CartContext.Provider value={{showLoader,showAddress,showReview,ShowAddress,ShowReview,ShowLoader}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;