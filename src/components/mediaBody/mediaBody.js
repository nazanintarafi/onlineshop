
import React, {useContext} from 'react';
import './mediaBody.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import MediaHeader from '../../containers/MediaHeader/mediaHeader';
import BtnMedia from '../UI/button/btnRight/btnMedia/btnMedia';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import Media2Menu from '../mediaMenu/mediaMenu2/mediaMenu2';

const MediaBody=(props)=>{
    const {show} = useContext(MenuContext);
    return(
        <>
            <div className="MediaBody" style={{backgroundColor:"#D1E5F0"}}>
                <div className="profileToolbar">
                    <Toolbar minWidth="true"/>
                </div>
                <div style={{opacity:props.media2Menu?'1':'0'}}>
                    <Media2Menu rightToggle={show}/>
                </div>
                
                
                <div className="bodyToggle" style={{
                        position:show?'fixed':'relative',right:show?'65%':null,
                        top:show?'90px':'0px',height:show?'390px':'100%',width:show?'100%':'100%',
                        overflowX:show?'hidden':'hidden',overflowY:show?'hidden':'auto',
                        transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
                        <div style={{opacity:props.mediaPage?'1':'0'}}>
                            <MediaHeader rightToggle={show}/>
                        </div>
                        <div className="Content" style={{marginTop:props.arthPage?'60px':null}}>
                            {props.children}
                        </div>
                        <div className="btnRight btnMedia" style={{opacity:props.sellerBtn?'1':'0',right:show?"65.5%":"12px",
                        top:show?"180px":null,zIndex:show?"200":"200",transition:show?'all 0.2s':'all 0.2s'}}>
                            <BtnMedia btnType="sellerBtn"/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default MediaBody;