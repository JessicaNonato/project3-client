import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
   
  
    </div>
  );
}

export default App;
