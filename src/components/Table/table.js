import React from 'react';
import RowTable from './rowTable/rowTable';
import './table.css';
const Table=(props)=>{
    return(
        <table className="table">
            <tbody>
                <RowTable row={props.orders} /> 
            </tbody>
        </table>
    )
}
export default Table;