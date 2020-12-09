import React, {useContext} from 'react';
import './profileMenu.css';
import {Link} from 'react-router-dom';
import {MenuContext} from '../../context/MenuContext/MenuContext';

const ProfileMenu=(props)=>{

    const {showSellerMenu ,show} = useContext(MenuContext);

    return(
        <ul className="ProfileMenu"  style={{display:show?'block':'none',opacity:showSellerMenu?"0":"1",zIndex:show?"98":null}}>
            <li>
                <Link to="/profile">پروفایل</Link>
            </li>
            <li>
                <Link to="/orders">سفارش ها</Link>
            </li>
            <li>
                <Link to="/favorits">مورد علاقه ها</Link>
            </li>
            <li>
                <Link to="/address-list">آدرس ها</Link>
            </li>
            <li>
                <Link to="/change-password">تغییر رمز عبور</Link>
            </li>
            <li>
                <Link to="/home">خروج</Link>
            </li>
        </ul>
    )
}
export default ProfileMenu;