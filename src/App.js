import {React} from "react";
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import FloralPage from './pages/FloralPage';
import AmadeiradoPage from './pages/AmadeiradoPage';
import CitricoPage from './pages/CitricoPage';
import OrientalPage from './pages/OrientalPage';
import AromaticoPage from './pages/AromaticoPage';
import Cart from "./components/Cart";
import ProductPage from './components/ProductPage';
import 'antd/dist/antd.min.css';
import SearchBarPage from "./pages/SearchBarPage";


function App() {

   

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>      
        <Route path ="/category/floral" element= {<FloralPage/>}/>
        <Route path ="/category/amadeirado" element= {<AmadeiradoPage/>}/>
        <Route path ="/category/citrico" element={<CitricoPage/>}/>
        <Route path ="/category/oriental" element={<OrientalPage/>}/>
        <Route path ="/category/aromatico" element={<AromaticoPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path='/myfavorites' element={<MyFavorites/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search/:qry" element={<SearchBarPage/>}/>
      </Routes>  
    </div>
  );
}

export default App;