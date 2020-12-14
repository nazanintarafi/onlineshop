import React from 'react';
import img1 from "../../../assets/images/Group 1728.png";
import Button from '../../UI/button/button';
import './emtyCart.css';
import {Link} from 'react-router-dom';
import CloseButton from '../../UI/button/btnClose/btnClose';

const EmptyCart=()=>{
    return(
        <>
            <div className="EmptyCart">
                <Link to="/arthboard" className="EmptyCloseBtn">
                        <CloseButton />
                </Link>
                <div className="emptyCartTitre">
                    <h2>سبد خرید شما</h2>
                </div>
                <div className="emptyBox">
                    <div className="emtyImg">
                        <img src={img1} alt="empty Cart" />
                    </div>
                    <p>سبد خرید شما خالی است</p>
                </div>
                <div className="completion">
                    <Button btnType="login">خرید کنید</Button>
                </div>
            </div>
        </>
    )
}
export default EmptyCart;