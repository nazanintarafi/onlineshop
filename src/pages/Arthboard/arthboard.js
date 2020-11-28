import React from 'react';
import './arthboard.css';
import Body from '../../components/ProfilePagesBody/profilePagesBody';
import SearchBar from '../../components/searchBar/searchBar';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Slider from '../../components/slider/productSlider/productSlider';
const Arthboard=()=>{
    const breadcrumbs = useBreadcrumbs();
    return(
        <>
            <div className="Arthboard">
                <Body arthBtn="true" arthPage="true" sellerMenu="true">
                    <div className="search">
                        <SearchBar />
                    </div>
                    {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
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
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                        <Slider sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان"/>
                    </div>
                </Body>
            </div>
        </>
    )
}   
export default Arthboard;                          