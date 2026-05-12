import React from 'react';
import logo from './logo.svg';
import wireless from './assets/wireless.jpg';
import cable from './assets/cable.jpg';
import stand from './assets/stand.jpg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping Basket</h1>
      <table>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Line Total</th>
        </tr>
        <tr>
          <td><img src={wireless} alt="wireless headphones" width="80" height="80"/></td>
          <td>Wireless Headphones</td>
          <td>-2+</td>
          <td>£49.99</td>
          <td>£99.98</td>
        </tr>
        <tr>
          <td><img src={cable} alt="USB-C Charging Cable" width="80" height="80"/></td>
          <td>USB-C Charging Cable</td>
          <td>-1+</td>
          <td>£9.99</td>
          <td>£9.99</td>
        </tr>
        <tr>
          <td><img src={stand} alt="Laptop Stand (Adjustable)" width="80" height="80"/></td>
          <td>Laptop Stand (Adjustable)</td>
          <td>-1+</td>
          <td>£34.99</td>
          <td>£34.99</td>
        </tr>
      </table>
      <p><strong>Subtotal</strong> £144.96</p>
      <p><strong>Shipping</strong> £4.99</p>
      <p><strong>Total</strong> £149.95</p>
      <button type="button">Proceed to Checkout</button>
    </div>
  );
}

export default App;
