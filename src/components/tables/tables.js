import React from 'react';
import Table from './table/table';

const Tables=(props)=>{
    return(
        
        props.tablesList.map((proTable,index)=>
            <Table 
                key={index}
                width={props.width}
                titre={props.titre}
                glassesImg1={proTable.glassesImg1}
                glassesImg2={proTable.glassesImg2}
                glassesImg3={proTable.glassesImg3}
                glassesImg4={proTable.glassesImg4}
                glassesImg5={proTable.glassesImg5}
                glassesImg6={proTable.glassesImg6}
                glassesImg7={proTable.glassesImg7}
                glassesImg8={proTable.glassesImg8}
                glassesImg9={proTable.glassesImg9}
            />
        )
    )
}
export default Tables;