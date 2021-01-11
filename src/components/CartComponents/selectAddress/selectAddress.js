import React, { useState , useContext } from 'react';
import './selectAddress.css';
import AddressBox from '../../AddressBox/addressBox';
import Button from '../../UI/button/button';
import {Link} from 'react-router-dom';
import ReviewButton from '../../UI/button/reviewButton/reviewButton';
import {CartContext} from '../../../context/CartContext/cartContext';
import {MenuContext} from '../../../context/MenuContext/MenuContext';

const SelectAddress=(props)=>{

    const cartContext = useContext (CartContext);
    const { showReview , ShowReview , showAddress , showLoader} = cartContext;

    const menuContext = useContext (MenuContext);
    const {showMainMenu } = menuContext;

    const goTop=()=>{
        cartContext.ShowReview();
    }


    let topClasses=["reviewButtonPos"];
    switch(showReview){
        case true:
            topClasses.push("newReviewButtonPos");
            break;
        default:
            break; 
    }



    return(
        <>
            <div style={{display:showMainMenu?"none":"block"}}>
                <div className={topClasses.join(' ')} style={{
                position:showReview?"absolute":"fixed",bottom:showReview?null:'50px',display:showAddress?"block":"none"}}>
                    <div style={{display:showLoader?"none":"block"}}>
                        <div className="reviewButton" onClick={goTop} style={{zIndex:ShowReview?"1":null}}>
                            <ReviewButton />
                        </div>
                        <div className="reviewGoBack">
                            <h3>بازبینی خرید</h3>
                        </div>
                    </div>
                </div>
            </div>


            {/*محتوا*/}
            <div style={{display:showReview?"none":"block"}}>
                <div className="SelectAddress" style={{display:showAddress?"block":"none"}}>
                    <AddressBox 
                        address="تهران،تهران،نوبنیاد،نارنجستان دوم، پلاک 4"
                    />
                    <AddressBox 
                        address="تهران،تهران،نوبنیاد،نارنجستان دوم، پلاک 4"
                    />
                    <AddressBox 
                        address="تهران،تهران،نوبنیاد،نارنجستان دوم، پلاک 4"
                    />
                        
                    <Link to="/add-address" className="addAddress">
                        <Button btnType="signUp">افزودن آدرس جدید</Button>
                    </Link>

                </div>
            </div>
        </>
    )
}
export default SelectAddress;