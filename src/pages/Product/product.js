import React, { useState , useContext } from 'react';
import './product.css';
import Btntop from '../../components/UI/button/btnTop/btnTop';
import Specifications from '../../components/ProductContent/specifications/specifications';
import ProductContent from '../../components/ProductContent/productContent';
import topArrow from '../../assets/images/top-arrow (2).png';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import {ProductContext} from '../../context/productContext/productContext';

const Product=(props)=>{
    const productContext = useContext (ProductContext);
    const { variety } = productContext;

    const[topProduct,setTopProduct]=useState(false);
    const TopProduct=(props)=>{
        setTopProduct(!topProduct)
    }
    const {show} = useContext(MenuContext);


    let classes=["MainProduct"];
    switch(variety){
        case true:
            classes.push("MainProductHeight");
            break;
        default:
            break; 
    }

    let topClasses=["Product"];
    switch(show){
        case true:
            topClasses.push("ProductUp");
            break;
        case false:
            topClasses.push("ProductDown");
            break;
        default:
            break; 
    }


    return(
        <> 
            <div  className={topClasses.join(' ')}>
                <Toolbar />
                <div className="First">
                    <div style={{display:topProduct?"none":"block",width:topProduct?"0":"100%",height:topProduct?"0":"100%",transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <ProductContent />
                    </div>
                    <div className="specifications" style={{display:topProduct?"block":"none",width:topProduct?"100%":"0",height:topProduct?"100%":"0",
                        transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <Specifications />
                    </div>
                    <div className={classes.join(' ')} style={{marginTop:topProduct?"0":null,height:topProduct?'12%':'30%',position:topProduct?'absolute':'absolute',
                        bottom:topProduct?null:'0',top:topProduct?'5px':null,transition:topProduct?'all 0.1s':'all 0.1s'}}>
                        <div className="ProductContents">
                            <div className="detail">
                                <h2 style={{marginTop:topProduct?'20px':'17px',width:"100%",paddingRight:"10%"}}>مشخصات محصول</h2>
                                <div className="priceProductPage" style={{display:topProduct?"none":"block"}}>
                                    <div>
                                        <del>8,300,000</del>
                                        <p>7,300,000<span>تومان</span></p>
                                    </div>
                                </div>
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