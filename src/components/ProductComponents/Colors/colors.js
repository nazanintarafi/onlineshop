import React,{ useContext} from 'react';
import './colors.css';
import {ProductContext} from '../../../context/productContext/productContext';

const Colors=(props)=>{

    const productContext = useContext (ProductContext);
    const {  color } = productContext;


    const HideColor=()=>{
        productContext.ShowColor();
    }


    return(
        <>
            <div className="Colors" style={{display:color?"block":"none"}}>
                <div>
                    <label >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor}>مشکی</span>
                    </label>
                    <label  >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor} >نقره ای</span>
                    </label>
                    <label  >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor} >سفید</span>
                    </label>
                    <label  >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor} >طلایی</span>
                    </label>
                    <label  >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor} >رزگلد</span>
                    </label>
                    <label  >
                        <input type="radio" name="colors"/>
                        <span className="colorName" onClick={HideColor} >سرمه ای</span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Colors;