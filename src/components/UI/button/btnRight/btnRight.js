import React, { useState } from 'react';
import './btnRight.css';
import right from '../../../../assets/images/Group 1569.png';
const BtnRight=(props)=>{
    const[rightToggle,setRight]=useState(false);
    const Right=(props)=>{
        setRight(!rightToggle)
    }
    let classes=["btnImg"];
    if (rightToggle){
        classes.push("rotate");
    }
    return(
        <div className="rightBackgroundButton">
            <button onClick={props.clicked} className="rightButton">
                <img src={right} alt="right" onClick={Right} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                transition:rightToggle?"all 0.5s":"all 0.5s"}} />
            </button>
        </div>
        
    )
}
export default BtnRight;