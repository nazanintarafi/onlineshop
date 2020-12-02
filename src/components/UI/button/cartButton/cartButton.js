import React from 'react';
import './cartButton.css';
import Close from '../../../../assets/images/Group 1551.png';
const cartButton=(props)=>{
    return(
        <>
            <div className="addressBtn">
                <div className="backgroundButton">
                    <button className="button">
                        <img src={Close} alt="close" className="btnImg"/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default cartButton;