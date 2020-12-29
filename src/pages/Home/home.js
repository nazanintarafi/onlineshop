import React, {useContext} from 'react';
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
import glasses1 from '../../assets/images/Fashion (1).png';
import glasses2 from '../../assets/images/Fashion (5).png';
import glasses3 from '../../assets/images/Fashion (3).png';
import glasses4 from '../../assets/images/Fashion (11).png';
import glasses5 from '../../assets/images/Fashion (4).png';
import glasses6 from '../../assets/images/Fashion (2).png';
import glasses7 from '../../assets/images/Fashion (12).png';
import glasses8 from '../../assets/images/Fashion (13).png';
import img13 from '../../assets/images/1-02.png';
import img14 from '../../assets/images/1-01.png';
import power from '../../assets/images/onlineshop_anker_2.png';
import {Link} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import Tables from '../../components/tables/tables';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import Footer from '../../containers/Footer/HomeFooter/homeFooter';

const Home=(props) =>{
  const proTable=[
    {glassesImg1:glasses1,glassesImg2:glasses2,glassesImg3:glasses3,glassesImg4:glasses4,glassesImg5:glasses5,
    glassesImg6:glasses6,glassesImg7:glasses7,glassesImg8:glasses8,glassesImg9:glasses2}
  ]
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const {show} = useContext(MenuContext);
  
  return(
    <>
      <div className="Home">
        <Toolbar home={true}/>
        <section className="menuToggle" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'90px':'0px',height:show?'390px':'100vh',overflowX:show?'hidden':'auto',width:show?'100%':'100vw',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
          
          <header className="homeHeader" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'70px':'0px',overflowX:show?'hidden':'auto',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
            <Logo />
            <div className="HomeSearchBox">
              <form>
                <input type="text" placeholder="جستجو در آنلاین شاپ" />
                <div className="searchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </div>
              </form>
            </div>
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
                <div className="col-md-7 col-xs-7 col-7 p-0">
                  <Slider slideDesign="sliderWidth" number={1.5} />
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
                <div className="col-md-7 col-xs-7 col-7 p-0">
                  <Slider slideDesign="sliderWidth" number={1.5} />
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
                    <h2>محصولات<p>پرفروش</p></h2>
                    <Button>مشاهده همه
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                      </svg>
                    </Button>
                </div>
                <div className="col-md-7 col-xs-7 col-7 p-0">
                  <Slider slideDesign="sliderWidth" number={1.5} />
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
                <div className="col-md-7 col-xs-7 col-7 p-0">
                  <Slider slideDesign="sliderWidth"  number={1.5}/>
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
                  <Link to="/kitchen"><img src={img13} alt="home" /></Link>
                </div>
                <div className="col-md-6 col-xs-6 col-6 p-0">
                  <Link to="/digital"><img src={img14} alt="home" /></Link>
                </div>
              </div>
            </div>
          </div>
          {/*آرایشی ، بهداشتی و سلامت*/}
          <div className="container table changeWidth">
              <Tables tablesList={proTable} titre="آرایشی ، بهداشتی و سلامت"/>
              <Button>مشاهده همه
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </Button>
          </div>
          {/*پیشنهاد آنلاین شاپ*/}
          <div className="container suggestion">
            <div className="suggestionTitre">
              <span>پیشنهاد آنلاین شاپ</span>
            </div>
            <Slider slideDesign="sliderWidth" number={2}/>
            <Slider slideDesign="sliderWidth" number={2} />
          </div>
          {/*Footer*/}
          <Footer />
        </section>
      </div>
    </>
  )
}
export default React.memo(Home);
