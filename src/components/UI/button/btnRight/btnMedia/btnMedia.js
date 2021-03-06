import React, { useState, useContext } from 'react';
import './btnMedia.css';
import right from '../../../../../assets/images/Path 2113.png';
import {MediaContext} from '../../../../../context/MediaContext/mediaContext';


const BtnMedia=(props)=>{
    const[rightToggle,setRight]=useState(false);
    const Right=(props)=>{
        setRight(!rightToggle)
    }

    const mediaContext = useContext(MediaContext);
    const { mediaMenu2 , mediaMenu } = mediaContext ;  

    
    const ShowMediaMenu2=()=>{
        mediaContext.ShowMediaMenu2();
    }

    const Show=()=>{
        mediaContext.MediaMenu();
    }


    let imgClasses=["btnImg"];
    if (rightToggle){
        imgClasses.push("rotate");
    }
    
    return(
        <div className="BtnMedia">
            <div onClick={ShowMediaMenu2}>
                <div onClick={Show}>
                    <button onClick={props.clicked} className="rightMediaButton">
                        <img src={right} alt="right"className={imgClasses.join(' ')} onClick={Right} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                        transition:rightToggle?"all 0.2s":"all 0.2s"}} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BtnMedia;
