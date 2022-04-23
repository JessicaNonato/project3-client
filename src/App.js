//Arrumar: private outlet está quebrando o código
//Arrumar erro do antd que está dando no terminal, ver com DK
import {React, useEffect, useState} from "react";
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import FloralPage from './pages/FloralPage';
import AmadeiradoPage from './pages/AmadeiradoPage';
import CitricoPage from './pages/CitricoPage';
import OrientalPage from './pages/OrientalPage';
import AromaticoPage from './pages/AromaticoPage';
import Cart from "./components/Cart";
import './styles/App.css';
import ProductCard from './components/ProductCard';
import 'antd/dist/antd.min.css';
import api from './utils/api.utils';


// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

   

    const getCart = async () => {
      try {
          const cartApi = await api.getCart();
          setCart( cartApi );
  
      } catch (error) {
          console.log(error);
      }
  }
//  useEffect(() => {
//    getCart();    
//}, []);
   

   const getFavorites = async () => {
    try {
        const favoritesApi = await api.getAllFavorites();
        setFavorites( favoritesApi );

    } catch (error) {
        console.log(error);
    }
}
//useEffect(() => {
//  getFavorites();
//}, []);

    const addFavorites = async (productId) => {
      try {
          const addFavoritesApi = await api.addFavorites();
          getFavorites();
  
      } catch (error) {
          console.log(error);
      }
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>    
        {/* <Route path='/private' element={<PrivateOutlet/>}> */}
          <Route path='/myfavorites' element={<MyFavorites/>}/>
          <Route path ="/category/floral" element= {<FloralPage/>}/>
          <Route path ="/category/amadeirado" element= {<AmadeiradoPage/>}/>
          <Route path ="/category/citrico" element={<CitricoPage/>}/>
          <Route path ="/category/oriental" element={<OrientalPage/>}/>
          <Route path ="/category/aromatico" element={<AromaticoPage/>}/>
          <Route path="/product/:id" element={<ProductCard  getCart={getCart} addFavorites={addFavorites} getFavorites={getFavorites} favorites={favorites}/>} />
          <Route path="/cart" element={<Cart/>}/>
  
          
          </Routes>
        
      
   
  
    </div>
  );
}

export default App;
