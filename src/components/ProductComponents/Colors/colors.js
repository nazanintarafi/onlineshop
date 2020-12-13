import React,{ useContext} from 'react';
import Variety from '../Variety/variety';
import './colors.css';
import {ProductContext} from '../../../context/productContext/productContext';
import product from '../../../pages/Product/product';

const Colors=(props)=>{

    const productContext = useContext (ProductContext);
    const {  color , variety } = productContext;


    const HideColor=()=>{
        productContext.ShowColor();
    }


    return(
        <>
            <div className="Colors" style={{display:color?"block":"none"}}>
                <div>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName">نقره ای</span>
                    </label>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >سفید</span>
                    </label>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >طلایی</span>
                    </label>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >رزگلد</span>
                    </label>
                    <label onClick={HideColor} >
                        <input type="radio" name="colors"/>
                        <span className="colorName" >سرمه ای</span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Colors;