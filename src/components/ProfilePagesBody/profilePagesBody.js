import React, {useState} from 'react';
import './profilePagesBody.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import ProfileMenu from '../profileMenu/profileMenu';
import SellerMenu from '../SellerMenu/sellerMenu';
import Header from '../../containers/profileHeader/profileHeader';
import SellerHeader from '../../containers/sellerHeader/sellerHeader';
import BtnRight from '../UI/button/btnRight/btnRight';
import BtnSeller from '../UI/button/btnRight/btnSeller/btnSeller';
import Logo from '../logo/logo';
const ProfilePagesBody=(props)=>{
    const [openMenu,setOpenMenu] = useState(false);
    const MenuToggle=(props)=>{
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <div className="Profile" style={{backgroundColor:"#bfbfcf"}}>
                <div className="profileToolbar">
                    <Toolbar minWidth="true"/>
                </div>
                <div style={{opacity:props.profilePage?'1':'0'}}>
                    <ProfileMenu  rightToggle={openMenu}/>
                </div>
                <div style={{opacity:props.sellerMenu?'1':'0'}}>
                    <SellerMenu  rightToggle={openMenu}/>
                </div>
                <div  className="homeHeader arthHeader" style={{opacity:props.arthPage?'1':'0',top:openMenu?'90px':'0px',
                    left:openMenu?'-47%':null,transition:openMenu?'all 0.2s':'all 0.2s'}}>
                        <Logo />
                </div>
                
                <section className="bodyToggle" style={{
                    position:openMenu?'fixed':'relative',right:openMenu?'50%':'10px',
                    top:openMenu?'90px':'0px',height:openMenu?'390px':'100%',width:openMenu?'100%':'100%',
                    overflowX:openMenu?'hidden':'hidden',overflowY:openMenu?'hidden':'hidden',
                    transition:openMenu?'all 0.2s':'all 0.2s',zIndex:openMenu?'100':"null"}}
                >
                    <div style={{opacity:props.profilePage?'1':'0'}}>
                        <Header rightToggle={openMenu} titre={props.titre} profile={props.profile}/>
                    </div>
                    <div style={{opacity:props.sellerPage?'1':'0'}}>
                        <SellerHeader rightToggle={openMenu} titre={props.titre} profile={props.profile}/>
                    </div>
                    <div className="Content" style={{marginTop:props.arthPage?'60px':'200px'}}>
                        {props.children}
                    </div>
                    <div></div>
                    <div className="btnRight" style={{opacity:props.profilePage?'1':'0',right:openMenu?"50.5%":"12px",
                    top:openMenu?"300px":null,transition:openMenu?'all 0.2s':'all 0.2s'}}>
                        <BtnRight clicked={MenuToggle}/>
                    </div>
                    <div className="btnRight btnSeller" style={{opacity:props.sellerBtn?'1':'0',right:openMenu?"50.5%":"12px",
                    top:openMenu?"160px":null,zIndex:openMenu?"200":"200",transition:openMenu?'all 0.2s':'all 0.2s'}}>
                        <BtnSeller clicked={MenuToggle} btnType="sellerBtn"/>
                    </div>
                    <div className="btnRight btnSeller" style={{opacity:props.arthBtn?'1':'0',right:openMenu?"50.5%":"12px",
                    top:openMenu?"160px":"100px",zIndex:openMenu?"200":"200",transition:openMenu?'all 0.2s':'all 0.2s'}}>
                        <BtnSeller clicked={MenuToggle} btnType="arthBtn"/>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProfilePagesBody;