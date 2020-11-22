import React,{useState} from 'react';
import './addressList.css';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import AddressBox from '../../../components/AddressBox/addressBox';

const AddressList=(props)=>{
    const address =[
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول",
        "تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
    ]
    return(
        <>
            <Body titre="آدرس های ثبت شده" className="Favorits">
                address.map((address,index)=>(
                    <AddressBox 
                        address={address}
                    />
                ))
            </Body>
            
        </>
    )
}
export default AddressList;