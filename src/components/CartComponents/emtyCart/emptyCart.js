import React from 'react';
import img1 from "../../../assets/images/Group 1728.png";
import Button from '../../UI/button/button';

const EmptyCart=()=>{
    return(
        <>
            <div className="EmptyCart">
                <div className="emptyBox">
                    <div className="emtyImg">
                        <image src={img1} alt="empty Cart" />
                    </div>
                    <p>سبد خرید شما خالی است</p>
                </div>
                <div className="completion">
                    <Button btnType="signUp">خرید کنید</Button>
                </div>
            </div>
        </>
    )
}
export default EmptyCart;