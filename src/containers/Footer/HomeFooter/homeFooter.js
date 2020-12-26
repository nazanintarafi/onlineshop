import React from 'react';
import './homeFooter.css';
import img14 from '../../../assets/images/Group 598.png';
import img15 from '../../../assets/images/Group 599.png';
import img16 from '../../../assets/images/Group 600.png';
import img17 from '../../../assets/images/Group 413.png';
import img18 from '../../../assets/images/mail.png';
import img19 from '../../../assets/images/phone-call.png';
import img20 from '../../../assets/images/logo.png';
import {Link} from 'react-router-dom';

const HomeFooter=(props)=>{
    return(
        <>
            <div className="HomeFooter">
                <div className="container eamilBox">
                    <p>از تخفیف ها و جدید ترین های فروشگاه با خبر شوید</p>
                    <form>
                        <input type="email" placeholder="آدرس ایمیل" />
                        <button >ثبت</button>
                    </form>
                </div>
                <div className="condition container">
                    <div>
                    <div className="img_condition">
                        <img src={img14} alt="home" />
                    </div>
                    <p>ضمانت اصل بودن کالا</p>
                    </div>
                    <div>
                    <div className="img_condition">
                        <img src={img15} alt="home" />
                    </div>
                    <p>تحویل اکسپرس</p>
                    </div>
                    <div>
                    <div className="img_condition">
                        <img src={img16} alt="home" />
                    </div>
                    <p>پشتیبانی 24 ساعته</p>
                    </div>
                    <div>
                    <div className="img_condition">
                        <img src={img14} alt="home" />
                    </div>
                    <p>پرداخت در محل</p>
                    </div>
                    <div>
                    <div className="img_condition">
                        <img src={img16} alt="home" />
                    </div>
                    <p>6 روز ضمانت</p>
                    </div>
                </div>
                {/*footer*/}
                <div className="container callFooter">
                    <div className="row">
                    <div className="col-md-6 col-xs-6 col-6 ">
                        <h4 className="titreFooter">با آنلاین شاپ</h4>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>تماس با آنلاین شاپ</span>
                        </Link>
                        </div>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>ثبت شکایت</span>
                        </Link>
                        </div>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>درباره آنلاین شاپ</span>
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6 col-6 p-0">
                        <h4 className="titreFooter">خدمات مشتریان</h4>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>پاسخ به پرسش های متداول</span>
                        </Link>
                        </div>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>قوانین و مقررات</span>
                        </Link>
                        </div>
                        <div className="call">
                        <Link to="/digital">
                            <img src={img17} alt="home" />
                            <span>حریم خصوصی</span>
                        </Link>
                        </div>
                    </div>
                    <div className="answer">
                        <h4>هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</h4>
                        <div className="emailAddress">
                            <div className="email">
                                <div>
                                    <img src={img18} alt="home" />
                                </div>
                                <span>info@onlineshop.ir </span>
                            </div>
                            <div className="email">
                                <div>
                                    <img src={img19} alt="home" />
                                </div>
                                <span> ۰۲۱۴۱۶۹۸ - ۰۲۱۴۰۲۲۶۲۰۹ </span>
                            </div>
                        </div>
                        <div className="enamad">
                        <img src={img20} alt="home" />
                        </div>
                        <p>.مطالب فروشگاه اینترنتی آنلاین شاپ فقط برای مقاصد غیرتجاری و با ذکر منبع 
        بلامانع است. کلیه حقوق این سایت متعلق به (فروشگاه آنلاین آنلاین شاپ) می‌باشد</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeFooter;