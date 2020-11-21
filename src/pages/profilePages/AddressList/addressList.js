import React from 'react';
import './addressList.css';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import AddressBox from '../../../components/AddressBox/addressBox';

const AddressList=(props)=>{
    return(
        <>
            <Body titre="آدرس های ثبت شده" className="Favorits">
                <AddressBox 
                    address="تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
                />
                <AddressBox 
                    address="تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
                />
                <AddressBox 
                    address="تهران، تهران، پاسداران، بهارستان یکم،کوچه نوربخش اول، پلاک 5، طبقه اول"
                />
            </Body>
            
        </>
    )
}
export default AddressList;