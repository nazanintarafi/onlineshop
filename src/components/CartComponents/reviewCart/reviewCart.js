import React, { useState , useContext } from 'react';
import './reviewCart.css';
import CartBox from '../../../containers/ProductBox/cartBox/cartBox';
import image01 from '../../../assets/images/Cosmetics (3).png';
import Button from '../../UI/button/button';
import {CartContext} from '../../../context/CartContext/cartContext';

const ReviewCart=(props)=>{

    const cartContext = useContext (CartContext);
    const { showReview , showLoader} = cartContext;


    const ShowLoaderReview=(props)=>{
        cartContext.ShowLoader();
    }


    return(
        <>
            <div className="ReviewCart" style={{display:showReview?"block":"none",paddingTop:showLoader?"215px":null,
                filter:showLoader?"blur(12px)":null,
                zIndex:showLoader?"499":null,height:showLoader?"100vh":"100vh"}}>
                {/*محتوا*/}
                <div className="CartBoxReview" style={{display:showReview?"block":"none"}}>

                    <div className="productPadding">
                        <CartBox
                            cartIMG={image01}
                            color="مشکی"
                            warranty="ضمانت سلامت تحویل کالا آنلاین شاپ"
                            storeName="آنلاین شاپ"
                            oldPrice="6,000,000تومان"
                            newPrice="12,000,000تومان"
                            number="1"
                            review="true"
                        />
                        <CartBox
                            cartIMG={image01}
                            color="مشکی"
                            warranty="ضمانت سلامت تحویل کالا آنلاین شاپ"
                            storeName="آنلاین شاپ"
                            oldPrice="6,000,000تومان"
                            newPrice="12,000,000تومان"
                            number="1"
                            review="true"
                        />
                    </div>
                    <hr />
                    <div className="reviewPriceBox">
                        <p>
                            <span>مجموع قیمت ها</span>
                            <span>12,250,000</span>
                        </p>
                        <p className="OrangePrice">
                            <span>مجموع تخفیف ها</span>
                            <span>650,000</span>
                        </p>
                        <p>
                            <span>قیمت ارسال</span>
                            <span>0</span>
                        </p>
                        <hr />
                        <p>
                            <span>مبلغ قابل پرداخت</span>
                            <span>11,600,000</span>
                        </p>
                    </div>
                    <hr />
                    <div className="bottomStyle">
                        <div className="finallReview">
                            <p>این سفارش به آرین رئیسی به آدرس پاسداران، کوچه 
                                نارنجستان دوم،  شماره تماس 09197149088 تحویل می گردد
                            </p>
                        </div>
                        <div className="confirm" onClick={ShowLoaderReview}>
                            <Button btnType="signUp">تایید و پرداخت</Button>
                        </div>
                    </div>
                </div>
            </div>


            {/*Loader*/}
            <div className="Loader" style={{display:showLoader?"block":"none"}}>
                <div className="LoaderContent">
                    <div class="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>در حال انتقال به درگاه پرداخت</p>
                </div>
            </div>

        </>
    )
}
export default ReviewCart;