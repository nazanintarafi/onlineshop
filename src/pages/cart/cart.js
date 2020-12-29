import React, {useContext} from 'react';
import './cart.css';
import YourCart from "../../components/CartComponents/yourCart/yourCart";
import SelectAddress from "../../components/CartComponents/selectAddress/selectAddress";
import ReviewCart from "../../components/CartComponents/reviewCart/reviewCart";
import Successful from "../../components/CartComponents/successful/successful";
import EmptyCart from "../../components/CartComponents/emtyCart/emptyCart";
import Toolbar from '../../containers/Footer/Toolbar/Toolbar';
import {MenuContext} from '../../context/MenuContext/MenuContext';
import {CartContext} from '../../context/CartContext/cartContext';


const Cart=(props)=>{

    const {show } = useContext(MenuContext);
    const {showLoader } = useContext(CartContext);

    return(
        <>
            
            <div className="Cart" style={{
                    position:show?'fixed':'relative',right:show?'65%':'0px',
                    top:show?'90px':'0px',height:show?'457px':'100%',overflowX:show?'hidden':'auto',width:show?'100%':'100%',
                    transition:show?'all 0.2s':'all 0.2s',zIndex:show?'100':"null"}}
            >
                <div style={{display:showLoader?"none":"block"}}>
                    <Toolbar cart={true}/>
                </div>
                <div className="firstPage" style={{display:showLoader?"none":"block"}} >
                    <div className="firstPageContent">
                        <YourCart />
                    </div>
                </div>
                <div className="secondPage" >
                    <div className="secondPageContent">
                        <SelectAddress />
                    </div>
                </div>
                <div className="thirdPageContent" style={{top:showLoader?"0":"12%"}} >
                    <div className="thirdPage">
                        <ReviewCart />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Cart;