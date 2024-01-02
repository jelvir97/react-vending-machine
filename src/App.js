import VendingMachine from './VendingMachine';
import Snack from './Snack';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/chips" element={<Snack name="Chips" />}/>
          <Route path="/candy" element={<Snack name="Candy" />}/>
          <Route path="/chocolate" element={<Snack name="Chocolate" />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
