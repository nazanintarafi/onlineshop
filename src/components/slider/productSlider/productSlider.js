import React from 'react';
import SlidShow from 'react-slick';
import './productSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBox from '../../../containers/ProductBox/productBox';

const ProductSlider=(props)=>{
    var settings = {
            display:true,
            width:20,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1
    };
    return(
        <div className="ProductSlider">
            <SlidShow {...settings}>
                <div className="SliderContent">
                    <ProductBox 
                        description={props.description}
                        oldPrice={props.oldPrice}
                        newPrice={props.newPrice}
                        isDiscount={props.isDiscount}
                        discount={props.discount}
                    />
                </div>
            </SlidShow>
        </div>
    )
}
export default ProductSlider;
