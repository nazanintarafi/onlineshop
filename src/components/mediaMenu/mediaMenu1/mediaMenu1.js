import React ,{useContext} from 'react';
import Logo from '../../logo/logo';
import './mediaMenu1.css';
import {Link} from 'react-router-dom';
import {MediaContext} from '../../../context/MediaContext/mediaContext';
import {MenuContext} from '../../../context/MenuContext/MenuContext';

const MediaMenu=(props)=>{
    const mediaContext = useContext(MediaContext);
    const {mediaMenu1} = mediaContext;

    const ShowMediaMenu1=()=>{
        mediaContext.ShowMediaMenu1();
    }

    const menuContext = useContext(MenuContext);
    const { show } = menuContext;

    const Show=()=>{
        menuContext.Show();
    }

    return(
        <>
            <div style={{width:"100%",overflowY:"hidden"}} className="MediaMenu">
                <div className="menuWidth"  style={{display:mediaMenu1?'block':'none',zIndex:mediaMenu1?'1000':'null',height:mediaMenu1?'100vh':'null'}}>
                    <div className="Logo">
                        <Logo />
                    </div>
                    <div className="row"  onClick={Show} >
                        <div className="col-md-2 col-xs-2 col-2 List closeBtn"  onClick={ShowMediaMenu1} >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        <div className="col-md-10 col-xs-10 col-10 p-0">
                            <span>دسته بندی کالاها</span>
                        </div>
                    </div>



                    <dic className="container">
                        <div className="row">
                            <div className="col">
                                <div className="mainMenuuu">
                                    <div className="mainMenuItems">
                                        <input type="checkbox" id="item01"/>
                                        <label className="mainMenuItems-label" for="item01">
                                            <span>کالای دیجیتال</span>
                                            <span className="svgMenu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="mainMenuItems">
                                        <input type="checkbox" id="item02"/>
                                        <label className="mainMenuItems-label" for="item02">
                                            <span>بازی ها</span>
                                            <span className="svgMenu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>


                                    <div className="mainMenuItems">
                                        <input type="checkbox" id="item03"/>
                                        <label className="mainMenuItems-label" for="item03">
                                            <span>فیلم</span>
                                            <span className="svgMenu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>

                                    {/*زیرمنواول*/}
                                    <div className="mainMenuItems">
                                        <input type="checkbox" id="item04"/>
                                        <label className="mainMenuItems-label" for="item04">
                                            <span>آرایشی و بهداشتی</span>
                                            <span className="svgMenu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dic>




                    <hr />
                    <ul className="aboutUs">
                        <li><Link to="/">سوالی دارید</Link></li>
                        <li><Link to="/">درباره ما</Link></li>
                        <li><Link to="/">تماس با ما</Link></li>
                    </ul>
                    <hr />
                    <div className="row profile" style={{lineHeight:"40px",paddingBottom:"80px"}}>
                        <div className="col-md-2 col-xs-2 col-2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </div>
                        <div className="col-md-10 col-xs-10 col-10 p-0">
                            <span>حساب کاربری</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MediaMenu;