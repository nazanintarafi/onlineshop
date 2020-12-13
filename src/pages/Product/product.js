import React, { useState , useContext } from 'react';
import './product.css';
import Btntop from '../../components/UI/button/btnTop/btnTop';
import Specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';
import topArrow from '../../assets/images/top-arrow (2).png';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import {MenuContext} from '../../context/MenuContext/MenuContext';

const Product=(props)=>{
    const[topProduct,setTopProduct]=useState(false);
    const TopProduct=(props)=>{
        setTopProduct(!topProduct)
    }
    const {show} = useContext(MenuContext);
    return(
        <>
            <div className="Product" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0',
                    top:show?'90px':'0px',height:show?'390px':'100vh',overflowX:show?'hidden':'auto',overflowY:topProduct?'auto':'hidden',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
                <Toolbar />
                <div className="First">
                    <div style={{display:topProduct?"none":"block",width:topProduct?"0":"100%",height:topProduct?"0":"100%",transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{display:topProduct?"block":"none",width:topProduct?"100%":"0",height:topProduct?"100%":"0",
                        transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <Specifications />
                    </div>
                    <div className="MainProduct" style={{marginTop:topProduct?"0":null,height:topProduct?'12%':'30%',position:topProduct?'absolute':'absolute',
                        bottom:topProduct?null:'0',top:topProduct?'5px':null,transition:topProduct?'all 0.1s':'all 0.1s'}}>
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