import React,{useState, useEffect, useRef} from 'react';
import './App.css';
import ProfileMainBody from './pages/profile/profile';
import Profile from './containers/profileHeader/profileHeader';
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
        <Toolbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" exact component={ProfileMainBody}/>
        <Route path="/login" exact component={LogIn} />
        <Route path="/kitchen" exact component={HomePage} />
        <Route path="/cosmetics" exact component={HomePage} />
        <Route path="/digital" exact component={HomePage} />
        <Route path="/cloths" exact component={HomePage} />
    </BrowserRouter>
    
  )
}

export default App;

