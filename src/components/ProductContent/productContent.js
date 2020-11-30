import React, { useState } from 'react';
import './productContent.css';
import Stars from '../stars/stars';
import share from '../../assets/images/Group 1513.png';
import ring from '../../assets/images/Group 1516.png';
import video from '../../assets/images/Group 1514.png';
import product1 from '../../assets/images/119409286.png';
import Likee from '../../assets/images/likee.png';
import activeLike from '../../assets/images/like.png';
import img1 from '../../assets/images/Group 598.png';
import img2 from '../../assets/images/Group 599.png';
import img3 from '../../assets/images/Group 600.png';
import Button from '../UI/button/button';
import Variety from '../Variety/variety';
const ProductContent=(props)=>{
    const[like,setLike]=useState(false);
    const Like=(props)=>{
        setLike(!like)
    }
    return(
        <>
            <div className="ProductContent">
                <div className="productTitre">
                    <h2>گوشی موبایل اپل مدل<pan>iPhone 11 A2223</pan></h2>
                    <div className="store">
                        <div>
                            <span>فروشگاه :</span>
                            <span>apple shop</span>
                        </div>
                        <div>
                            <Stars />
                        </div>
                    </div>
                </div>
                <div className="productImage">
                    <ul className="productItems">
                        <li onClick={Like}>
                            <div className="like" style={{display:like?"none":"block"}}>
                                <img src={Likee} alt="like"/>
                            </div>
                            <div className="activeLike" style={{display:like?"block":"none"}}>
                                <img src={activeLike} alt="like"/>
                            </div>
                        </li>
                        <li>
                            <img src={share} alt="share"/>
                        </li>
                        <li>
                            <img src={ring} alt="ring"/>
                        </li>
                        <li>
                            <img src={video} alt="video"/>
                        </li>
                    </ul>
                    <div className="ProductIMG">
                        <img src={product1} alt="online shop" />
                    </div>
                    <div className="btnProduct">
                        <span className="productSelection"><Button btnType="seeAll" >انتخاب تنوع</Button></span>
                        <Button btnType="submit" >افزودن به سبد خرید</Button>
                    </div>
                    <section className="VarietyStyle">
                        <Variety />
                    </section>
                    <section>
                        <ul>
                            <li>
                                <div>
                                    <img src={img1} alt="online shop" />
                                </div>
                                <span>ضمانت اصل بودن کالا</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img2} alt="online shop" />
                                </div>
                                <span>تحویل اکسپرس</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img3} alt="online shop" />
                                </div>
                                <span>پشتیبانی 24 ساعته</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img1} alt="online shop" />
                                </div>
                                <span>پرداخت در محل</span>
                            </li>
                            <li>
                                <div>
                                    <img src={img2} alt="online shop" />
                                </div>
                                <span>7 روز ضمانت بازگشت</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}
export default ProductContent;