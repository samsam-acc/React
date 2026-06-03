import { Basket } from './components/basket/Basket';
import { Receipt } from './components/Receipt';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { BasketProvider } from './context/BasketProvider';

function App() {
  return (
    <BasketProvider> 
    <div className="App">
      <Routes>
        <Route path="/" element={<Basket />}/>
        <Route path="/receipt" element={<Receipt />}/>
      </Routes>
    </div>
    </BasketProvider>
  );
}

export default App;
