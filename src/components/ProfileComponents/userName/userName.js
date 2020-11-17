import React, {useState} from 'react';
import Input from '../../Forms/Form/form';
const UserName=()=>{
    const[placeHolder,setPlaceholder]=useState(['نام','نام خانوادگی','تاریخ تولد','کد ملی','شماره موبایل','آدرس ایمیل','شماره کارت'])
    return(
        <>
            <form className="UserName">
                <Input type="text" placeholder="نام" />
                <Input type="text" placeholder="نام خانوادگی" />
                <Input type="number" placeholder="تاریخ تولد" />
                <Input type="number" placeholder="کد ملی" />
                <Input type="number" placeholder="شماره موبایل" />
                <Input type="email" placeholder="آدرس ایمیل" />
                <Input type="number" placeholder="شماره کارت" />
            </form>
        </>
    )
}
export default UserName;