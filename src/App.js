import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import MyFavorites from './components/MyFavorites';
import Login from  './components/Login';
// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/private' element={<PrivateOutlet/>}> */}
          <Route path='/myfavorites' element={<MyFavorites/>}/>
        {/* </Route> */}    
      </Routes>
   
  
    </div>
  );
}

export default App;
