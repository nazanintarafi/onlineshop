import React from 'react';
import './backdrop.css';
const Backdrop=(props)=>(
    props.show?<div className="Backdrop" onClick={props.sideClosed}></div>:null
)
export default Backdrop;