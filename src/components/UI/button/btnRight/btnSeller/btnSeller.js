import React, { useState, useContext } from 'react';
import './btnSeller.css';
import right from '../../../../../assets/images/Path 2113.png';
import {MenuContext} from '../../../../../context/MenuContext/MenuContext';


const BtnSeller=(props)=>{
    const[rightToggle,setRight]=useState(false);
    const Right=(props)=>{
        setRight(!rightToggle)
    }


    const profileContext= useContext(MenuContext);

    const ShowSellerMenu=()=>{
        profileContext.ShowSellerMenu();
    }
    const Show=()=>{
        profileContext.Show();
    }


    let imgClasses=["btnImg"];
    if (rightToggle){
        imgClasses.push("rotate");
    }
    let classes=["rightButton"];
    switch(props.btnType){
        case "sellerBtn":
            classes.push("sellerBtn");
            break;
        case "arthBtn":
            classes.push("arthBtn");
            break;
        default:
            break; 
    }
    return(
        <>
            <div className="rightBackgroundButton sellerBackBtn">
                <div onClick={ShowSellerMenu}>
                    <div onClick={Show}>
                        <button onClick={props.clicked} className={classes.join(' ')}>
                            <img src={right} alt="right"className={imgClasses.join(' ')} onClick={Right} style={{transform:rightToggle?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                                transition:rightToggle?"all 0.2s":"all 0.2s"}} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BtnSeller;
