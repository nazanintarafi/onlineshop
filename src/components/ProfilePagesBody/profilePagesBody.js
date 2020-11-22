import React, {useState} from 'react';
import './profilePagesBody.css';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import ProfileMenu from '../profileMenu/profileMenu';
import Header from '../../containers/profileHeader/profileHeader';
import SellerHeader from '../../containers/sellerHeader/sellerHeader';
import BtnRight from '../UI/button/btnRight/btnRight';
import Button from '../UI/button/button';
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
                <ProfileMenu  rightToggle={openMenu}/>
                <section className="bodyToggle" style={{
                    position:openMenu?'fixed':'relative',right:openMenu?'50%':'10px',
                    top:openMenu?'90px':'0px',height:openMenu?'390px':'100%',width:openMenu?'100%':'100%',
                    overflowX:openMenu?'hidden':'hidden',overflowY:openMenu?'hidden':'hidden',
                    transition:openMenu?'all 1s':'all 1s',zIndex:openMenu?'100':"null"}}
                >
                    <div style={{opacity:props.profilePage?'0':'0'}}>
                        <Header rightToggle={openMenu} titre={props.titre} profile={props.profile}/>
                    </div>
                    <div style={{opacity:props.sellerPage?'1':'1'}}>
                        <SellerHeader rightToggle={openMenu} titre={props.titre} profile={props.profile}/>
                    </div>
                    <div className="Content">
                        {props.children}
                    </div>
                    <div className="btnRight" style={{right:openMenu?"50.5%":"12px",top:openMenu?"300px":null,transition:openMenu?'all 1s':'all 1s'}}>
                        <BtnRight clicked={MenuToggle}/>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProfilePagesBody;