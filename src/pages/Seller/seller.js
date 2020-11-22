import React, {useState} from 'react';
import "./seller.css";
import Button from '../../components/UI/button/button';
import Body from '../../components/ProfilePagesBody/profilePagesBody';
import Slider from '../../components/slider/productSlider/productSlider';

const Seller=(props)=>{
    return(
        <>
            <div className="orders">
                <Body titre="سفارش ها" sellerPage="true">
                    <Slider sliderType="wide"/>
                </Body>
            </div>
        </>
    )
}
export default Seller;