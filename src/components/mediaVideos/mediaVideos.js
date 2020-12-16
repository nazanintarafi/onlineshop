import React, { useState } from 'react';
import './mediaVideos.css';
import clock from '../../assets/images/Group 1829.png';
import Likee from '../../assets/images/likee.png';
import activeLike from '../../assets/images/like.png';

const MediaVideo=(props)=>{
    const[like,setLike]=useState(false);
    const Like=(props)=>{
        setLike(!like)
    }

    return(
        <>
            <div className="MediaVideo">
                <div className="MediaVideoContent">
                    <div className="videoImg">
                        <img src={props.videoImg} alt="video"/>
                    </div>
                    <div className="videoContent">
                        <div style={{display:props.detail?"block":"none"}}>
                            <p>لورم ایپسوم متنی ساختگی است با تولید سادگی در آن</p>
                            <hr/>
                            <div className="withDetail" style={{display:"flex",width:"100%"}}>
                                <span><img src={clock} alt="clock"/></span>
                                <span>2 روز پیش</span>
                                <span>2:26 دقیقه</span>
                                <span>11</span>
                                <span onClick={Like}>
                                    <div className="like" style={{display:like?"none":"block"}}>
                                        <img src={Likee} alt="like"/>
                                    </div>
                                    <div className="activeLike" style={{display:like?"block":"none"}}>
                                        <img src={activeLike} alt="like" style={{width:"90%"}}/>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="withOutDetail" style={{display:props.detail?"none":"block"}}>
                            <h4>لورم ایپسوم متن ساختگی</h4>
                            <p> ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان </p>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default MediaVideo;