import React from 'react';
import './SideDrawer.css';
import Backdrop from '../../../components/UI/backdrop/backdrop';
const SideDrawer = (props)=>{
    return(
        <React.Fragment>
            <Backdrop show={props.show} sideClosed={props.sideClosed} />
            <div className="sideDrawer"
            style={{transform:props.show?'translateX(0)':'translateX(100vw)',
                    opacity:props.show?'1':'0'}}
            >
                {props.children}
            </div>
        </React.Fragment>
        
    )
}
export default React.memo(SideDrawer);