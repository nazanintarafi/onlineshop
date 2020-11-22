import React, { useState } from 'react';
import './btnSeller.css';
import right from '../../../../../assets/images/Path 2113.png';
const BtnSeller=(props)=>{
    const[rightToggle,setRight]=useState(false);
    const Right=(props)=>{
        setRight(!rightToggle)
    }
    let classes=["btnImg"];
    if (rightToggle){
        classes.push("rotate");
    }
    return(
        <div className="rightBackgroundButton sellerBackBtn">
            <button onClick={props.clicked} className="rightButton sellerBtn">
                <img src={right} alt="right" className={classes.join(' ')} onClick={Right} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                transition:rightToggle?"all 0.5s":"all 0.5s"}} />
            </button>
        </div>
        
    )
}
export default BtnSeller;