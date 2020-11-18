import React from 'react';
import Record from './recordTable/recordTable'
const RowTable=(props)=>{
    return(
        props.row.map((row,i)=>
            <tr>
                <Record
                    key={i}
                    id={row.id}
                    code={row.code}
                    date={row.date}
                    price={row.price}
                    result={row.result}
                />
            </tr>
        )
    )
}
export default RowTable;