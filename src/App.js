//Arrumar: private outlet está quebrando o código
//Arrumar erro do antd que está dando no terminal, ver com DK

import React from 'react';
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import FloralPage from './pages/FloralPage';
import AmadeiradoPage from './pages/AmadeiradoPage';
import CitricoPage from './pages/CitricoPage';
import OrientalPage from './pages/OrientalPage';
import AromaticoPage from './pages/AromaticoPage';
import './styles/App.css';
import 'antd/dist/antd.min.css';


// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>    
        {/* <Route path='/private' element={<PrivateOutlet/>}> */}
          <Route path='/myfavorites' element={<MyFavorites/>}/>
          <Route path ="category/floral" element= {<FloralPage/>}/>
          <Route path ="category/amadeirado" element= {<AmadeiradoPage/>}/>
          <Route path ="category/citrico" element={<CitricoPage/>}/>
          <Route path ="category/oriental" element={<OrientalPage/>}/>
          <Route path ="category/aromatico" element={<AromaticoPage/>}/>
          
          </Routes>
        
      
   
  
    </div>
  );
}

export default App;
