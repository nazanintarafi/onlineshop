import React from 'react';
import './colors.css';
const Colors=(props)=>{
    return(
        <>
            <div className="Colors">
                <div className="SelectColor">
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">مشکی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">نقره ای</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">سفید</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">طلایی</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">رزگلد</span>
                    </label>
                    <label>
                        <input type="radio" name="colors"/>
                        <span className="checkColor">سرمه ای</span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Colors;


<label>
<input type="checkbox" name="checkbox"/>
<span className="checkbox"></span>
<span className="checkmark">شیائومی</span>
</label>