import React from 'react';
import './form.css';
const Form=(props)=>{
    return(
        <div className="Form">
            <input type={props.type} placeholder={props.placeholder} className="Input"/>
        </div>
    )

}
export default Form;