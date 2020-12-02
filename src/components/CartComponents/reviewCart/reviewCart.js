import React from 'react';
import './reviewCart.css';
import ReviewButton from '../../UI/button/reviewButton/reviewButton';
const ReviewCart=(props)=>{
    return(
        <>
            <div className="ReviewCart">
                <div className="reviewButton">
                    <ReviewButton />
                </div>
                <div className="reviewGoBack">
                    <h3>بازبینی خرید</h3>
                </div>
            </div>
        </>
    )
}
export default ReviewCart;