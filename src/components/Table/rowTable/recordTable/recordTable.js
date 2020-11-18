import React from 'react';
import './recordTable.css';
const RecordTable=(props)=>{
    return(
       <>
            <td>{props.id}</td>
            <td>{props.code}</td>
            <td>{props.date}</td>
            <td>{props.price}</td>
            <td style={{color:props.color?"#076A02":"#BC0606"}}>{props.result}</td>
       </>
    )
}
export default RecordTable;