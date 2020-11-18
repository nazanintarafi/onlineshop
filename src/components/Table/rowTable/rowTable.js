import React from 'react';
import Record from './recordTable/recordTable';
import './rowTable.css';
const RowTable=(props)=>{
    return(
        props.row.map((row,i)=>
            <tr className="RowTable">
                <Record
                    key={i}
                    id={row.id}
                    code={row.code}
                    date={row.date}
                    price={row.price}
                    result={row.result}
                    color={row.color}
                />
            </tr>
        )
    )
}
export default RowTable;