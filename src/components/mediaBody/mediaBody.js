
import React, {useContext} from 'react';
import './mediaBody.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import MediaHeader from '../../containers/MediaHeader/mediaHeader';
import BtnMedia from '../UI/button/btnRight/btnMedia/btnMedia';
import {MediaContext} from '../../context/MediaContext/mediaContext';
import Media2Menu from '../mediaMenu/mediaMenu2/mediaMenu2';

const MediaBody=(props)=>{
    const {mediaMenu} = useContext(MediaContext);
    return(
        <>
            <div className="MediaBody" style={{backgroundColor:"#D1E5F0"}}>
                <div className="profileToolbar">
                    <Toolbar minWidth="true"/>
                </div>
                <div style={{opacity:props.mediaMenu?'1':'0'}}>
                    <Media2Menu rightToggle={mediaMenu}/>
                </div>
                
                
                <div className="bodyToggle" style={{
                        position:mediaMenu?'fixed':'relative',right:mediaMenu?'65%':null,
                        top:mediaMenu?'90px':'0px',height:mediaMenu?'390px':'100vh',width:mediaMenu?'100%':'100%',
                        overflowX:mediaMenu?'hidden':'hidden',overflowY:mediaMenu?'hidden':'auto',
                        transition:mediaMenu?'all 0.2s':'all 0.2s',zIndex:mediaMenu?'100':"null"}}>
                        <div style={{opacity:props.mediaPage?'1':'0'}}>
                            <MediaHeader rightToggle={mediaMenu}/>
                        </div>
                        <div className="Content" style={{marginTop:props.arthPage?'60px':null}}>
                            {props.children}
                        </div>
                        <div className="btnRight btnMedia" style={{opacity:props.sellerBtn?'1':'0',right:mediaMenu?"65.5%":"12px",
                        top:mediaMenu?"270px":null,zIndex:mediaMenu?"200":"200",transition:mediaMenu?'all 0.2s':'all 0.2s'}}>
                            <BtnMedia btnType="sellerBtn"/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default MediaBody;