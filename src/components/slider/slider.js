import React, {useState, useEffect, useRef} from 'react';
import Discount from '../../components/discount/discount';
import SlidShow from 'react-slick';
import ProductSlider from './productSlider/productSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider=(props)=>{
    return(
        props.productsList.map((product,index)=>
            <ProductSlider 
                key={index}
                image={product.image}
                description={product.description}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                discount={product.discount}
            />
        )
    
    )
}

export default Slider;