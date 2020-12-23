import React , {useState , useContext} from 'react';
import Button from '../../UI/button/button';
import './variety.css';
import Colors from '../Colors/colors';
import Warranty from '../Warranty/warranty';
import {ProductContext} from '../../../context/productContext/productContext';

const Variety=(props)=>{
    const productContext = useContext (ProductContext);
    const { variety , color , warranty , price} = productContext;

    const ShowVariety=()=>{
        productContext.ShowVariety()
    }

    const ShowColor=()=>{
        productContext.ShowColor();
    }

    const ShowWarranty=()=>{
        productContext.ShowWarranty();
    }


    const HidePrice=()=>{
        productContext.HidePrice()
    }

    let classes=["VarietyAnime"];
    switch(variety){
        case true:
            classes.push("VarietyAnimation");
            break;
        case false:
            classes.push("VarietyCloseAnimation");
            break;
        default:
            break; 
    }



    let select=["ProductSelection"];
    switch(variety){
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
            <div className="Variety">
                <div style={{display:warranty?"none":"block"}}>
                    <div className={classes.join(' ')} style={{display:color?"none":"block"}}>
                        <div className={select.join(' ')}>
                            <div className="varietyBtn"  onClick={ShowVariety}>
                                <span onClick={HidePrice}>
                                    <Button btnType="submit" >ثبت تنوع</Button>
                                </span>
                            </div>
                            <div className="row VarietyContent">
                                <div className="col-3 col-xs-4 col-md-4 varifyColor p-0">
                                    <div>
                                        <span onClick={ShowColor}>نقره ای</span>
                                    </div>
                                </div>
                                <div className="col-9 col-xs-8 col-md-8 BorderRightV">
                                    <div>
                                        <span onClick={ShowWarranty}>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</span>
                                    </div>
                                </div>
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
            </div>
        </>
    )
}
export default Variety;
