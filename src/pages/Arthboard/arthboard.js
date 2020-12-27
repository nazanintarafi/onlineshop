import React from 'react';
import './arthboard.css';
import Body from '../../components/ProfilePagesBody/profilePagesBody';
import SearchBar from '../../components/searchBar/searchBar';
import Slider from '../../containers/ProductBox/productBox';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
const Arthboard=()=>{
    return(
        <>
            <div className="Arthboard">
                <Toolbar />
                <Body arthBtn="true" arthPage="true" sellerMenu="true">
                    <div className="search">
                        <SearchBar />
                    </div>
                    <div className="grouping container">
                        <div>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                        </div>
                        <div>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                        </div>
                    </div>
                    <div className="arthSlider">
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="30%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="10%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="5%"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                    </div>
                </Body>
            </div>
        </>
    )
}   
export default Arthboard;                          