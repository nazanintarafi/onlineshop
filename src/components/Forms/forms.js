import React, {useState} from 'react';
import Form from './Form/form';
const Forms=(props)=>{
    return(
        props.formPlaceholder.map((formPlaceholder,index)=>
            <form>
                <input type="text" placeholder={formPlaceholder}/>
            </form>
        )
    )
}
export default Forms;