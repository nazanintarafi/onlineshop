import React, { useState , useContext } from 'react';
import './productContent.css';
import Stars from '../stars/stars';
import share from '../../assets/images/Group 1513.png';
import ring from '../../assets/images/Group 1516.png';
import video from '../../assets/images/Group 1514.png';
import product1 from '../../assets/images/119409286.png';
import Likee from '../../assets/images/likee.png';
import activeLike from '../../assets/images/like.png';
import img1 from '../../assets/images/Group 598.png';
import img2 from '../../assets/images/Group 599.png';
import img3 from '../../assets/images/Group 600.png';
import Variety from '../ProductComponents/Variety/variety';
import Button from '../UI/button/button';
import {ProductContext} from '../../context/productContext/productContext';


const ProductContent=(props)=>{
    const[like,setLike]=useState(false);
    const Like=(props)=>{
        setLike(!like)
    }

    const productContext = useContext (ProductContext);
    const { variety , color , warranty , price } = productContext;

    const HidePrice=()=>{
        productContext.HidePrice()
    }




    const ShowVariety=()=>{
        productContext.ShowVariety()
    }
    
    let classes=["productSelection"];
    switch(variety){
        case true:
            classes.push("CloseAnimation");
            break;
        case false:
            classes.push("openAnimation");
            break;
        default:
            break; 
    }

    let variiety=["VarietyStyle"];
    switch(variety){
        case true:
            variiety.push("VarietyAnimation");
            break;
        case false:
            variiety.push("CloseVarietyAnimation");
            break;
        default:
            break; 
    }


    let addButtonStyle=["add"];
    switch(variety){
        case true:
            addButtonStyle.push("varietyMargin");
            break;
        default:
            break; 
    }
    switch(color){
        case true:
            addButtonStyle.push("colorMargin");
            break;
        default:
            break; 
    }
    switch(warranty){
        case true:
            addButtonStyle.push("warrantyMargin");
            break;
        default:
            break; 
    }



    let paddingAnimationStyle=["topPadding"];
    switch(variety){
        case true:
            paddingAnimationStyle.push("varietyPaddingAnimation");
            break;
        default:
            break; 
    }
    switch(color){
        case true:
            paddingAnimationStyle.push("colorPaddingAnimation");
            break;
        default:
            break; 
    }
    switch(warranty){
        case true:
            paddingAnimationStyle.push("warrantyPaddingAnimation");
            break;
        default:
            break; 
    }

    let imgAnimation=["ProductIMG"];
    switch(variety){
        case true:
            paddingAnimationStyle.push("varietyImgAnimation");
            break;
        default:
            break; 
    }
  
    return(
        <>
            <div className="ProductContent">
                <div className={paddingAnimationStyle.join(' ')}>
                <div className="productTitre">
                    <h2>گوشی موبایل اپل مدل<span>iPhone 11 A2223</span></h2>
                    <div className="store">
                        <div>
                            <span>فروشگاه :</span>
                            <span>apple shop</span>
                        </div>
                        <div>
                            <Stars />
                        </div>
                    </div>
                </div>
                <div className="productImage">
                    <div className="First">
                        <ul className="productItems">
                            <li onClick={Like}>
                                <div className="like" style={{display:like?"none":"block"}}>
                                    <img src={Likee} alt="like"/>
                                </div>
                                <div className="activeLike" style={{display:like?"block":"none"}}>
                                    <img src={activeLike} alt="like"/>
                                </div>
                            </li>
                            <li>
                                <img src={share} alt="share"/>
                            </li>
                            <li>
                                <img src={ring} alt="ring"/>
                            </li>
                            <li>
                                <img src={video} alt="video"/>
                            </li>
                        </ul>
                        <div className={imgAnimation.join(' ')}>
                            <img src={product1} alt="online shop" className="ProductImG"/>
                        </div>
                    </div>
                </div>
                    <div className="btnProduct">
                        {/*variety*/}
                        <section className={variiety.join(' ')}>
                            <Variety />
                        </section>
                        <span className={classes.join(' ')} onClick={ShowVariety}>
                            <span onClick={HidePrice}>
                                <Button btnType="seeAll"><span>انتخاب تنوع</span></Button>
                            </span>
                        </span>
                        <span className={addButtonStyle.join(' ')}>
                            <Button btnType="submit" >افزودن به سبد خرید</Button>
                        </span>     
                    </div>
                    
                    <section>
                        <ul>
                            <li>
                                <div>
                                    <img src={img1} alt="online shop" />
                                </div>
                                <span>ضمانت اصل بودن کالا</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img2} alt="online shop" />
                                </div>
                                <span>تحویل اکسپرس</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img3} alt="online shop" />
                                </div>
                                <span>پشتیبانی 24 ساعته</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img1} alt="online shop" />
                                </div>
                                <span>پرداخت در محل</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img2} alt="online shop" />
                                </div>
                                <span>7 روز ضمانت بازگشت</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="testt">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xs-12 col-md-12">
                            <img src="../assets/images/1-01.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ProductContent;