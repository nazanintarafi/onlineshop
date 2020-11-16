import React from 'react';
import './discount.css';
const Discount=(props)=>{
    const Discountt=()=>{
        return(
            <span>{props.discount}</span>
        )
    }
    let text=<Discountt />
    if (props.isDiscount){
        text=<Discountt />
    }
    return(
        <div className="discount">
            <span>{text}</span>
        </div>
    )
}
export default Discount;