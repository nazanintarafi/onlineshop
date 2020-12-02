import React,{useState} from 'react';
import './cartBox.css';
const CartBox=(props)=>{

    const [number,setNumber]= useState("1")
    const Add=()=>{
        setNumber(number + 1)
    }

    const Minus=()=>{
        setNumber(number-1)
    }
    const [close,setClose]=useState(false);
    const Close=()=>{
        setClose(!close)
    }

    return(
        <>
            <div className="CartBox" style={{display:close?"none":"block"}}>
                <div className="CartBoxContent">
                    <div style={{display:"flex"}}>
                        <div className="cartIMG">
                            <img src={props.cartIMG} alt="onlineshop" />
                        </div>
                        <div className="cartDescription">
                            <h3>ماشین اصلاح صورت فیلیپس مدل<span> S5370/26</span></h3>
                            <p>رنگ:<span>{props.color}</span></p>
                            <p>گارانتی:<span>{props.warranty}</span></p>
                            <p>نام فروشگاه:<span>{props.storeName}</span></p>
                        </div>
                        <div className="closeSvg" onClick={Close}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="cartSection">
                        <div className="Number">
                            <div className="NumberBox">
                                <span className="add" onClick={Add}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </span>
                                <span className="number">
                                    {number}
                                </span>
                                <span className="subtraction" onClick={Minus}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="Price">
                            <div><del>{props.oldPrice}</del></div>
                            <span>{props.newPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartBox;