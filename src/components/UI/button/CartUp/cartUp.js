import React, { useState } from 'react';
import './cartUp.css';
const CartUp =(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    let classes=["btnImg"];
    if (top){
        classes.push("Rotate");
    }
    return(
        <div className="CartUp">
            <div className="backgroundButton">
                <button onClick={props.clicked} className="button">
                    <img src={props.imgName} alt="down" className={classes.join(' ')} onClick={Top} style={{paddingBottom:top?"0px":"5px",
                    paddingTop:top?"1px":'0px'}} />
                </button>
            </div>
        </div>
    )
}
export default CartUp;