import React,{useState , useContext} from 'react';
import Variety from '../Variety/variety';
import './colors.css';
import {ProductContext} from '../../../context/productContext/productContext';

const Colors=(props)=>{

    const productContext = useContext (ProductContext);
    const {  color } = productContext;


    const HideColor=()=>{
        productContext.ShowColor()
    }


    return(
        <>
            <div className="Colors">
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