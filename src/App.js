import React, { useEffect } from 'react';
import './App.css';
import Product from './pages/Product/product';
import Cart from './pages/cart/cart';
import EmptyCartPage from './pages/cart/emptyCartPage/emptyCartPage';
import Successful from './pages/cart/successfulPage/successfulPage';
import Loader from './components/CartComponents/Loader/loader';
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
import MediaContextProvider from './context/MediaContext/mediaContext';
import CartContextProvider from './context/CartContext/cartContext';
import MainMenu from './components/mainMenu/mainMenu';
import Media1Menu from './components/mediaMenu/mediaMenu1/mediaMenu1';
import Media2Menu from './components/mediaMenu/mediaMenu2/mediaMenu2';

import {get,post} from './library/request';// in
const App=() =>{
  useEffect(()=>{
    //tanha kari k lazeme bokoni bara rest ine k in file balayiyo import koni ,bad age method get bood get ro biyar , age post bod post ro biyar 
    // too tamame safahat ? ya unjaha k form mikhad , onjahayi k lazeme az back data begiri , tagriban hameye safahatet , inayi k to zadi hamashon statican bayad dynamic beshe
    //bad mese payine endpint akhariyaro mizani inja "users" bood bad to then data ro bet pas mide , age error ham dad to catch
    // soal moali ? :D na daram hazm mikonam felan =D bebin , to daRKHAST DADI YE DATAYIRO AZ YE ADREESE DG DAR GHALEBE OBJECT GEREFTI
    //OKEYE ? :d BORO BEKHON AGHAA beram bekhunm ok vali vidEO E GOFTI ZIADE RE , HAALA TO BVEBIN HAMASHO BASHEEE MOCHAKERAAAAAMMMM:d FADA MADA
    get('users') //in
    .then(data=>{
      console.log(data)
    })
    .catch(e=>{
      console.log(e)
    })
  },[])
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
        <Route path="/loader" exact component={Loader} />
        <Route path="/empty-cart" exact component={EmptyCartPage} />
        <Route path="/successful" exact component={Successful} />
        <Route path="/arthboard" exact component={Arthboard} />
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
      <div style={{backgroundColor:"#d1e5f0"}}>
        <MediaContextProvider>
          <Media1Menu />
          <Media2Menu />
          <Route path="/media1" exact component={MediaHome1} />
          <Route path="/media2" exact component={MediaHome2} />
          <Route path="/media3" exact component={MediaHome3} />
        </MediaContextProvider>
      </div>
    </BrowserRouter>
    
  )
}

export default App;

