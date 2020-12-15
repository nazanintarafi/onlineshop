import React, {useState} from 'react';

export const CartContext = React.createContext();
const CartContextProvider=(props)=>{
    const[show,setShow]=useState(false);
    const[showProfileMenu]=useState(false);
    const[showMainMenu,setShowMainMenu]=useState(false);
    const[showSellerMenu,setShowSellerMenu]=useState(false);
    

    const ShowMainMenu=()=>{
        setShowMainMenu(!showMainMenu);
    }

    const ShowSellerMenu=()=>{
        setShowSellerMenu(!showSellerMenu);
        setShowMainMenu(false)
    }

    const ShowProfileMenu=()=>{
        setShowMainMenu(false);
        setShowSellerMenu(false);
    } 

    const Show=()=>{
        setShow(!show)
    }


    return(
        <CartContext.Provider value={{showSellerMenu,show,showProfileMenu,showMainMenu,ShowSellerMenu,Show,ShowProfileMenu,ShowMainMenu}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;