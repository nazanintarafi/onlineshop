import React , {useState , useContext} from 'react';
import Button from '../../UI/button/button';
import './variety.css';
import Colors from '../Colors/colors';
import Warranty from '../Warranty/warranty';
import {ProductContext} from '../../../context/productContext/productContext';

const Variety=(props)=>{
    const productContext = useContext (ProductContext);
    const { variety , color , warranty } = productContext;

    const HideVariety=()=>{
        productContext.ShowVariety()
    }

    const ShowColor=()=>{
        productContext.ShowColor()
    }

    const ShowWarranty=()=>{
        productContext.ShowWarranty()
    }

    let classes=["Variety"];
    if(props.variety){
        classes.push("VarietyAnimation");
    }
    if(color){
        classes.push("closeVariety")
    }

    let select=["ProductSelection"];
    switch(props.variety){
        case true:
            select.push("openProductSelection");
            break;
        default:
            break; 
    }


    let colors=["VarietyColors"];
    switch(color){
        case true:
            colors.push("colorAnimation");
            break;
        default:
            break; 
    }

    let warranties=["VarietyWarranty"];
    switch(warranty){
        case true:
            warranties.push("warrantyAnimation");
            break;
        default:
            break; 
    }




    return(
        <>
            <div  className={classes.join(' ')}>
                <div className={select.join(' ')}>
                    <div className="varietyBtn"  onClick={HideVariety}>
                        <Button btnType="submit" >ثبت تنوع</Button>
                    </div>
                    <div className="row VarietyContent">
                        <div className="col-3 col-xs-4 col-md-4 varifyColor p-0">
                            <span onClick={ShowColor}>نقره ای</span>
                        </div>
                        <div className="col-9 col-xs-8 col-md-8 BorderRightV" onClick={ShowWarranty}>
                            <span>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={colors.join(' ')}>
                <Colors />
            </div>

            <div  className={warranties.join(' ')}>
                <Warranty />
            </div>
            <Warranty />
        </>
    )
}
export default Variety;
