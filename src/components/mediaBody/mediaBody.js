import React, {useContext} from 'react';
import './mediaBody.css';
import Toolbar from '../../containers/Footer/MediaToolbar/mediaToolbar';
import MediaHeader from '../../containers/MediaHeader/mediaHeader';
import BtnMedia from '../UI/button/btnRight/btnMedia/btnMedia';
import {MediaContext} from '../../context/MediaContext/mediaContext';
import mediaMenu2 from '../../components/mediaMenu/mediaMenu2/mediaMenu2';

const MediaBody=(props)=>{
    const {mediaMenu} = useContext(MediaContext);
    return(
        <>
            <div className="MediaBody" style={{backgroundColor:"#D1E5F0"}}>
                <div className="profileToolbar">
                    <Toolbar minWidth="true"/>
                </div>
                <div style={{opacity:mediaMenu?'1':'0'}}>
                    <mediaMenu2 rightToggle={mediaMenu}/>
                </div>
                
                
                <div className="mediaBodyToggle" style={{
                        position:mediaMenu?'fixed':'relative',right:mediaMenu?'65%':null,width:mediaMenu?'100%':"97%",
                        top:mediaMenu?'90px':'0px',height:mediaMenu?'440px':'100vh',
                        overflowX:mediaMenu?'hidden':'hidden',overflowY:mediaMenu?'hidden':'auto',
                        transition:mediaMenu?'all 0.2s':'all 0.2s',zIndex:mediaMenu?'100':"null"}}>
                        <div style={{opacity:props.mediaPage?'1':'0'}}>
                            <MediaHeader rightToggle={mediaMenu} />
                        </div>
                        <div className="Content">
                            {props.children}
                        </div>
                        <div className="btnRight btnMedia" style={{right:mediaMenu?"65.5%":"12px",
                        top:mediaMenu?"270px":null,zIndex:mediaMenu?"200":"200",transition:mediaMenu?'all 0.2s':'all 0.2s'}}>
                            <BtnMedia btnType="sellerBtn"/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default MediaBody;