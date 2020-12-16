import React from 'react';
import './mediaHeader.css';
import logo from '../../assets/images/onlineshop-media.png';
import {Link} from 'react-router-dom';


const MediaHeader=(props)=>{



    return(
        <>
            <header className="media1Hedear">
                <div className="container logoMedia">
                    <div className="imgLogo">
                        <img src={logo} alt="logo" />
                    </div>
                    <h1>آنلاین شاپ مدیا</h1>
                </div>
                <div className="container backMedia">
                    <Link to="/" >
                        <span>بازگشت به آنلاین شاپ</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                            </svg>
                        </span>
                    </Link>
                </div>
                <form className="searchMedia">
                    <input type="text" placeholder="جستجو در آنلاین شاپ" />
                    <div className="searchIconMedia">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </div>
                </form>
            </header>
        </>
    )
}
export default MediaHeader;