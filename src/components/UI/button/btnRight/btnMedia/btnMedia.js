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
    const { mediaMenu1 } = mediaContext ;  

    
    const ShowMediaMenu1=()=>{
        mediaContext.ShowMediaMenu1();
    }


    let imgClasses=["btnImg"];
    if (rightToggle){
        imgClasses.push("rotate");
    }
    return(
        <div className="BtnMedia">
            <button onClick={props.clicked}  className="rightMediaButton">
                <div onClick={ShowMediaMenu1} >
                    <img src={right} alt="right"className={imgClasses.join(' ')} onClick={Right} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                    transition:rightToggle?"all 0.2s":"all 0.2s"}} />
                </div>
            </button>
        </div>
        
    )
}
export default BtnMedia;