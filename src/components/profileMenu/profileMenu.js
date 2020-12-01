import React from 'react';
import './profileMenu.css';
import {Link} from 'react-router-dom';
const ProfileMenu=(props)=>{
    return(
        <ul className="ProfileMenu"  style={{display:props.rightToggle?'block':'none'}}>
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