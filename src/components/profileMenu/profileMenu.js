import React, {useContext, menuContext} from 'react';
import './profileMenu.css';
import {Link} from 'react-router-dom';
import {MenuContext} from '../../context/MenuContext/MenuContext';

const ProfileMenu=(props)=>{
    const menuContext = useContext(MenuContext);
    const { show , showSellerMenu , showMainMenu} = menuContext ;
    const Show=()=>{
        menuContext.Show();
    }
    return(
        <div style={{opacity:showMainMenu?"0":"1"}}>
            <ul className="ProfileMenu"  style={{display:show?'block':'none',opacity:showSellerMenu?"0":"1",zIndex:show?"98":null}}>
                <li onClick={Show} >
                    <Link to="/profile">پروفایل</Link>
                </li>
                <li onClick={Show} >
                    <Link to="/orders">سفارش ها</Link>
                </li>
                <li onClick={Show} >
                    <Link to="/favorits">مورد علاقه ها</Link>
                </li>
                <li onClick={Show} >
                    <Link to="/address-list">آدرس ها</Link>
                </li>
                <li onClick={Show} >
                    <Link to="/change-password">تغییر رمز عبور</Link>
                </li>
                <li onClick={Show} >
                    <Link to="/">خروج</Link>
                </li>
            </ul>
        </div>
    )
}
export default ProfileMenu;