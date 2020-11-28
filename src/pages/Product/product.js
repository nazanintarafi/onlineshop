import React, { useState } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import Stars from '../../components/stars/stars';
import share from '../../assets/images/Group 1513.png';
import ring from '../../assets/images/Group 1516.png';
import video from '../../assets/images/Group 1514.png';
import ProductContent from '../../components/ProductContent/productContent';

const Product=(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    return(
        <>
            <div className="Product" style={{
                    position:props.show?'fixed':'relative',right:props.show?'150px':'0px',
                    top:props.show?'110px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 1s':'all 1s',zIndex:props.show?'100':"null",overflow:top?"hidden":"null"}}>
                <div className="First">
                    <div className="FirstContent">
                        <div>
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
                        <div>
                            <ul>
                                <li>
                                    <div className="like">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                        </svg>
                                    </div>
                                    <div className="activeLike">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                        </svg>
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
                        </div>
                    </div>
                    <div className="logIn" style={{height:top?'20%':'40%',top:top?'7%':'180px',transition:top?'all 0.5s':'all 0.5s'}}>
                        <div className="logInContent">
                            <div className="detail">
                                <h2>مشخصات محصول</h2>
                            </div>
                            <div className="test">
                                <BtnTop clicked={Top}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Product);