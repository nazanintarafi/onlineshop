import React, {useState, useEffect, useRef } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import Home from '../../../pages/Home/home';
import LogIn from '../../../pages/LogIn/logIn';
import mainMenu from '../../../components/mainMenu/mainMenu';
import './Toolbar.css';
import home from '../../../assets/images/Path 146.png';
import cart from '../../../assets/images/Group 1287.png';
import menu from '../../../assets/images/Repeat Grid 3.png';
import contact from '../../../assets/images/Group 1288.png';
import {Link} from 'react-router-dom';
import { timers } from 'jquery';
import { useHistory, useLocation, useParams } from "react-router-dom";
const Toolbar=(props)=>{
    let history = useHistory();
    const [showDrawer,setShowDrawer] = useState(false);
    const [openSideDrawer,setOpenSideDrawer] = useState(false);
    const openDrawer=()=>{
        setShowDrawer(true)
    }
    const sideClosed=()=>{
        history.push('/')//alan test kon
        setShowDrawer(false)
    }
    

    return(
        
        <>
            <footer className="toolbarStyle" style={{opacity:showDrawer?'0':'1'}}>
                <div className="phone" style={{width:props.minWidth?'97%':'100%'}}>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/"><img src={home} alt="home" /></Link></div></span>
                    <span onClick={openDrawer} className="toolbarItem"><div className="imgBorder"><img src={menu} alt="menu" /></div></span>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/cart"><img src={cart} alt="cart" /></Link></div></span>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/profile"><img src={contact} alt="contact" /></Link></div></span>
                </div>
            </footer>
        </>

    )
}
export default Toolbar;