import React from 'react';
import './table.css';
import {BrowserRouter,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Table=(props)=>{
    return(
        <React.Fragment>
            <div className="glassesTitle" style={{}}>
                <h4>{props.titre}</h4>
            </div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td><Link to="/home">{props.glassesImg1}</Link></td>
                        <td><Link to="/home">{props.glassesImg2}</Link></td>
                        <td><Link to="/home">{props.glassesImg3}</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/home">{props.glassesImg4}</Link></td>
                        <td><Link to="/home">{props.glassesImg5}</Link></td>
                        <td><Link to="/home">{props.glassesImg6}</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/home">{props.glassesImg7}</Link></td>
                        <td><Link to="/home">{props.glassesImg8}</Link></td>
                        <td><Link to="/home">{props.glassesImg9}</Link></td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Table;