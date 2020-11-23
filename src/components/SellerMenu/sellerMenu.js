import React from 'react';
import './sellerMenu.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import down from '../../assets/images/Group 6.png';
import main from '../mainMenu/mainMenu';
const SellerMenu=(props)=>{
    return(
        <ul className="SellerMenu"  style={{display:props.rightToggle?'block':'none'}}>
            <main/>
            <li>
                <h4>
                    <span>مرتب سازی</span>
                    <span><img src={down} alt="flesh"/></span>
                </h4>
                <div>
                    <label>
                        <input type="radio" name="selector"/>
                        <span className="radio"></span>
                        <span className="radioName">پر بازدید ترین</span>
                    </label>
                    <label>
                        <input type="radio" name="selector" />
                        <span className="radio"></span>
                        <span className="radioName">پر فروش ترین</span>
                    </label>
                    <label>
                        <input type="radio" name="selector"/>
                        <span className="radio"></span>
                        <span className="radioName">جدید ترین</span>
                    </label>
                    <label>
                        <input type="radio" name="selector" />
                        <span className="radio"></span>
                        <span className="radioName">ارزان ترین</span>
                    </label>
                    <label>
                        <input type="radio" name="selector" />
                        <span className="radio"></span>
                        <span className="radioName">گران ترین</span>
                    </label>
                </div>
            </li>
            <li>
                <h4>
                    <span>فیلتر کردن</span>
                    <span><img src={down} alt="flesh"/></span>
                </h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
        </ul>
    )
}
export default SellerMenu;