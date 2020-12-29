import React, {useState} from 'react';

export const MediaContext = React.createContext();
const MediaContextProvider=(props)=>{


    const[mediaMenu,setMediaMenu]=useState(false);
    const[mediaMenu1,setMediaMenu1]=useState(false);
    const[mediaMenu2,setMediaMenu2]=useState(false);
    


    const ShowMediaMenu1=()=>{
        setMediaMenu1(!mediaMenu1);
    }

    const ShowMediaMenu2=()=>{
        setMediaMenu2(!mediaMenu2);
        setMediaMenu1(false);
    }


    const MediaMenu=()=>{
        setMediaMenu(!mediaMenu)
    }


    return(
        <MediaContext.Provider value={{ mediaMenu1 , mediaMenu2 , mediaMenu , ShowMediaMenu1 , ShowMediaMenu2 , MediaMenu}}>
            {props.children}
        </MediaContext.Provider>
    )
}
export default MediaContextProvider;