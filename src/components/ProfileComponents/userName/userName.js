import React, {useState} from 'react';
import Forms from '../../Forms/forms';
const Profile=()=>{
    const[placeHolder,setPlaceholder]=useState(['نام','نام خانوادگی','تاریخ تولد','کد ملی','شماره موبایل','آدرس ایمیل','شماره کارت'])
    return(
        <>
            <Forms formPlaceholder={placeHolder} titre="عینک آفتابی ها"/>
        </>
    )
}
export default Profile;