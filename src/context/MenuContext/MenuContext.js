import React, {useState} from 'react';

export const MenuContext = React.createContext();
const MenuContextProvider=(props)=>{
    const[show,setShow]=useState(false);
    const[showProfileMenu]=useState(false);
    const[showMainMenu,setShowMainMenu]=useState(false);
    const[showSellerMenu,setShowSellerMenu]=useState(false);
    const[closeBtn,setCloseBtn]=useState(false);
    const[mediaMenu1,setMediaMenu1]=useState(false);
    const[mediaMenu2,setMediaMenu2]=useState(false);
    

    const ShowMediaMenu1=()=>{
        setMediaMenu1(true);
        setShowMainMenu(false);
        setMediaMenu2(false);
    }
    const ShowMediaMenu2=()=>{
        setMediaMenu2(true);
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
        <MenuContext.Provider value={{closeBtn,showSellerMenu,show,showProfileMenu,showMainMenu,mediaMenu1,mediaMenu2,
            ShowSellerMenu,Show,ShowProfileMenu,ShowMainMenu,hideMainMenu,ShowMediaMenu1,ShowMediaMenu2}}>
            {props.children}
        </MenuContext.Provider>
    )
}
export default MenuContextProvider;