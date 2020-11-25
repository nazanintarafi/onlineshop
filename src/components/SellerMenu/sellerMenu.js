import React from 'react';
import './sellerMenu.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import down from '../../assets/images/Group 6.png';
import main from '../mainMenu/mainMenu';
import chevronLeft from '../../assets/images/Group 1569.png';
import left from '../../assets/images/down-arrowx.png';
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
                <div className="Filtering">
                    <ul>
                        <li>                    
                            <div className="FilterItem">
                                <span>برندها</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                            <div className="CheckBox">
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">شیائومی</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">سامسونگ</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">اپل</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">آنر</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="FilterItem">
                                <span>دسته بندی ها</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                            <div className="CheckBox">
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">شیائومی</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">سامسونگ</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">اپل</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">آنر</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="FilterItem">
                                <span>تیتر بر اساس تنوع</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                        </li>
                        <li>
                            <div className="FilterItem">
                                <span>امتیاز فروشنده</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                        </li>
                        <li>
                            <div className="FilterItem">
                                <span>محدوده قیمت</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
export default SellerMenu;