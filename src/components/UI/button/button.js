import React from 'react';
import './button.css';
const Button =(props)=>{
    let classes=["Button"];
    switch(props.btnType){
        case "seeAll":
            classes.push("seeAll");
            break;
        case "submit":
            classes.push("submit");
            break;
        case "changePass":
            classes.push("changePass");
            break;
        case "cancel":
            classes.push("cancel");
            break;
        case "signUp":
            classes.push("signUp");
            break;
        case "login":
            classes.push("login");
            break;
        case "top":
            classes.push("top");
            break;
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
/*harja sedash kardi :
<Button btnType="seeAll" clicked={props.deleted}>حذف</Button>
*/