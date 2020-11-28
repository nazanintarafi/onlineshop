import React, { useState } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';

const Product=(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    return(
        <>
            <div className="Product" style={{
                    position:props.show?'fixed':'relative',right:props.show?'150px':'0px',
                    top:props.show?'110px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 1s':'all 1s',zIndex:props.show?'100':"null",overflow:top?"hidden":"null"}}>
                <div className="First">
                    <ProductContent />
                    <div className="logIn" style={{height:top?'20%':'40%',top:top?'100%':'180px',transition:top?'all 0.5s':'all 0.5s'}}>
                        <div className="logInContent">
                            <div className="detail">
                                <h2>مشخصات محصول</h2>
                            </div>
                            <div className="test">
                                <BtnTop clicked={Top}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);