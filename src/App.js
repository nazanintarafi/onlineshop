import React,{useState, useEffect, useRef} from 'react';
import './App.css';
import Profile from './pages/profilePages/Profile/profile';
import Orders from './pages/profilePages/Orders/orders';
import Favorits from './pages/profilePages/Favorits/favorits';
import AddressList from './pages/profilePages/AddressList/addressList';
import ChangePassword from './pages/profilePages/ChangePassword/changePassword';
import AddAddress from './pages/profilePages/AddAddress/addAddress';
import HomePage from './pages/Home/home';
import Toolbar from './containers/Footer/Toolbar/Toolbar';
import SideDrawer from './containers/Footer/SideDrawer/SideDrawer';
import MainMenu from './components/mainMenu/mainMenu';
import LogIn from './pages/LogIn/logIn';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from './components/UI/button/btnTop/btnTop';
import Slider from './components/slider/slider';
import img1 from './assets/images/Path 146.png';
import img2 from './assets/images/Group 413.png';
import img3 from './assets/images/Mask Group 176.png';
const App=() =>{
  return(
    <BrowserRouter>
        
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/orders" exact component={Orders} />
        <Route path="/favorits" exact component={Favorits} />
        <Route path="/address-list" exact component={AddressList} />
        <Route path="/add-address" exact component={AddAddress} />
        <Route path="/change-password" exact component={ChangePassword} />
        <Route path="/login" exact component={LogIn} />

    </BrowserRouter>
    
  )
}

export default App;

