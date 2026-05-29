import { Basket } from './components/Basket';
import { Receipt } from './components/Receipt';
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Basket />}/>
        <Route path="/receipt" element={<Receipt />}/>
      </Routes>
    </div>
  );
}

export default App;
