import React , {useContext} from 'react';
import './mediaMenu2.css';
import down from '../../../assets/images/Group 6.png';
import left from '../../../assets/images/down-arrowx.png';
import {MediaContext} from '../../../context/MediaContext/mediaContext';

const MediaMenu2=(props)=>{

    const { mediaMenu2 , mediaMenu } = useContext(MediaContext);

    return(
        <ul className="MediaMenu2"  style={{display:mediaMenu?'block':'none',zIndex:mediaMenu2?"99":"0"}}>
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
                        <span className="radioName">داغ ترین</span>
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
                                <span>تیتر بر اساس تنوع</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                            <div className="CheckBox">
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">رنگ</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">سایز</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">تنوع 3</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">تنوع 4</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="FilterItem">
                                <span>زمان انتشار</span>
                                <span><img src={left} alt="flesh"/></span>
                            </div>
                            <div className="CheckBox">
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">امروز</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">هفته گذشته</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">ماه گذشته</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">3 ماه گذشته</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkbox"></span>
                                    <span className="checkmark">1 سال گذشته</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
export default MediaMenu2;