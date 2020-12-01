import React from 'react';
import './App.css';
import Product from './pages/Product/product';
import Arthboard from './pages/Arthboard/arthboard';
import Seller from './pages/Seller/seller';
import Profile from './pages/profilePages/Profile/profile';
import Orders from './pages/profilePages/Orders/orders';
import Favorits from './pages/profilePages/Favorits/favorits';
import AddressList from './pages/profilePages/AddressList/addressList';
import ChangePassword from './pages/profilePages/ChangePassword/changePassword';
import AddAddress from './pages/profilePages/AddAddress/addAddress';
import HomePage from './pages/Home/home';
import LogIn from './pages/LogIn/logIn';
import {BrowserRouter,Route} from 'react-router-dom';
const App=() =>{
  return(
    <BrowserRouter>
      <Route path="/product" exact component={Product} />
        <Route path="/arthboard" exact component={Arthboard} />
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/orders" exact component={Orders} />
        <Route path="/favorits" exact component={Favorits} />
        <Route path="/address-list" exact component={AddressList} />
        <Route path="/add-address" exact component={AddAddress} />
        <Route path="/change-password" exact component={ChangePassword} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/seller" exact component={Seller} />

    </BrowserRouter>
    
  )
}

export default App;

