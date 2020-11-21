import React, {useState} from 'react';
import Input from '../../../components/Forms/Form/form';
import "./profile.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
const Profile=()=>{
    return(
        <>
            <Body profile="true">
                <form className="UserName">
                    <Input type="text" placeholder="نام" />
                    <Input type="text" placeholder="نام خانوادگی" />
                    <Input type="number" placeholder="تاریخ تولد" />
                    <Input type="number" placeholder="کد ملی" />
                    <label className="userNameRadioBtn foreigner">
                        <input type="radio" value="Foreigner" name="Fareiner" checked="checked" />
                        <span className="checkmark">تبعه خارجی</span>
                    </label>
                    <Input type="number" placeholder="شماره موبایل" />
                    <Input type="email" placeholder="آدرس ایمیل" />
                    <Input type="number" placeholder="شماره کارت" />
                    <label className="userNameRadioBtn newsletters">
                        <input type="checkbox" value="share" name="newsletters" checked="checked"/>
                        <span className="checkmark">اشتراک در خبرنامه آنلاین شاپ</span>
                    </label>
                    <div className="submitBtn">
                        <Button btnType="submit">ثبت اطلاعات</Button>
                    </div>
                </form>
            </Body>
        </>
    )
}
export default Profile;