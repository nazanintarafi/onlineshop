import React, {useState} from 'react';
import Input from '../../../components/Forms/Form/form';
import "./addAddress.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import Table from '../../../components/Table/table';
const AddAddress=()=>{
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