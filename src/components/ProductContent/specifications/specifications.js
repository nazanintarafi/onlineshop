import React from 'react';
import './specifications.css';
import Left from "../../../assets/images/down-arrowx.png";
import Slider from '../../../containers/ProductBox/productBox';

const Specifications=(props)=>{

    return(
        <>
            <div className="container Specifications">
                <div className="row">
                    <div className="col">
                        <div className="tabs">
                            <div className="tab">
                                <input type="checkbox" id="chck1" />
                                <label className="tabLabel" for="chck1">
                                    <span>ویژگی های محصول</span>
                                    <div>
                                        <img src={Left} alt="open" />
                                    </div>
                                </label>
                                <div className="tabContent" >
                                    <div>
                                        <p>ابعاد: 163.6x75.3x8.9 میلی متر</p>
                                        <p>وزن: 192 گرم</p>
                                        <p>پشتیبانی از کارت حافظه جانبی : بله</p>
                                        <p>صفحه نمایش رنگی : بله</p>
                                        <p> صفحه نمایش لمسی : بله</p>
                                        <p>دوربین : بله</p>
                                        <p>پشتیبانی از زبان فارسی : بله</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" id="chck2" />
                                <label className="tabLabel" for="chck2">
                                    <span>مشخصات فنی</span>
                                    <div>
                                        <img src={Left} alt="open" />
                                    </div>
                                </label>
                                <div className="tabContent" >
                                    <div className="technicalS">
                                        <p>ابعاد: 163.6x75.3x8.9 میلی متر</p>
                                        <p>وزن: 192 گرم</p>
                                        <p>پشتیبانی از کارت حافظه جانبی : بله</p>
                                        <p>صفحه نمایش رنگی : بله</p>
                                        <p> صفحه نمایش لمسی : بله</p>
                                        <p>دوربین : بله</p>
                                        <p>پشتیبانی از زبان فارسی : بله</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" id="chck3" />
                                <label className="tabLabel" for="chck3">
                                    <span>نظرات کاربران</span>
                                    <div>
                                        <img src={Left} alt="open" />
                                    </div>
                                </label>
                                <div className="tabContent" > </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="similarProducts">
                    <div>
                        <h3>
                            محصولات مشابه
                        </h3>
                    </div>
                    <div>
                        <Slider  sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="10%"/>
                        <Slider  sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" discount="40%"/>
                        <Slider  sliderType="wide" description="لب تاب 15 اینچی ایسوس" oldPrice="8,300,000تومان" newPrice="7,300,000تومان" isDiscount="false"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Specifications;