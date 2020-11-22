
import React,{useState} from 'react';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import './addressList.css';
import AddressBox from '../../../components/AddressBox/addressBox';
import Button from '../../../components/UI/button/button';
import {Link} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';
const AddressList=(props)=>{
    const address =[
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
    ]
    return(
        <>
            <Body titre="آدرس های ثبت شده" className="Favorits">
                    <AddressBox 
                        address={address[0]}
                    />
                    <AddressBox 
                        address={address[1]}
                    />
                    <AddressBox 
                        address={address[2]}
                    />
                    
                    <Link to="/add-address" className="addAddress">
                        <Button btnType="seeAll">افزودن آدرس جدید</Button>
                    </Link>
            </Body>
        </>
    )
}
export default AddressList;