import React, {useState} from 'react';
import './profile.css';
import ProfileMenu from '../../components/profileMenu/profileMenu';
import Header from '../../containers/profileHeader/profileHeader';
import BtnRight from '../../components/UI/button/btnRight/btnRight';
import UserName from '../../components/ProfileComponents/userName/userName';
const Profile=(props)=>{
    const [openMenu,setOpenMenu] = useState(false);
    const MenuToggle=(props)=>{
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <div className="Profile" style={{backgroundColor:"#bfbfcf"}}>
                <ProfileMenu  rightToggle={openMenu}/>
                <section className="bodyToggle" style={{
                    position:openMenu?'fixed':'relative',right:openMenu?'50%':'10px',
                    top:openMenu?'90px':'0px',height:openMenu?'390px':'100%',width:openMenu?'100%':'100%',
                    overflowX:openMenu?'hidden':'hidden',
                    transition:openMenu?'all 1s':'all 1s',zIndex:openMenu?'100':"null"}}
                >
                    <Header rightToggle={openMenu} titre="پروفایل"/>
                    <div className="Content">
                        <UserName />
                    </div>
                    <div className="btnRight">
                        <BtnRight clicked={MenuToggle}/>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Profile;