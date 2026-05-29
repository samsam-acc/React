import { ProductsTable } from './components/ProductsTable';
import { Receipt } from './components/Receipt';
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsTable />}/>
        <Route path="/receipt" element={<Receipt />}/>
      </Routes>
    </div>
  );
}

export default App;
