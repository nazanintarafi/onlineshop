import React , {useState} from 'react';
import './variety.css';
import Button from '../../UI/button/button';
const Variety=(props)=>{
    return(
        <> 
            <div className="Variety">
                <div className="VarietyButton">
                    <Button btnType="seeAll" />
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-3 col-3">
                        <span>مشکی</span>
                    </div>
                    <div className="col-md-3 col-xs-3 col-3">
                        <span>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Variety;
