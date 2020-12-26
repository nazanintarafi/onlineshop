import React from 'react';
import './mediaHome2.css';
import Body from '../../../components/mediaBody/mediaBody';
import Toolbar from '../../../containers/Footer/Toolbar/Toolbar';
import VideoBox from '../../../components/mediaVideos/mediaVideos';
import img1 from "../../../assets/images/photo-album-logo_7688-145.png";
import img2 from "../../../assets/images/14.png";
import Footer from "../../../containers/Footer/HomeFooter/homeFooter";

const MediaHome2=()=>{
    return(
        <>
            <div className="MediaHome2">
                <Toolbar minWidth="true"/>
                <Body arthBtn="true" arthPage={false} sellerMenu={false} mediaPage={true} Media2Menu={true} sellerBtn={true}>
                    <div className="groupingMedia container">
                        <div>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                        </div>
                        <div>
                            <span>دسته بندی 1</span>
                            <span>دسته بندی 1</span>
                        </div>
                    </div>
                    <div className="container Media2Content">
                        <VideoBox detail={true} videoImg={img1}/>
                        <VideoBox detail={true} videoImg={img2}/>
                        <VideoBox detail={true} videoImg={img1}/>
                        <VideoBox detail={true} videoImg={img2}/>
                        <VideoBox detail={true} videoImg={img1}/>
                        <VideoBox detail={true} videoImg={img2}/>
                    </div>
                    <Footer/>
                </Body>
            </div>
        </>
    )
}   
export default MediaHome2;                          