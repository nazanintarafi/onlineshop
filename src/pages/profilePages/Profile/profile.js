import React from 'react';
import Input from '../../../components/Forms/Form/form';
import "./profile.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
const Profile=()=>{
    return(
        <>
            <Body profile="true" profilePage="true">
                <form className="UserName">
                    <Input type="text" placeholder="نام" />
                    <Input type="text" placeholder="نام خانوادگی" />
                    <Input type="number" placeholder="تاریخ تولد" />
                    <Input type="number" placeholder="کد ملی" />
                    <div className="UserNameLabelStyle">
                        <label className="userNameRadioBtn foreignerLabel">
                            <input type="checkbox" name="selector"/>
                            <span className="foreigner"></span>
                            <span className="foreignerName">تبعه خارجی</span>
                        </label>
                    </div>
                    <Input type="number" placeholder="شماره موبایل" />
                    <Input type="email" placeholder="آدرس ایمیل" />
                    <Input type="number" placeholder="شماره کارت" />
                    <div className="UserNameLabelStyle">
                        <label className="userNameRadioBtn newslettersLabel">
                            <input type="checkbox" value="share" name="newsletters"/>
                            <span className="share"></span>
                            <span className="shareName">اشتراک در خبرنامه آنلاین شاپ</span>
                        </label>
                    </div>
                    <div className="submitBtn">
                        <Button btnType="submit">ثبت اطلاعات</Button>
                    </div>
                </form>
            </Body>
        </>
    )
}
export default Profile;