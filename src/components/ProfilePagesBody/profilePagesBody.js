import React, {useContext} from 'react';
import './profilePagesBody.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import ProfileMenu from '../profileMenu/profileMenu';
import SellerMenu from '../SellerMenu/sellerMenu';
import Header from '../../containers/profileHeader/profileHeader';
import MediaHeader from '../../containers/MediaHeader/mediaHeader';
import SellerHeader from '../../containers/sellerHeader/sellerHeader';
import BtnRight from '../UI/button/btnRight/btnRight';
import BtnSeller from '../UI/button/btnRight/btnSeller/btnSeller';
import Logo from '../logo/logo';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import Media2Menu from '../mediaMenu/mediaMenu2/mediaMenu2';

const ProfilePagesBody=(props)=>{

    const {show} = useContext(MenuContext);
    return(
        <>
            <div className="Profile" style={{backgroundColor:"#bfbfcf"}}>
                <div className="profileToolbar">
                    <Toolbar minWidth="true" profile={true}/>
                </div>
                <div style={{opacity:props.sellerPage?'0':'1',zIndex:props.sellerPage?'-10':null}}>
                    <div style={{opacity:show?'1':'0'}}>
                        <ProfileMenu  rightToggle={show}/>
                    </div>
                </div>
                <div style={{opacity:props.sellerMenu?'1':'0'}}>
                    <SellerMenu  rightToggle={show}/>
                </div>
                <div style={{opacity:props.media2Menu?'1':'0'}}>
                    <SellerMenu  rightToggle={show}/>
                </div>
                <div  className="homeHeader arthHeader" style={{opacity:props.arthPage?'1':'0',top:show?'90px':'0px',
                    left:show?'-62%':null,transition:show?'all 0.2s':'all 0.2s'}}>
                        <Logo />
                </div>
                
                
                <div className="bodyToggle" style={{
                        position:show?'fixed':'relative',right:show?'65%':null,
                        top:show?'90px':'0px',height:show?'437px':'100%',width:show?'100%':'100%',
                        overflowX:show?'hidden':'hidden',overflowY:show?'hidden':'auto',
                        transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
                        <div style={{display:props.profilePage?'block':'none'}}>
                            <Header rightToggle={show} titre={props.titre} profile={props.profile}/>
                        </div>
                        <div style={{display:props.sellerPage?'block':'none'}}>
                            <SellerHeader rightToggle={show} titre={props.titre} profile={props.profile}/>
                        </div>
                        <div style={{display:props.mediaPage?'block':'none'}}>
                            <MediaHeader rightToggle={show}/>
                        </div>
                        <div className="Content" style={{marginTop:props.arthPage?'60px':null,paddingTop:props.sellerPage?"211px":null}}>
                            {props.children}
                        </div>
                        <div></div>
                        <div className="btnRight" style={{opacity:props.profilePage?'1':'0',right:show?"65.5%":"12px",
                        top:show?"300px":null,transition:show?'all 0.2s':'all 0.2s'}}>
                            <BtnRight/>
                        </div>
                        <div className="btnRight btnSeller" style={{opacity:props.sellerBtn?'1':'0',right:show?"65.5%":"12px",
                        top:show?"160px":null,zIndex:show?"200":"200",transition:show?'all 0.2s':'all 0.2s'}}>
                            <BtnSeller btnType="sellerBtn"/>
                        </div>
                        <div className="btnRight btnSeller" style={{opacity:props.arthBtn?'1':'0',right:show?"65.5%":"12px",
                        top:show?"194px":"100px",zIndex:show?"200":"200",transition:show?'all 0.2s':'all 0.2s'}}>
                            <BtnSeller btnType="arthBtn"/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePagesBody;