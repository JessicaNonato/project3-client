//Arrumar: private outlet está quebrando o código
//Arrumar erro do antd que está dando no terminal, ver com DK

import React from 'react';
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import FloralPage from './pages/FloralPage';
import './styles/App.css';
import 'antd/dist/antd.min.css';
import CarouselProducts from './components/CarouselProducts';

// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>    
        {/* <Route path='/private' element={<PrivateOutlet/>}> */}
          <Route path='/myfavorites' element={<MyFavorites/>}/>
          <Route path ="category/floral" element= {<FloralPage/>}/>
          <Route path ="/carousel" element= {<CarouselProducts/>}/>
          </Routes>
        
      
   
  
    </div>
  );
}

export default App;
