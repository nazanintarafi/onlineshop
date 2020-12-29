import React, { useContext} from 'react';
import './mediaToolbar.css';
import home from '../../../assets/images/Path 146.png';
import cart from '../../../assets/images/Group 1287.png';
import menu from '../../../assets/images/Repeat Grid 3.png';
import contact from '../../../assets/images/Group 1288.png';
import {Link} from 'react-router-dom';
import {MediaContext} from '../../../context/MediaContext/mediaContext';

const MediaToolbar=(props)=>{
    const mediaContext = useContext(MediaContext);
    const { mediaMenu , mediaMenu1} = mediaContext ;

    const ShowMainMenu=()=>{
        mediaContext.ShowMediaMenu1();
    }
    const Show=()=>{
        mediaContext.MediaMenu();
    }


    return(
        <>
            <footer className="toolbarMediaStyle" style={{opacity:mediaMenu?'0':'1'}}>
                <div className="phone" style={{width:props.minWidth?'97%':'100%'}}>
                    <span className="toolbarMediaItem"><div className="imgBorder"><Link to="/"><img src={home} alt="home" /></Link></div></span>
                    <span onClick={Show} className="toolbarMediaItem">
                        <div onClick={ShowMainMenu} className="imgBorder">
                            <div>
                                <img src={menu} alt="menu" />
                            </div>
                        </div>
                    </span>
                    <span className="toolbarMediaItem"><div className="imgBorder"><Link to="/cart"><img src={cart} alt="cart" /></Link></div></span>
                    <span className="toolbarMediaItem"><div className="imgBorder"><Link to="/profile"><img src={contact} alt="contact" /></Link></div></span>
                </div>
            </footer>
        </>
    )
}
export default MediaToolbar;