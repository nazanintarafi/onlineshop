import React, { useState, useContext} from 'react';
import './btnRight.css';
import right from '../../../../assets/images/Group 1569.png';
import {MenuContext} from '../../../../context/MenuContext/MenuContext';


const BtnRight=(props)=>{
    const[rightToggle,setRight]=useState(false);
    const Right=(props)=>{
        setRight(!rightToggle)
    }
    let classes=["btnImg"];
    if (rightToggle){
        classes.push("rotate");
    }

    const {show} = useContext(MenuContext); 

    return(
        <div className="rightBackgroundButton" style={{display:show?"none":"block"}}>
            <button onClick={props.clicked} className="rightButton">
                <img src={right} alt="right" onClick={Right} className={classes.join(' ')} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                transition:rightToggle?"all 0.1s":"all 0.1s"}} />
            </button>
        </div>
    )
}
export default BtnRight;