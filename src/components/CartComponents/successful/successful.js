import React from 'react';
import img1 from '../../../assets/images/Path 1152.png';
import Button from '../../UI/button/button';
import './successful.css';

const Successful=(props)=>{
    return(
        <>
            <div className="Successful">
                <div className="imgSuccessful">
                    <img src={img1} alt="successful"/>
                </div>
                <p className="successfulPayment">
                    <span>پرداخت شما با موفقیت انجام شد. 
                    از اعتماد و خرید شما سپاسگزاریم.</span>
                </p>
                <p>رسید پرداخت آنلاین :</p>
                <p>
                    <span>11.600.000</span>
                    <span> تومان از طریق کارت بانکی پرداخت شد</span>
                </p>
                <p>
                    <span>شماره تراکنش:</span>
                    <span>2225859358625</span>
                </p>
                <div className="completion">
                    <Button btnType="signUp">تکمیل فرآیند خرید</Button>
                </div>
            </div>
        </>
    )
}
export default Successful;