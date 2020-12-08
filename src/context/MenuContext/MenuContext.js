import React, {useState} from 'react';

export const MenuContext = React.createContext();
const MenuContextProvider=(props)=>{
    const[show,setShow]=useState(false);
    const Show=()=>{
        setShow(!show)
    }
    return(
        <MenuContext.Provider value={{show,Show}}>
            {props.children}
        </MenuContext.Provider>
    )
}
export default MenuContextProvider;