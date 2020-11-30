import React from 'react';
import './warranty.css';
const Warranty=(props)=>{
    return(
        <>
            <div className="Warranty">
                <div>
                    <h2>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</h2>
                    <hr/>
                    <label>
                        <input type="radio" name="warranty"/>
                        <span className="radioWarranty">گارانتی شرکتی 18 ماهه</span>
                    </label>
                    <hr/>
                    <label>
                        <input type="radio" name="warranty"/>
                        <span className="radioWarranty">گارانتی پارسیان</span>
                    </label>
                    <hr/>
                </div>
            </div>
        </>
    )
}
export default Warranty;