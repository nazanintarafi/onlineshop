import React from 'react';
import './App.css';
import Product from './pages/Product/product';
import Cart from './pages/cart/cart';
import EmptyCart from './pages/cart/emptyCart/emptyCart';
import Successful from './pages/cart/successful/successful';
import Arthboard from './pages/Arthboard/arthboard';
import Seller from './pages/Seller/seller';
import Profile from './pages/profilePages/Profile/profile';
import Orders from './pages/profilePages/Orders/orders';
import Favorits from './pages/profilePages/Favorits/favorits';
import AddressList from './pages/profilePages/AddressList/addressList';
import ChangePassword from './pages/profilePages/ChangePassword/changePassword';
import AddAddress from './pages/profilePages/AddAddress/addAddress';
import AboutOnlineShop from './pages/PurplePages/aboutOnlineShop/about';
import Rules from './pages/PurplePages/rules/rules';
import Privacy from './pages/PurplePages/privacy/privacy';
import Contacts from './pages/Contacts/contacts';
import Questions from './pages/Questions/questions';
import HomePage from './pages/Home/home';
import LogIn from './pages/LogIn/logIn';
import MediaHome1 from './pages/Media/mediaHome1/mediaHome1';
import MediaHome2 from './pages/Media/mediaHome2/mediaHome2';
import MediaHome3 from './pages/Media/mediaHome3/mediaHome3';
import {BrowserRouter,Route} from 'react-router-dom';
import MenuContextProvider from './context/MenuContext/MenuContext';
import ProductContextProvider from './context/productContext/productContext';
import CartContextProvider from './context/CartContext/cartContext';
import MainMenu from './components/mainMenu/mainMenu';
const App=() =>{
  return(
    <BrowserRouter>
      <MenuContextProvider>
        <MainMenu />
        <ProductContextProvider>
          <Route path="/product" exact component={Product} />
        </ProductContextProvider>
        <CartContextProvider>
          <Route path="/cart" exact component={Cart} />
        </CartContextProvider>
        <Route path="/empty-cart" exact component={EmptyCart} />
        <Route path="/successful" exact component={Successful} />
        <Route path="/arthboard" exact component={Arthboard} />
        <Route path="/media1" exact component={MediaHome1} />
        <Route path="/media2" exact component={MediaHome2} />
        <Route path="/media3" exact component={MediaHome3} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutOnlineShop} />
        <Route path="/rules" exact component={Rules} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/orders" exact component={Orders} />
        <Route path="/favorits" exact component={Favorits} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/address-list" exact component={AddressList} />
        <Route path="/add-address" exact component={AddAddress} />
        <Route path="/change-password" exact component={ChangePassword} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/seller" exact component={Seller} />
      </MenuContextProvider>
    </BrowserRouter>
    
  )
}

export default App;

