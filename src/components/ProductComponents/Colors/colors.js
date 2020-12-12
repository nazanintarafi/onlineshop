import React,{useState} from 'react';
import Variety from '../Variety/variety';
import './colors.css';
const Colors=(props)=>{
    const[openVariety,setOpenVariety]=useState(false);
    const OpenVariety=()=>{
        setOpenVariety(!openVariety)
    }
    let opnVariety=["opnVariety"];
    switch(openVariety){
        case true:
            opnVariety.push("showVariety");
            break;
        default:
            break; 
    }
    return(
        <>
            <div className="Colors">
                <div>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName">نقره ای</span>
                    </label>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >سفید</span>
                    </label>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >طلایی</span>
                    </label>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >رزگلد</span>
                    </label>
                    <label onClick={OpenVariety} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >سرمه ای</span>
                    </label>
                </div>
            </div>
            <div className={opnVariety.join(' ')}>
                
            </div>
        </>
    )
}
export default Colors;