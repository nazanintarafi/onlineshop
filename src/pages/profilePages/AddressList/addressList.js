import React from 'react';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import AddressBox from '../../../components/AddressBox/addressBox';
const AddressList=(props)=>{
    return(
        <>
            <Body titre="مورد علاقه ها" className="Favorits">
                <AddressBox />
            </Body>
            
        </>
    )
}
export default AddressList;