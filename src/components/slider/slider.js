import React from 'react';
import SlidShow from 'react-slick';
import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBox from '../../containers/ProductBox/productBox';

const Slider=(props)=>{
    var settings = {
            display:true,
            dots: true,
            infinite: true,
            loop:true,
            speed: 500,
            slidesToShow:1.5,
            slidesToScroll: 1
    };
    return(
        <div className="ProductSlider">
            <SlidShow {...settings}>
                <div className="SliderContent">
                    <ProductBox 
                        description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                        oldPrice='6,500,000'
                        newPrice='4,200,000 تومان'
                        isDiscount='4,200,000 تومان'
                        discount="30%"
                        isDiscount={props.isDiscount}
                    />
                </div>
                <div className="SliderContent">
                    <ProductBox 
                        description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                        oldPrice='6,500,000'
                        newPrice='4,200,000 تومان'
                        isDiscount='4,200,000 تومان'
                        discount="30%"
                        isDiscount={props.isDiscount}
                    />
                </div>
                <div className="SliderContent">
                    <ProductBox 
                        description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                        oldPrice='6,500,000'
                        newPrice='4,200,000 تومان'
                        isDiscount='4,200,000 تومان'
                        discount="30%"
                        isDiscount={props.isDiscount}
                    />
                </div>
                <div className="SliderContent">
                    <ProductBox 
                        description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                        oldPrice='6,500,000'
                        newPrice='4,200,000 تومان'
                        isDiscount='4,200,000 تومان'
                        discount="30%"
                        isDiscount={props.isDiscount}
                    />
                </div>
            </SlidShow>
        </div>
    )
}
export default Slider;
