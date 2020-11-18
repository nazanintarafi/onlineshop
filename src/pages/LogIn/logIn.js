import React, { useState } from 'react';
import './logIn.css';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from '../../components/UI/button/button';
import BtnTop from '../../components/UI/button/btnTop/btnTop';
import Input from '../../components/Forms/Form/form';
const LogIn=(props)=>{
    const[top,setTop]=useState(false);
    const Top=(props)=>{
        setTop(!top)
    }
    return(
        <>
            <div className="Login" style={{
                    position:props.show?'fixed':'relative',right:props.show?'150px':'0px',
                    top:props.show?'110px':'0px',height:props.show?'350px':'100%',overflow:props.show?'hidden':'auto',
                    transition:props.show?'all 1s':'all 1s',zIndex:props.show?'100':"null",overflow:top?"hidden":"null"}}>
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
                    <div className="logIn" style={{height:top?'30%':'100%',top:top?'100%':'180px',bottom:top?'0px':'-150px',transition:top?'all 0.5s':'all 0.5s'}}>
                        <div className="logInContent">
                            <h2>ورود</h2>
                            <form>
                                <Input type="text" placeholder="شماره همراه" />
                                <Input type="text" placeholder="رمز عبور" />
                                <div className="buttonSubmit">
                                    <Button btnType="login">ورود</Button>
                                </div>
                            </form>
                            <div className="test">
                                <BtnTop clicked={Top}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(LogIn);