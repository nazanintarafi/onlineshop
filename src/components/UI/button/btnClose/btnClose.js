import React from 'react';
import './btnClose.css';
import Close from '../../../../assets/images/Group 1551.png';
const BtnClose=(props)=>{
    return(
        <>
            <div className="BtnClose">
                <div className="backgroundButton">
                    <button className="button">
                        <img src={Close} alt="close" className="btnImg"/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default BtnClose;