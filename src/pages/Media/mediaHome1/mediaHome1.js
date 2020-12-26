import React, {useContext} from 'react';
import './mediaHome1.css';
import SlidShow from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../../assets/images/onlineshop_media_left_unboxing12.png";
import fixedBanner2 from "../../../assets/images/onlineshop_media_left_ps512.png";
import fixedBanner from "../../../assets/images/onlineshop_mediumbanner_samsung.png";
import fixedBanner3 from "../../../assets/images/onlineshop_media_ghostoftsushima2.png";
import fixedBanner4 from "../../../assets/images/onlineshop_media_thelastofus2.png";
import Toolbar from '../../../containers/Footer/Toolbar/Toolbar';
import Header from '../../../containers/MediaHeader/mediaHeader';
import {MenuContext} from '../../../context/MenuContext/MenuContext';
import Button from '../../../components/UI/button/button';
import VideoBox from '../../../components/mediaVideos/mediaVideos';
import img1 from "../../../assets/images/photo-album-logo_7688-145.png";
import img2 from "../../../assets/images/14.png";
import Footer from "../../../containers/Footer/HomeFooter/homeFooter";

const MediaHome1=(props)=>{
    var settings = {
        display:true,
        dots: false ,
        infinite: true,
        loop:true,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll: 1
    };
    const {mediaMenu1} = useContext(MenuContext);
    



    return(
        <>
            <div className="MediaHome1" style={{
                    position:mediaMenu1?'fixed':'relative',right:mediaMenu1?'65%':'0px',
                    top:mediaMenu1?'90px':'0px',height:mediaMenu1?'390px':'100vh',overflowX:mediaMenu1?'hidden':'auto',width:mediaMenu1?'100%':'100vw',
                    transition:mediaMenu1?'all 0.2s':'all 0.2s',zIndex:mediaMenu1?'100':"null"}}>
                <Toolbar />
                <Header />
                <div className="container mediaBanner">
                    <SlidShow {...settings}>
                        <div>
                            <img src={banner} alt="online shop"/>
                        </div>
                        <div>
                        <img src={banner} alt="online shop"/>
                        </div>
                        <div>
                        <img src={banner} alt="online shop"/>
                        </div>
                    </SlidShow>
                </div>
                <div className="container fixedBanner">
                    <img src={fixedBanner} alt="product"/>
                </div>

                <div className="newVideos">
                    <div className="container">
                        <div className="newVideosTitre">
                            <h3>جدیدترین ویدئو ها</h3>
                            <Button>مشاهده همه
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                </svg>
                            </Button>
                        </div>
                        <div>
                            <SlidShow {...settings}>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                            </SlidShow>
                        </div>
                    </div>
                </div>

                <div className="container fixedBanner">
                    <img src={fixedBanner2} alt="product"/>
                </div>

                
                <div className="newVideos" style={{backgroundColor:"#33658A"}}>
                    <div className="container">
                        <div className="newVideosTitre">
                            <h3>پربازدید ترین ویدئو ها</h3>
                            <Button>مشاهده همه
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                </svg>
                            </Button>
                        </div>
                        <div>
                            <SlidShow {...settings}>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                                <div>
                                    <VideoBox detail={true} videoImg={img1}/>
                                </div>
                            </SlidShow>
                        </div>
                    </div>
                </div>

                <div className="container fixedBanner2">
                    <div>
                        <img src={fixedBanner3} alt="product"/>
                    </div>
                    <div>
                        <img src={fixedBanner4} alt="product"/>
                    </div>
                </div>

                <div className="videoItems">
                    <div className="container videoItemsTitre">
                        <h3>مجله ویدیویی</h3>
                        <hr />
                    </div>
                    <div>
                        <div>
                            <VideoBox detail={false} videoImg={img1}/>
                        </div>
                        <div>
                            <VideoBox detail={false} videoImg={img2}/>
                        </div>
                        <div>
                            <VideoBox detail={false} videoImg={img1}/>
                        </div>
                        <div>
                            <VideoBox detail={false} videoImg={img2}/>
                        </div>
                    </div>

                </div>

                

                <div className="mediaFooter">
                    <Footer />
                </div>


            </div>
        </>
    )
}
export default MediaHome1;