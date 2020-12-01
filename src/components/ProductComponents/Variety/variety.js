import React , {useState} from 'react';
import Button from '../../UI/button/button';
import './variety.css';
import Colors from '../Colors/colors';
import Warranty from '../Warranty/warranty';

const Variety=(props)=>{
    const[openColor,setOpenColor]=useState(false);

    const OpenColor=()=>{
        setOpenColor(!openColor)
    }

    let classes=["Variety"];
    if(props.changeButton){
        classes.push("VarietyAnimation");
    }
    if(openColor){
        classes.push("closeVariety")
    }

    let select=["ProductSelection"];
    switch(props.changeButton){
        case true:
            select.push("openProductSelection");
            break;
        default:
            break; 
    }


    let color=["VarietyColors"];
    switch(openColor){
        case true:
            color.push("colorAnimation");
            break;
        default:
            break; 
    }

    return(
        <>
            <div  className={classes.join(' ')}>
                <div className={select.join(' ')}>
                    <div className="varietyBtn">
                        <Button btnType="submit" >ثبت تنوع</Button>
                    </div>
                    <div className="row VarietyContent">
                        <div className="col-3 col-xs-4 col-md-4 varifyColor p-0">
                            <span onClick={OpenColor}>نقره ای</span>
                        </div>
                        <div className="col-9 col-xs-8 col-md-8 BorderRightV">
                            <span>گارانتی ضمانت سلامت تحویل کالا آنلاین شاپ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={color.join(' ')}>
                <Colors />
            </div>

            <div className="VarietyWarranty">
                <Warranty />
            </div>
        </>
    )
}
export default Variety;
