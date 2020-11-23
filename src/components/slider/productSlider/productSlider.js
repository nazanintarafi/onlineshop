import React,{Component} from 'react';
import imgProduct from '../../../assets/images/Mask Group 190.png';
import Discount from '../../../components/discount/discount';
import SlidShow from 'react-slick';
import './productSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/images/11873.png';
import { render } from '@testing-library/react';

const ProductSlider=(props)=>{
    let classes=["slider"];
    switch(props.sliderType){
        case "wide":
            classes.push("wide");
        default:
            break; 
    };
    var state = {
        display: true,
        width: 200
    };
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
        <SlidShow {...settings}>
            <div className={classes.join(' ')} >
               <div className="sliderPadding">
                    <Discount isDiscount={true} discount={'30%'} />
                    <div className="slideImg">
                        <img src={img1} alt="product" />
                    </div>
                    <div className="sliderContent">
                        <div className="ratingStar">
                            <span className="star checked">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                            <span className="star checked">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                            <span className="star checked">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                            <span className="star">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                            <span className="star">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                        </div>
                        <div className="description">
                            <p>{props.description}</p>
                        </div>
                        <div className="price">
                            <div><del>{props.oldPrice}</del></div>
                            <span>{props.newPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </SlidShow>
    )
}
export default ProductSlider;
