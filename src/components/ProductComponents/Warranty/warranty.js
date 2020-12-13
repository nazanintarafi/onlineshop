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
            <div className="Warranty">
                <h3 onClick={HideWarranty}>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</h3>
                <hr />
                <span>گارانتی شرکتی 18 ماهه</span>
                <hr />
                <span onClick={HideWarranty}>گارانتی پارسیان</span>
                <hr />
            </div>
        </>
    )
}
export default Warranty;