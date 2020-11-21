import React from 'react';
import './favorits.css';
import Body from '../../../components/ProfilePagesBody/profilePagesBody';
import Box from '../../../components/FavoritsBox/favoritsBox';
import img from '../../../assets/images/Cosmetics (3).png';
const Favorits=(props)=>{
    return(
        <>
            <Body titre="مورد علاقه ها" className="Favorits">
                <Box name="ماشین اصلاح صورت فیلیپس مدل" img={img} price="560.000.000تومان" code=" S5370/26"/>
                <Box name="ماشین اصلاح صورت فیلیپس مدل" img={img} price="560.000.000تومان" code=" S5370/26"/>
                <Box name="ماشین اصلاح صورت فیلیپس مدل" img={img} price="560.000.000تومان" code=" S5370/26"/>
            </Body>
        </>
    )
}
export default Favorits;