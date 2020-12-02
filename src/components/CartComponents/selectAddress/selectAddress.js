import React from 'react';
import './selectAddress.css';
import AddressBox from '../../AddressBox/addressBox';
import Button from '../../UI/button/button';
import {Link} from 'react-router-dom';
const SelectAddress=(props)=>{
    const address =[
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
    ]
    return(
        <>
            <div className="SelectAddress">
                <h2>انتخاب آدرس</h2>
                <AddressBox 
                    address="تهران،تهران،نوبنیاد،نارنجستان دوم،پلاک 4"
                />
                <AddressBox 
                    address="تهران،تهران،نوبنیاد،نارنجستان دوم،پلاک 4"
                />
                <AddressBox 
                    address="تهران،تهران،نوبنیاد،نارنجستان دوم،پلاک 4"
                />
                    
                <Link to="/add-address" className="addAddress">
                    <Button btnType="signUp">افزودن آدرس جدید</Button>
                </Link>
            </div>
        </>
    )
}
export default SelectAddress;