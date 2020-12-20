import React, {useState} from 'react';

export const MenuContext = React.createContext();
const MenuContextProvider=(props)=>{
    const[show,setShow]=useState(false);
    const[showProfileMenu]=useState(false);
    const[showMainMenu,setShowMainMenu]=useState(false);
    const[showSellerMenu,setShowSellerMenu]=useState(false);
    const[closeBtn,setCloseBtn]=useState(false);
    const[mediaMenu,setMediaMenu]=useState(false);
    

    const MediaMenu=()=>{
        setMediaMenu(true);
        setShowMainMenu(false);
    }

    const hideMainMenu=()=>{
        setShowMainMenu(false);
        setShow(false)
    }
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
        <MenuContext.Provider value={{closeBtn,showSellerMenu,show,showProfileMenu,showMainMenu,ShowSellerMenu,Show,ShowProfileMenu,ShowMainMenu,hideMainMenu}}>
            {props.children}
        </MenuContext.Provider>
    )
}
export default MenuContextProvider;