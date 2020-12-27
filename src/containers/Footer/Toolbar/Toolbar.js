import React, { useContext} from 'react';
import './Toolbar.css';
import home from '../../../assets/images/Path 146.png';
import cart from '../../../assets/images/Group 1287.png';
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


    return(
        <>
            <footer className="toolbarStyle" style={{opacity:show?'0':'1'}}>
                <div className="phone" style={{width:props.minWidth?'97%':'100%'}}>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/"><img src={home} alt="home" /></Link></div></span>
                    <span onClick={Show} className="toolbarItem">
                        <div onClick={ShowMainMenu} className="imgBorder">
                            <div>
                                <img src={menu} alt="menu" />
                            </div>
                        </div>
                    </span>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/cart"><img src={cart} alt="cart" /></Link></div></span>
                    <span className="toolbarItem"><div className="imgBorder"><Link to="/profile"><img src={contact} alt="contact" /></Link></div></span>
                </div>
            </footer>
        </>
    )
}
export default Toolbar;