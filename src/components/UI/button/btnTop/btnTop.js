import React, { useState } from 'react';
import './btnTop.css';
const BtnTop =(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    let classes=["btnImg"];
    if (top){
        classes.push("Rotate");
    }
    return(
        <div className="backgroundButton">
            <button onClick={props.clicked} className="button">
                <img src={props.imgName} alt="down" className={classes.join(' ')} onClick={Top} style={{
                    paddingTop:top?"10px":null,paddingBottom:props.paddingProduct?"6px":null,
                    paddingTop:props.paddingProduct?"0px 0":null,transform:top?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                    transition:top?"all 0.5s":"all 0.5s"}} />
            </button>
        </div>
    )
}
export default BtnTop;
{/*harja sedash kardi 
btnType="seeAll"
clicked={props.deleted}

<Button btnType="seeAll" clicked={props.deleted}>حذف</Button>
*/}