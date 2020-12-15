import React , {useContext} from 'react';
import './purpleBody.css';
import {MenuContext} from '../../context/MenuContext/MenuContext';
const PurpleBody=(props)=>{
    const {show} = useContext(MenuContext);
    return(
        <>
            <div className="PurpleBody" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'90px':'0px',height:show?'390px':'100vh',overflowX:show?'hidden':'auto',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
                <div style={{display:props.titre?"block":"none",marginTop:props.titre?"0px":"60px"}} className="purpleTitre">
                    <h1>حریم خصوصی سامانه آنلاین شاپ</h1>
                    <p>کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات کاربردی آنلاین شاپ به دقت ملاحظه فرمایید.</p>
                </div>
                <div className="purpleBox" style={{marginTop:props.titre?"0px":"60px"}}>
                    <div className="purpleContent">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PurpleBody;