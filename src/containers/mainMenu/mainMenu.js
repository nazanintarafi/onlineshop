import React from 'react';
import Logo from '../logo/logo';
import './mainMenu.css';
import chevronLeft from '../../assets/images/Group 1569.png';
import {Link} from 'react-router-dom';
const MainMenu=(props)=>{
    return(
        <React.Fragment>
            <div className="mainMenu">
                <div className="menuWidth">
                    <div className="Logo">
                        <Logo />
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-xs-2 col-2 List">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        <div className="col-md-10 col-xs-10 col-10 p-0">
                            <span>دسته بندی کالاها</span>
                        </div>
                    </div>
                    <nav className="access" role="navigation">
                        <div>
                            <ul className="menu">
                                <li>
                                    <div className="container">
                                        <div className="row subMenu">
                                            <span className="col-md-8 col-xs-8 col-8 p-0">کالای دیجیتال</span>
                                            <span className="col-md-4 col-xs-4 col-4 p-0">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="container">
                                                <div className="row subMenu">
                                                    <span className="col-md-8 col-xs-8 col-8 p-0">موبایل</span>
                                                    <span className="col-md-4 col-xs-4 col-4 p-0">
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="container">
                                                <div className="row subMenu">
                                                    <span className="col-md-8 col-xs-8 col-8 p-0">لپ تاپ</span>
                                                    <span className="col-md-4 col-xs-4 col-4 p-0">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="container">
                                                <div className="row subMenu">
                                                    <span className="col-md-8 col-xs-8 col-8 p-0">تجهیزات کامپیوتر</span>
                                                    <span className="col-md-4 col-xs-4 col-4 p-0">
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="container">
                                                <div className="row subMenu">
                                                    <span className="col-md-8 col-xs-8 col-8 p-0">تبلت ها</span>
                                                    <span className="col-md-4 col-xs-4 col-4 p-0">
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="container">
                                        <div className="row subMenu">
                                            <span className="col-md-8 col-xs-8 col-8 p-0">مد و پوشاک</span>
                                            <span className="col-md-4 col-xs-4 col-4 p-0">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <div className="row subMenu">
                                            <span className="col-md-8 col-xs-8 col-8 p-0">خانه و آشپزخانه</span>
                                            <span className="col-md-4 col-xs-4 col-4 p-0"><img src={chevronLeft} /></span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>موبایل</span>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>لپ تاپ</span>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>تجهیزات کامپیوتر</span>
                                        </li>
                                        <li>
                                            <span>تبلت ها</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="container">
                                        <div className="row subMenu">
                                            <span className="col-md-8 col-xs-8 col-8 p-0">آرایشی و بهداشتی</span>
                                            <span className="col-md-4 col-xs-4 col-4 p-0">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>موبایل</span>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>لپ تاپ</span>
                                            <ul>
                                                <li><a>گوشی موبایل</a></li>
                                                <li><a>شارژر</a></li>
                                                <li><a>قاب و محافظ</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>تجهیزات کامپیوتر</span>
                                        </li>
                                        <li>
                                            <span>تبلت ها</span>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </nav>
                    <hr />
                    <ul className="aboutUs">
                        <li><Link to="/questions">سوالی دارید</Link></li>
                        <li><Link to="/about-us">درباره ما</Link></li>
                        <li><Link to="/contact-us">تماس با ما</Link></li>
                    </ul>
                    <hr />
                    <div className="row profile">
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
        </React.Fragment>
    )
}
export default MainMenu;