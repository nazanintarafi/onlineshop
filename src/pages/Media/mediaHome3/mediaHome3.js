import React, {useContext} from 'react';
import './mediaHome3.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fixedBanner from "../../../assets/images/onlineshop_media_left_smartwatch12.png";
import Toolbar from '../../../containers/Footer/MediaToolbar/mediaToolbar';
import {MediaContext} from '../../../context/MediaContext/mediaContext';
import VideoBox from '../../../components/mediaVideos/mediaVideos';
import img1 from "../../../assets/images/photo-album-logo_7688-145.png";
import img2 from "../../../assets/images/14.png";
import clock from "../../../assets/images/Group 1051.png";
import message from "../../../assets/images/Path 1174.png";
import heart from "../../../assets/images/heart.png";
import telegram from "../../../assets/images/Icon awesome-telegram-plane.png";
import whatsapp from "../../../assets/images/Icon simple-whatsapp.png";
import {Link} from 'react-router-dom';
import Footer from "../../../containers/Footer/HomeFooter/homeFooter";
import Button from "../../../components/UI/button/button";
import ButtonClose from "../../../assets/images/Icon ionic-ios-close.png";
import Video from "../../../assets/videos/97b456d7cac9108c41a2dc536dc2f1723216633-360p.mp4";

const MediaHome3=(props)=>{
    const {mediaMenu1} = useContext(MediaContext);

    return(
        <>
            <div className="MediaHome3" style={{
                    position:mediaMenu1?'fixed':'relative',right:mediaMenu1?'65%':'0px',
                    top:mediaMenu1?'90px':'0px',height:mediaMenu1?'390px':'100vh',overflowX:mediaMenu1?'hidden':'auto',width:mediaMenu1?'100%':'100vw',
                    transition:mediaMenu1?'all 0.2s':'all 0.2s',zIndex:mediaMenu1?'100':"null"}}>
                <Toolbar />


                <div className="Video">
                    <Link to="/">
                        <img src={ButtonClose} alt="go to home" />
                    </Link>
                    <video controls>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container videoDescription">
                    <h5>لورم ایپسوم متن ساختگی با تولید سادگی</h5>
                    <div className="descriptionBorder">
                        <p>لورم   ایپسوم  متن  ساختگی  با  تولید  سادگی  نامفهوم  از  صنعت  چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون  بلکه  روزنامه  و  مجله  در ستون و سطرآنچنان که لازم است  و  برای  شرایط  فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با  هدف  بهبود  ابزارهای  کاربردی  می باشد. کتابهای زیادی  در  شصت  و  سه درصد</p>
                        <div className="detailDescription">
                            <div className="row">
                                <div className="col-5 col-xs-5 col-md-5" style={{textAlign:"right"}}>
                                    <img src={clock} alt="clock" className="clock"/>
                                    <span>2 روز پیش</span>
                                </div>
                                <div className="col-7 col-xs-7 col-md-7 likeDetail">
                                    <div className="box">
                                        <span>15</span>
                                        <img src={message} alt="clock"/>
                                    </div>
                                    <div className="box">
                                    <span>22</span>
                                        <img src={heart} alt="clock"/>
                                    </div>
                                    <div className="box">
                                        <Link to="#"><img src={telegram} alt="clock"/></Link>
                                        <Link to="#"><img src={whatsapp} alt="clock"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="groupingMedia3">
                                <p style={{color:"balck"}}>برچسب ها:</p>
                                <div>
                                    <span>دسته بندی 1</span>
                                    <span>دسته بندی 1</span>
                                    <span>دسته بندی 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mediaComments">
                    <h6>دیدگاه شما</h6>
                    <form>
                        <input type="text" placeholder="دیدگاه شما ..."/>
                        <input type="text" placeholder="نام ..."/>
                        <input type="text" placeholder="ایمیل ..."/>
                    </form>
                    <Button btnType="submit">ارسال دردگاه</Button>
                </div>

                <div className="container fixedBanner">
                    <img src={fixedBanner} alt="product"/>
                </div>

                
                <div>
                    <div className="container videoItemsTitre3">
                        <h3>ویدیو های مرتبط</h3>
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
export default MediaHome3;