import React from 'react';
import RowTable from './rowTable/rowTable';
import './table.css';
const Table=(props)=>{
    return(
        <table className="table Table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>شماره سفارش</th>
                    <th>تاریخ سفارش</th>
                    <th>مبلغ کل(ریال)</th>
                    <th>عملیات پرداخت</th>
                </tr>
            </thead>
            <tbody>
                <RowTable row={props.orders} /> 
            </tbody>
        </table>
    )
}
export default Table;