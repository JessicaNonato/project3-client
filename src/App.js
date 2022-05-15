import {React, useState, useEffect} from "react";
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import FloralPage from './pages/FloralPage';
import AmadeiradoPage from './pages/AmadeiradoPage';
import CitricoPage from './pages/CitricoPage';
import OrientalPage from './pages/OrientalPage';
import AromaticoPage from './pages/AromaticoPage';
import Cart from "./components/Cart";
import ProductPage from './pages/ProductPage';
import 'antd/dist/antd.min.css';
import SearchBarPage from "./pages/SearchBarPage";
import api from "./utils/api.utils";
import FinalizarCompra from "./pages/FinalizarCompra";

function App() {
  
  const [userCart, setUserCart] = useState([]);

  const getCart = async () => {
    try {
      const cartApi = await api.getCart();
      setUserCart(cartApi.cart.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCart();
    }  
  }, []);
  
   console.log(userCart)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage getCart={getCart} userCart={userCart}/>}/>      
        <Route path ="/category/floral" element= {<FloralPage getCart={getCart} userCart={userCart}/>}/>
        <Route path ="/category/amadeirado" element= {<AmadeiradoPage getCart={getCart} userCart={userCart}/>}/>
        <Route path ="/category/citrico" element={<CitricoPage getCart={getCart} userCart={userCart}/>}/>
        <Route path ="/category/oriental" element={<OrientalPage getCart={getCart} userCart={userCart}/>}/>
        <Route path ="/category/aromatico" element={<AromaticoPage getCart={getCart} userCart={userCart}/>}/>
        <Route path="/product/:id" element={<ProductPage getCart={getCart} userCart={userCart}/>}/>
        <Route path='/myfavorites' element={<MyFavorites getCart={getCart} userCart={userCart}/>}/>
        <Route path="/cart" element={<Cart getCart={getCart} userCart={userCart}/>}/>
        <Route path="/search/:qry" element={<SearchBarPage getCart={getCart} userCart={userCart}/>}/>
        <Route path="/finalizar" element={<FinalizarCompra getCart={getCart} userCart={userCart}/>}/>
      </Routes>  
    </div>
  );
}

export default App;