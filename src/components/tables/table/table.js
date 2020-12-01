import React from 'react';
import './table.css';
import {Link} from 'react-router-dom';
const Table=(props)=>{
    return(
        <>
            <div className="glassesTitle">
                <h4>{props.titre}</h4>
            </div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td><Link to="/home"><img src={props.glassesImg1} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg2} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg3} alt="product" /></Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/home"><img src={props.glassesImg4} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg5} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg6} alt="product" /></Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/home"><img src={props.glassesImg7} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg8} alt="product" /></Link></td>
                        <td><Link to="/home"><img src={props.glassesImg9} alt="product" /></Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table;