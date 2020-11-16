import React from 'react';
import './button.css';
const Button =(props)=>{
    let classes=["Button"];
    switch(props.btnType){
        case "seeAll":
            classes.push("seeAll");
        case "submit":
            classes.push("submit");
        case "cancel":
            classes.push("cancel");
        case "signUp":
            classes.push("signUp");
        case "login":
            classes.push("login");
        case "top":
            classes.push("top");
        default:
            break; 
    }
    return(
        <button className={classes.join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
    )
}
export default Button;
{/*harja sedash kardi 
btnType="seeAll"
clicked={props.deleted}

<Button btnType="seeAll" clicked={props.deleted}>حذف</Button>
*/}