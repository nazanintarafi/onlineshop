import React , {useContext , useState} from 'react';
import './questions.css';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import img1 from '../../assets/images/1-34.png';
import img2 from '../../assets/images/1-26.png';
import img3 from '../../assets/images/1-33.png';
import img4 from '../../assets/images/1-25.png';
import img5 from '../../assets/images/1-32.png';
import img6 from '../../assets/images/1-31.png';
import img7 from '../../assets/images/1-28.png';
import img8 from '../../assets/images/1-24.png';
import img9 from '../../assets/images/1-29.png';
import img10 from '../../assets/images/1-30.png';
import img11 from '../../assets/images/1-27.png';


const Questions=(props)=>{

    const {show} = useContext(MenuContext);

    return(
        <>
            <div className="Questions" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'90px':'0px',height:show?'390px':'100vh',overflowX:show?'hidden':'auto',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"
            }}>
                <Toolbar />
                <div className="orangeTitre" style={{top:show?"89px":"0",transition:show?'all 0.2s':'all 0.2s'}}>
                    <h1>سوالات متداول</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="QuestionBox">

                                <div className="boxContains">
                                    <input type="checkbox" />
                                    <label className="QuestionBoxLabel">
                                        <span className="QuestionIcon"><img src={img1} alt="online shop"/></span>
                                        <span>سوالات پرتکرار</span>
                                    </label>
                                </div>

                                <hr style={{width:"80%"}}/>


                                <div className="boxContains">
                                    <input type="checkbox" id="Q1"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q1">
                                        <span className="QuestionIcon"><img src={img2} alt="online shop"/></span>
                                        <span>ورود و ثبت نام</span>
                                    </label>
                                    {/*محتوا*/ }
                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s1"/>
                                        <label className="QuestionBoxLabel" for="s1">
                                            <p className="optionsQ">چگونه در آنلاین شاپ خرید کنم؟</p>
                                        </label>
                                        {/*محتوا*/ }
                                        
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s2"/>
                                        <label className="QuestionBoxLabel" for="s2">
                                            <p className="optionsQ">چگونه می توانم مشخصات کاربری و ایمیل خود را آپدیت کنم؟</p>
                                        </label>
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s3"/>
                                        <label className="QuestionBoxLabel" for="s3">
                                            <p className="optionsQ">چگونه در آنلاین شاپ خرید کنم؟</p>
                                        </label>
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s4"/>
                                        <label className="QuestionBoxLabel" for="s4">
                                            <p className="optionsQ">چگونه می توانم مشخصات کاربری و ایمیل خود را آپدیت کنم؟</p>
                                        </label>
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s4"/>
                                        <label className="QuestionBoxLabel" for="s4">
                                            <p className="optionsQ">چگونه می توانم مشخصات کاربری و ایمیل خود را آپدیت کنم؟</p>
                                        </label>
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s5"/>
                                        <label className="QuestionBoxLabel" for="s5">
                                            <p className="optionsQ">چگونه می توانم مشخصات کاربری و ایمیل خود را آپدیت کنم؟</p>
                                        </label>
                                    </div>

                                    <div className="QuestionBoxContent">
                                        <input type="checkbox" id="s6"/>
                                        <label className="QuestionBoxLabel" for="s6">
                                            <p className="optionsQ last">چگونه در آنلاین شاپ خرید کنم؟</p>
                                        </label>
                                    </div>
                                    
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q2"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q2">
                                        <span className="QuestionIcon"><img src={img3} alt="online shop"/></span>
                                        <span className="mainQ">روند ثبت سفارش</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q3"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q3">
                                        <span className="QuestionIcon"><img src={img4} alt="online shop"/></span>
                                        <span className="mainQ">پیگیری ارسال سفارش</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q4"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q4">
                                        <span className="QuestionIcon"><img src={img5} alt="online shop"/></span>
                                        <span className="mainQ">کد تخفیف و کارت هدیه</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q5"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q5">
                                        <span className="QuestionIcon"><img src={img6} alt="online shop"/></span>
                                        <span className="mainQ">تعهد به شفافیت</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q6"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q6">
                                        <span className="QuestionIcon"><img src={img7} alt="online shop"/></span>
                                        <span className="mainQ">دعوت از دوستان</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q7"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q7">
                                        <span className="QuestionIcon"><img src={img8} alt="online shop"/></span>
                                        <span className="mainQ">آخرین تغییرات</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q8"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q8">
                                        <span className="QuestionIcon"><img src={img9} alt="online shop"/></span>
                                        <span className="mainQ">بازگرداندن کالا</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q9"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q9">
                                        <span className="QuestionIcon"><img src={img10} alt="online shop"/></span>
                                        <span className="mainQ">چند مرسوله ای</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>

                                <div className="boxContains">
                                    <input type="checkbox" id="Q10"/>
                                    <label className="QuestionBoxLabel mainQ" for="Q10">
                                        <span className="QuestionIcon"><img src={img11} alt="online shop"/></span>
                                        <span className="mainQ">سایر موارد</span>
                                    </label>
                                    <div className="QuestionBoxContent">
                                        {/*محتوا*/ }
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Questions;