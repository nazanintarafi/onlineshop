import React, { useContext} from 'react';
import './Toolbar.css';
import homeImage from '../../../assets/images/Path 146.png';
import cartImage from '../../../assets/images/Group 1287.png';
import menu from '../../../assets/images/Repeat Grid 3.png';
import contact from '../../../assets/images/Group 1288.png';
import {Link} from 'react-router-dom';
import {MenuContext} from '../../../context/MenuContext/MenuContext';

const Toolbar=(props)=>{
    const menuContext = useContext(MenuContext);
    const { show } = menuContext ;

    const ShowMainMenu=()=>{
        menuContext.ShowMainMenu();
    }
    const Show=()=>{
        menuContext.Show();
    }

    let home=["firstStyle"];
    switch(props.home){
        case true:
            home.push("toolbarItem");
            break;
        default:
            break; 
    }
    let cart=["firstStyle"];
    switch(props.cart){
        case true:
            cart.push("toolbarItem");
            break;
        default:
            break; 
    }
    let profile=["firstStyle"];
    switch(props.profile){
        case true:
            profile.push("toolbarItem");
            break;
        default:
            break; 
    }


    return(
        <>
            <footer className="toolbarStyle" style={{opacity:show?'0':'1'}}>
                <div className="phone" style={{width:props.minWidth?'97%':'100%'}}>
                    <span className={home.join(' ')}><div className="imgBorder"><Link to="/"><img src={homeImage} alt="home" /></Link></div></span>
                    <span onClick={Show} className="firstStyle">
                        <div onClick={ShowMainMenu} className="imgBorder">
                            <img src={menu} alt="menu" />
                        </div>
                    </span>
                    <span className={cart.join(' ')}><div className="imgBorder"><Link to="/cart"><img src={cartImage} alt="cart" /></Link></div></span>
                    <span className={profile.join(' ')}><div className="imgBorder"><Link to="/profile"><img src={contact} alt="contact" /></Link></div></span>
                </div>
            </footer>
        </>
    )
}
export default Toolbar;