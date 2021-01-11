import React from 'react';
import SlidShow from 'react-slick';
import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBox from '../../containers/ProductBox/productBox';

const Slider=(props)=>{
    var mainSettings = {
            display:true,
            dots: false ,
            infinite: true,
            loop:true,
            speed: 500,
            slidesToShow:props.number,
            slidesToScroll: props.number
    };
    return(
        <>
            <div className="ProductSlider">
                <SlidShow {...mainSettings}>
                    <div className="SliderContent">
                        <ProductBox 
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                            oldPrice='6,500,000'
                            newPrice='4,200,000 تومان'
                            isDiscount="false"
                        />
                    </div>
                    <div className="SliderContent">
                        <ProductBox 
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                            oldPrice='6,500,000'
                            newPrice='4,200,000 تومان'
                            discount="30%"
                            isDiscount={props.isDiscount}
                        />
                    </div>
                    <div className="SliderContent">
                        <ProductBox 
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                            oldPrice='6,500,000'
                            newPrice='4,200,000 تومان'
                            discount="10%"
                            isDiscount={props.isDiscount}
                        />
                    </div>
                    <div className="SliderContent">
                        <ProductBox 
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  '
                            oldPrice='6,500,000'
                            newPrice='4,200,000 تومان'
                            discount="5%"
                            isDiscount={props.isDiscount}
                        />
                    </div>
                </SlidShow>
            </div>
        </>
    )
}
export default Slider;
