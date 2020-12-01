import React,{useState} from 'react';
import './colors.css';
const Colors=(props)=>{
    return(
        <>
            <div className="Colors">
                <div>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="colorName" >مشکی</span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Colors;