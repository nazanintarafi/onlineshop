import React, { useState } from 'react';
import './logIn.css';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import Input from '../../components/Forms/Form/form';
import down from '../../assets/images/down-arrow.png';
const LogIn=(props)=>{
    const[goTop,setGoTop]=useState(false);
    const GoTop=(props)=>{
        setGoTop(!goTop)
    }
    return(
        <>
            <div className="Login">
                <div className="signIn">
                    <div className="signInContent">
                        <h2>ثبت نام</h2>
                        <form>
                                <Input type="text" placeholder="شماره همراه" />
                                <Input type="text" placeholder="سوال امنیتی" />
                                <div className="buttonSubmit">
                                    <Button btnType="signUp">ثبت نام مشتری</Button>
                                </div>
                        </form>
                    </div>
                    <div className="logIn" style={{height:goTop?'30%':'100%',top:goTop?'550px':'180px',bottom:goTop?'0px':'-150px',
                        transition:goTop?'all 0.2s':'all 0.2s'}}>
                        <div className="logInContent">
                            <h2>ورود</h2>
                            <form style={{opacity:goTop?'0':'1',
                                transition:goTop?'all 0.1s':'all 0.5s'
                            }}>
                                <Input type="text" placeholder="شماره همراه" />
                                <Input type="text" placeholder="رمز عبور" />
                                <div className="buttonSubmit">
                                    <Button btnType="login">ورود</Button>
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
export default React.memo(LogIn);