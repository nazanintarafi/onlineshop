import React, {useState} from 'react';
import "./orders.css";
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import Table from '../../../components/Table/table';
const Orders=()=>{
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
                <Body titre="سفارش ها" profilePage="true">
                    <Table orders={tableContent} />
                </Body>
            </div>
        </>
    )
}
export default Orders;