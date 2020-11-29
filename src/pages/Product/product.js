import React, { useState } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import Specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';
import topArrow from '../../assets/images/top-arrow (2).png';

const Product=(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    return(
        <>
            <div className="Product" style={{
                    position:props.show?'fixed':'relative',right:props.show?'150px':'0px',
                    top:props.show?'0px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 1s':'all 1s',zIndex:props.show?'100':"null",overflow:top?"hidden":"null"}}>
                <div className="First">
                    <div style={{opacity:top?"0":"1"}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{opacity:top?"1":"0",width:"100%",height:"100%"}}>
                        <Specifications />
                    </div>
                    <div className="logIn" style={{height:top?'14%':'40%',position:top?'absolute':null,
                        top:top?'15px':null,transition:top?'all 0.5s':'all 0.5s'}}>
                        <div className="logInContent">
                            <div className="detail">
                                <h2 style={{marginTop:top?'-20px':'50px',width:"100%"}}>مشخصات محصول</h2>
                            </div>
                            <div className="test">
                                <BtnTop clicked={Top} imgName={topArrow} paddingProduct="true"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);