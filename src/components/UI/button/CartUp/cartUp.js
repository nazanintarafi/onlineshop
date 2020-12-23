import React, { useState , useContext } from 'react';
import './cartUp.css';
import {CartContext} from '../../../../context/CartContext/cartContext';

const CartUp =(props)=>{

    const cartContext = useContext (CartContext);
    const { ShowReview } = cartContext;


    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    let classes=["btnImg"];
    if (top){
        classes.push("Rotate");
    }

    let btnClass=["button"];
    if (ShowReview){
        btnClass.push("buttonShadow");
    }


    return(
        <div className="CartUp">
            <div className="backgroundButton">
                <button onClick={props.clicked} className={btnClass.join(' ')}>
                    <img src={props.imgName} alt="down" className={classes.join(' ')} onClick={Top} style={{paddingBottom:top?"0px":"5px",
                    paddingTop:top?"1px":'0px'}} />
                </button>
            </div>
        </div>
    )
}
export default CartUp;