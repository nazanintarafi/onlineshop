import React, { useState , useContext } from 'react';
import './yourCart.css';
import CartBox from '../../../containers/ProductBox/cartBox/cartBox';
import image01 from '../../../assets/images/Cosmetics (3).png';
import CloseButton from '../../UI/button/btnClose/btnClose';
import {Link} from 'react-router-dom';
import emptyCart from '../../../assets/images/Group 1728.png';
import Button from '../../UI/button/button';
import CartUp from '../../UI/button/CartUp/cartUp';
import CartTop from '../../../assets/images/top.png';
import {CartContext} from '../../../context/CartContext/cartContext';
import {MenuContext} from '../../../context/MenuContext/MenuContext';


const YourCart=(props)=>{

    const cartContext = useContext (CartContext);
    const { showReview ,ShowReview, showAddress , ShowAddress} = cartContext;
    const menuContext = useContext (MenuContext);
    const {showMainMenu } = menuContext;

    const goTop=()=>{
        cartContext.ShowAddress();
    }


   

    return(
        <>

            <div className="closeCart" style={{display:showMainMenu?"none":"block"}}>
                <div className="closeBTN">
                    <Link to="/arthboard" className="CloseBtn" style={{display:showAddress?"none":"block"}}>
                        <CloseButton />
                    </Link>   
                </div>
                <div className="yourCartTitre">
                    <h2>سبد خرید شما</h2>
                </div>
            </div>
            <div className="YourCart">
             

                {/*محتوا*/}
                <div className="yourOrder" style={{display:showAddress?"none":"block"}}>
                    <CartBox
                        cartIMG={image01}
                        color="مشکی"
                        warranty="ضمانت سلامت تحویل کالا آنلاین شاپ"
                        storeName="آنلاین شاپ"
                        oldPrice="6,000,000تومان"
                        newPrice="12,000,000تومان"
                        number="1"
                    />
                    
                    <div className="prices">
                        <div>
                            <p className="cartPrice">
                                <span>مجموع قیمت ها</span>
                                <span>12,250,000</span>
                            </p>
                            <p className="cartPrice">
                                <span>قیمت ارسال</span>
                                <span>0</span>
                            </p>
                            <p className="borderBotton">
                                <span>کد تخفیف</span>
                            </p>
                            <p className="borderBotton">
                                <span>کارت هدیه</span>
                            </p>
                            <p className="borderBotton boldDiscount">
                                <span>مجموع تخفیف ها</span>
                                <span>650,000</span>
                            </p>
                            <p className="cartPrice">
                                <span>مبلغ قابل پرداخت</span>
                                <span>11,600,000</span>
                            </p>
                        </div>
                        <div style={{display:"none"}}>
                            <div className="emptyImg">
                                <img src={emptyCart} alt="online shop" />
                                <p>سبد خرید شما خالی است</p>
                            </div>
                            <Link to="/" className="emptyBtn">
                                <Button btnType="seeAll">خرید کنید</Button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
            
            <div className="emptyChooseAddress" style={{display:showMainMenu?"none":"block",top:showAddress?"30px":null,
                bottom:showAddress?null:'8px',height:showReview?"5.5%":"18%",
                zIndex:showReview?"10":null,position:showAddress?"absolute":"fixed"
            }}>
                    <div className="chooseBTN" onClick={goTop} style={{zIndex:ShowReview?"3":null}}>
                        <CartUp imgName={CartTop} />
                    </div>
                    <div className="chooseTitre">
                        <h2>انتخاب آدرس</h2>
                    </div>
            </div>
        </>
    )
}
export default YourCart;

