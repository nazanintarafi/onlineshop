import React, { useState } from 'react';
import './product.css';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
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
            <div className="Product" style={{
                    position:props.show?'fixed':'relative',right:props.show?'150px':'0px',
                    top:props.show?'0px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 1s':'all 1s',zIndex:props.show?'100':"null",overflow:topProduct?"hidden":"null"}}>
                <div className="First">
                    <div style={{opacity:topProduct?"0":"1",transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{display:"none",opacity:topProduct?"1":"0",width:"100%",height:"100%",
                        transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <Specifications />
                    </div>
                    <div className="logIn" style={{display:"none",height:topProduct?'14%':'40%',position:topProduct?'absolute':null,
                        top:topProduct?'15px':null,transition:topProduct?'all 0.3s':'all 0.3s'}}>
                        <div className="logInContent">
                            <div className="detail">
                                <h2 style={{marginTop:topProduct?'-20px':'50px',width:"100%"}}>مشخصات محصول</h2>
                            </div>
                            <div className="test">
                                <BtnTop clicked={TopProduct} imgName={topArrow} paddingProduct="true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);