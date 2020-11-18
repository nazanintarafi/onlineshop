import React, { useState } from 'react';
import './btnTop.css';
import down from '../../../../assets/images/down-arrow.png';
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
                <img src={down} alt="down" className={classes.join(' ')} onClick={Top} style={{transform:top?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
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