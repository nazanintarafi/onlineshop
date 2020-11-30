import React from 'react';
import Button from '../UI/button/button';
import Colors from './colors/colors';
import Warranty from './warranty/warranty';
import './variety.css';
const Variety=(props)=>{
    return(
        <>
            <div className="Variety">
                <div className="varietyBtn">
                    <Button btnType="submit" >ثبت تنوع</Button>
                </div>
                <div className="row VarietyContent">
                    <div className="col-3 col-xs-4 col-md-4 varifyColor p-0">
                        <span>نقره ای</span>
                    </div>
                    <div className="col-9 col-xs-8 col-md-8 BorderRightV">
                        <span>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</span>
                    </div>
                </div>
            </div>
            <div className="VarietyColors">
                <Colors />
            </div>
            <div className="VarietyWarranty">
                <Warranty />
            </div>
        </>
    )
}
export default Variety;