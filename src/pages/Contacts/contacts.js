import React , {useContext , useState} from 'react';
import './contacts.css';
import Instagram from '../../assets/images/Group 1845.png';
import Telegram from '../../assets/images/Path 2306.png';
import {Link} from 'react-router-dom';
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import Input from '../../components/Forms/Form/form';
import down from '../../assets/images/down-arrow.png';
const Contacts=(props)=>{

    const {show} = useContext(MenuContext);

    const[goTop,setGoTop]=useState(false);
    const GoTop=(props)=>{
        setGoTop(!goTop)
    }

    return(
        <>
            <div className="Contacts" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'90px':'0px',height:show?'390px':'100vh',overflowX:show?'hidden':'auto',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}>
                <Toolbar />
                <div className="ContactsContain">
                    <h2>اطلاعات تماس</h2>
                    <p>شماره تماس: ۰۲۱۴۱۶۹۸ - ۰۲۱۴۰۲۲۶۲۰۹</p>
                    <p>ایمیل: info@onlineshop.ir</p>
                    <p>درس: منطقه شهرداری یک، خیابان پاسداران، خیابان نارنجستان یکم، کوچه نارنجستان دوم، پلاک ۴، طبقه اول</p>
                    <p>کد پستی: ۱۹۵۷۹۱۶۴۱۱</p>
                    <p className="Media">
                        <span>مارا در شبکه های اجتماعی دنبال کنید </span>
                        <span><Link to="#"><img src={Instagram} alt="online shop" /></Link></span>
                        <span><Link to="#"><img src={Telegram} alt="online shop" /></Link></span>
                    </p>
                </div>
                <div className="SendMessage" style={{height:goTop?'60%':'100%',top:goTop?'550px':'200px',bottom:goTop?'0px':'0px',
                        transition:goTop?'all 0.2s':'all 0.2s'}}>
                        <div className="SendMessageContent" style={{height:goTop?"100vh":null}}>
                            <h2 style={{paddingTop:goTop?"15px":null}}>ارسال پیام</h2>
                            <div className="changebck">
                                <form style={{opacity:goTop?'0':'1',
                                    transition:goTop?'all 0.1s':'all 0.5s',
                                    height:"100vh"
                                }}>
                                    <Input type="text" placeholder="نام و نام خانوادگی" />
                                    <Input type="text" placeholder="ایمیل" />
                                    <div className="messageText">
                                        <Input type="text" placeholder="متن پیام" />
                                    </div>
                                    <div className="buttonSubmitContacts">
                                        <Button btnType="signUp">ارسال پیام</Button>
                                    </div>
                                </form>
                                <div className="test">
                                    <BtnTop clicked={GoTop} imgName={down}/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Contacts;