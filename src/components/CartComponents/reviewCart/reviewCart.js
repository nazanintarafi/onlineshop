import React from 'react';
import './reviewCart.css';
import ReviewButton from '../../UI/button/reviewButton/reviewButton';
import CartBox from '../../../containers/ProductBox/cartBox/cartBox';
import image01 from '../../../assets/images/Cosmetics (3).png';
import Button from '../../UI/button/button';

const ReviewCart=(props)=>{





    return(
        <>
            <div className="ReviewCart">
                <div className="reviewButton">
                    <ReviewButton />
                </div>
                <div className="reviewGoBack">
                    <h3>بازبینی خرید</h3>
                </div>
                <div className="CartBoxReview">
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
                        <span>مبلغ قابل پرداخت </span>
                        <span>11,600,000</span>
                    </p>
                </div>
                <hr />
                <div className="finallReview">
                    <p>این سفارش به آرین رئیسی به آدرس پاسداران، کوچه 
                        نارنجستان دوم،  شماره تماس 09197149088 تحویل می گردد</p>
                </div>
                <div className="confirm">
                    <Button btnType="signUp">تایید و پرداخت</Button>
                </div>
            </div>
        </>
    )
}
export default ReviewCart;