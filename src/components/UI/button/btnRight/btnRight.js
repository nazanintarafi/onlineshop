import React, { useContext} from 'react';
import './btnRight.css';
import right from '../../../../assets/images/Group 1569.png';
import {MenuContext} from '../../../../context/MenuContext/MenuContext';


const BtnRight=(props)=>{

    const profileContext= useContext(MenuContext);
    const {show } =  profileContext ;

    const ShowProfileMenu=()=>{
        profileContext.ShowProfileMenu();
    }
    const Show=()=>{
        profileContext.Show();
    }

    

    let classes=["btnImg"];
    if (show){
        classes.push("rotate");
    }

    return(
        <div className="rightBackgroundButton">
            <div onClick={ShowProfileMenu}>
                <div onClick={Show}>
                    <button className="rightButton" onClick={props.clicked}>
                        <img src={right} alt="right" className={classes.join(' ')} style={{transform:show?([{rotate:"180deg"}]):([{rotate:"-90deg"}]),
                        transition:show?"all 0.1s":"all 0.1s"}} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BtnRight;
