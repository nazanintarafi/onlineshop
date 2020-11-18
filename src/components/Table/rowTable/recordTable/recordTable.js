import React from 'react';
const RecordTable=(props)=>{
    return(
       <>
            <td>{props.id}</td>
            <td>{props.code}</td>
            <td>{props.date}</td>
            <td>{props.price}</td>
            <td>{props.result}</td>
       </>
    )
}
export default RecordTable;