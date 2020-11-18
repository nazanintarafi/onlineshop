import React, {useState} from 'react';
import Input from '../../../components/Forms/Form/form';
import "./changePassword.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import Table from '../../../components/Table/table';
const ChangePassword=()=>{
    const [tableContent,setTableContent]=useState([
        {id:1,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت ناموفق',color:false},
        {id:2,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق',color:true},
        {id:3,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق',color:true},
        {id:4,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق',color:true},
        {id:5,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق',color:true},
        {id:6,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق',color:true},
        {id:7,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت ناموفق',color:false}
    ])
    return(
        <>
            <div className="orders">
                <Body titre="تغییر پسورد">
                    <form>
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