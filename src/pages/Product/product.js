import React, { useState } from 'react';
import './product.css';
import Btntop from '../../components/UI/button/btnTop/btnTop';
import Specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';
import topArrow from '../../assets/images/top-arrow (2).png';

const Product=(props)=>{
    const[topProduct,setTopProduct]=useState(false);
    const TopProduct=(props)=>{
        setTopProduct(!topProduct)
    }
    return(
        <>
            <div className="Product">
                <div className="First">
                    <div style={{opacity:topProduct?"0":"1",transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{display:"none",opacity:topProduct?"1":"0",width:"100%",height:"100%",
                        transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <Specifications />
                    </div>
                    <div className="MainProduct" style={{display:"none",height:topProduct?'14%':'40%',position:topProduct?'absolute':null,
                        top:topProduct?'15px':null,transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <div className="ProductContent">
                            <div className="detail">
                                <h2 style={{marginTop:topProduct?'-20px':'50px',width:"100%"}}>مشخصات محصول</h2>
                            </div>
                            <div className="testProduct">
                                <Btntop clicked={TopProduct} imgName={topArrow} paddingProduct="true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);