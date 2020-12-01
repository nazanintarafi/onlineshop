import React from 'react';
import Input from '../../../components/Forms/Form/form';
import "./addAddress.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';

const AddAddress=()=>{
    return(
        <>
            <div className="orders">
                <Body titre="آدرس ها" profilePage="true">
                    <form>
                        <Input type="text" placeholder="تحویل گیرنده" />
                        <Input type="text" placeholder="استان" />
                        <Input type="number" placeholder="شهر" />
                        <Input type="text" placeholder="آدرس" />
                        <Input type="text" placeholder="کدپستی" />
                        <Input type="number" placeholder="تلفن ثابت" />
                        <Input type="number" placeholder="شماره تماس ضروری" />
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
export default AddAddress;