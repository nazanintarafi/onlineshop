import React from 'react';
import Input from '../../../components/Forms/Form/form';
import "./changePassword.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';

const ChangePassword=()=>{
    return(
        <>
            <div className="orders">
                <Body titre="تغییر پسورد" profilePage="true">
                    <form className="passwordsContent">
                        <Input type="text" placeholder="رمز عبور فعلی" />
                        <Input type="text" placeholder="رمز عبور جدید" />
                        <Input type="number" placeholder="تکرار رمز عبور جدید" />
                        <div className="submitBtn">
                            <Button btnType="changePass">ثبت</Button>
                            <Button btnType="cancel">انصراف</Button>
                        </div>
                    </form>
                </Body>
            </div>
        </>
    )
}
export default ChangePassword;