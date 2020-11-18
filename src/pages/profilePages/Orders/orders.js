import React, {useState} from 'react';
import Input from '../../../components/Forms/Form/form';
import "./orders.css";
import Button from '../../../components/UI/button/button';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import Table from '../../../components/Table/table';
const Orders=()=>{
    const [tableContent,setTableContent]=useState([
        {id:1,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت ناموفق'},
        {id:2,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق'},
        {id:3,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق'},
        {id:4,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق'},
        {id:5,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق'},
        {id:6,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت موفق'},
        {id:7,code:'12564',date:'99/05/25',price:'10,000,000',result:'پرداخت ناموفق'}
    ])
    return(
        <>
            <div className="orders">
                <Body>
                    <Table orders={tableContent} />
                </Body>
            </div>
        </>
    )
}
export default Orders;