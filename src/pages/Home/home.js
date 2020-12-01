import React from 'react';
import './home.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import SlidShow from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import Slider from '../../components/slider/slider';
import Logo from '../../components/logo/logo';
import img1 from '../../assets/images/2-03.png';
import img2 from '../../assets/images/Subtraction 1.png';
import img3 from '../../assets/images/Subtraction 2.png';
import img4 from '../../assets/images/Subtraction 3.png';
import img5 from '../../assets/images/Subtraction 4.png';
import img6 from '../../assets/images/onlineshop_mediumbanner_anker.png';
import img7 from '../../assets/images/onlineshop_mediumbanner_samsung.png';
import img8 from '../../assets/images/sotm-256.png';
import img9 from '../../assets/images/onlineshop_smallbanner_3.1.png';
import img10 from '../../assets/images/onlineshop_smallbanner_1.1.png';
import img11 from '../../assets/images/onlineshop_smallbanner_4.1.png';
import img12 from '../../assets/images/onlineshop_smallbanner_2.1.png';
import img14 from '../../assets/images/Group 598.png';
import img15 from '../../assets/images/Group 599.png';
import img16 from '../../assets/images/Group 600.png';
import img17 from '../../assets/images/Group 413.png';
import img18 from '../../assets/images/mail.png';
import img19 from '../../assets/images/phone-call.png';
import img20 from '../../assets/images/logo.png';
import power from '../../assets/images/onlineshop_anker_2.png';
import {Link} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import Tables from '../../components/tables/tables';
const Home=(props) =>{
  const product=[
    {image:'img1',name:'لب تاب',filter:"خانه و آشپزخانه",description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ووط  ',oldPrice:'6,500,000' ,newPrice:'4,200,000 تومان',discount:'30%'}
  ]
  const proTable=[
    {glassesImg1:'glasses1',glassesImg2:'glasses2',glassesImg3:'glasses3',glassesImg4:'glasses4',glassesImg5:'glasses5',glassesImg6:'glasses6',glassesImg7:'glasses7',glassesImg8:'glasses8',glassesImg9:'glasses9'}
  ]
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return(
    <>
      <div className="Home">
        <section className="menuToggle"  style={{
                    position:props.show?'relative':'relative',right:props.show?'150px':'0px',
                    top:props.show?'110px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 2s':'all 2s',zIndex:props.show?'100':"null"}}
        >
          <Toolbar />
          <header className="homeHeader">
            <Logo />
          </header>
          <div className="question">
            <Link to="/home"><img src={img1} alt="online shop" /></Link>
          </div>
          <ul className="boxes">
            <li><Link to="/home"><img src={img2} alt="online shop" /></Link></li>
            <li><Link to="/home"><img src={img3} alt="online shop" /></Link></li>
            <li><Link to="/home"><img src={img4} alt="online shop" /></Link></li>
            <li><Link to="/home"><img src={img5} alt="online shop" /></Link></li>
          </ul>
          {/*محصولات شگفت انگیز*/}
          <div className="productSlider amazingProduct">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-xs-5 col-5">
                    <h2>محصولات<p>شگفت انگیز</p></h2>
                    <Button>مشاهده همه
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                      </svg>
                    </Button>
                </div>
                <div className="col-md-7 col-xs-7 col-7">
                  <Slider productsList={product} slideDesign="sliderWidth" />
                </div>
              </div>
            </div>
          </div>
          {/*بنر*/}
          <ul className="banner">
            <li><Link to="/home"><img src={img6} alt="online shop" /></Link></li>
            <li><Link to="/home"><img src={img7} alt="online shop" /></Link></li>
          </ul>
          {/*جدیدترین محصولات*/}
          <div className="productSlider newProduct">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-xs-5 col-5">
                    <h2>جدیدترین<p>محصولات</p></h2>
                    <Button>مشاهده همه
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                      </svg>
                    </Button>
                </div>
                <div className="col-md-7 col-xs-7 col-7">
                  <Slider productsList={product} slideDesign="sliderWidth" />
                </div>
              </div>
            </div>
          </div>
          {/*اسلایدر زرد*/}
          <div className="monoSlide">
            <SlidShow {...setting}>
              <div>
                <img src={img8} alt="online shop" />
              </div>
              <div>
                <img src={img8} alt="online shop" />
              </div>
              <div>
                <img src={img8} alt="online shop" />
              </div>
            </SlidShow>
          </div>
          {/*محصولات شگفت انگیز*/}
          <div className="amazingProductBlue productSlider">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-xs-5 col-5">
                    <h2>محصولات<p>شگفت انگیز</p></h2>
                    <Button>مشاهده همه
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                      </svg>
                    </Button>
                </div>
                <div className="col-md-7 col-xs-7 col-7">
                  <Slider productsList={product} slideDesign="sliderWidth" />
                </div>
              </div>
            </div>
          </div>
          {/*دسته بندی*/}
          <div className="groups">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/kitchen"><img src={img9} alt="home" /></Link>
                </div>
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/digital"><img src={img10} alt="home" /></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/cloths"><img src={img11} alt="home" /></Link>
                </div>
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/cosmetics"><img src={img12} alt="home" /></Link>
                </div>
              </div>
            </div>
          </div>
          {/*محصولات شگفت انگیز*/}
          <div className="amazingProduct productSlider">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-xs-5 col-5">
                    <h2>محصولات<p>شگفت انگیز</p></h2>
                    <Button>مشاهده همه
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                      </svg>
                    </Button>
                </div>
                <div className="col-md-7 col-xs-7 col-7">
                  <Slider productsList={product} slideDesign="sliderWidth" />
                </div>
              </div>
            </div>
          </div>
          {/*عینک آفتابی ها*/}
          <div className="container table">
              <Tables tablesList={proTable} titre="عینک آفتابی ها"/>
              <Button>مشاهده همه
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </Button>
          </div>
          {/*مد و پوشاک*/}
          <div className="container table">
              <Tables tablesList={proTable} titre="مد و پوشاک"/>
              <Button>مشاهده همه
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </Button>
          </div>
          {/*پاوربانک*/}
          <div className="banner2">
            <Link to="/home"><img src={power} alt="online shop" /></Link>
          </div>
          {/*خانه وآشپزخانه*/}
          <div className="container table">
              <Tables tablesList={proTable} titre="خانه و آشپزخانه"/>
              <Button>مشاهده همه
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </Button>
          </div>
          {/*دسته بندی*/}
          <div className="groups">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/kitchen"><img src={img9} alt="home" /></Link>
                </div>
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/digital"><img src={img10} alt="home" /></Link>
                </div>
              </div>
            </div>
          </div>
          {/*آرایشی ، بهداشتی و سلامت*/}
          <div className="container table">
              <Tables tablesList={proTable} titre="آرایشی ، بهداشتی و سلامت"/>
              <Button>مشاهده همه
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </Button>
          </div>
          {/*پیشنهاد آنلاین شاپ*/}
          {/*با خبر شوید*/}
          {/*پشتیبانی*/}
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
                <div className="enamad">
                  <img src={img20} alt="home" />
                </div>
                <p>.مطالب فروشگاه اینترنتی آنلاین شاپ فقط برای مقاصد غیرتجاری و با ذکر منبع 
  بلامانع است. کلیه حقوق این سایت متعلق به (فروشگاه آنلاین آنلاین شاپ) می‌باشد</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default React.memo(Home);
