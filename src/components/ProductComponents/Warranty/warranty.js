import React,{useContext} from 'react';
import './warranty.css';
import {ProductContext} from '../../../context/productContext/productContext';
const Warranty=(props)=>{

    const productContext = useContext (ProductContext);
    const {  warranty } = productContext;


    const HideWarranty=()=>{
        productContext.ShowWarranty()
    }


    return(
        <>
            <div className="Warranty" style={{display:warranty?"block":"none"}}>
                <h3>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</h3>
                <hr />
                <div className="typeOfWarranty">
                    <span onClick={HideWarranty}>گارانتی شرکتی 18 ماهه</span>
                    <hr />
                    <span onClick={HideWarranty}>گارانتی پارسیان</span>
                    <hr />
                    <span onClick={HideWarranty}>گارانتی پارسیان</span>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Warranty;