import React, { useState } from 'react';
import './product.css';
import Btntop from '../../components/UI/button/btnTop/btnTop';
import Specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';
import topArrow from '../../assets/images/top-arrow (2).png';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';

const Product=(props)=>{
    const[topProduct,setTopProduct]=useState(false);
    const TopProduct=(props)=>{
        setTopProduct(!topProduct)
    }
    //kojas ?bzan
    return(
        <>
            <div className="Product" style={{height:"100vh"}}>
                <Toolbar />
                <div className="First">
                    <div style={{opacity:topProduct?"0":"1",width:topProduct?"0":"100%",height:topProduct?"0":"100%",transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{opacity:topProduct?"1":"0",width:topProduct?"100%":"0",height:topProduct?"100%":"0",
                        transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <Specifications />
                    </div>
                    <div className="MainProduct" style={{marginTop:topProduct?"0":null,height:topProduct?'12%':'36%',position:topProduct?'absolute':null,
                        bottom:topProduct?null:'0',top:topProduct?'0':null,transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <div className="ProductContents">
                            <div className="detail">
                                <h2 style={{marginTop:topProduct?'20px':'17px',width:"100%",paddingRight:"10%"}}>مشخصات محصول</h2>
                            </div>
                            <div className="testProduct" onClick={TopProduct}>
                                <Btntop  imgName={topArrow} paddingProduct="true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);