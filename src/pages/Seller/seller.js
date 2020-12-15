import React from 'react';
import "./seller.css";
import Body from '../../components/ProfilePagesBody/profilePagesBody';
import Slider from '../../containers/ProductBox/productBox';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';

const Seller=(props)=>{
    return(
        <>
            <div className="Seller">
                <Body sellerPage="true" sellerBtn="true" sellerMenu="true">

                    <div className="SliderSeller">
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="30%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="30%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="30%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                    </div>
                </Body>
            </div>
        </>
    )
}
export default Seller;