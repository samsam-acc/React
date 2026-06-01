import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


jest.mock('./assets/wireless.jpg', () => 'wireless.jpg');
jest.mock('./assets/cable.jpg', () => 'cable.jpg');
jest.mock('./assets/stand.jpg', () => 'stand.jpg');


// jest.mock('./components/Basket', () => ({
//   __esModule: true,
//   Basket: () => <div>Basket Page</div>
// }))

// jest.mock('./components/Receipt', () => ({
//   __esModule: true,
//   Receipt: () => <div>Receipt Page</div>
// }))

describe('App routing', () => {
  it('Renders Basket on "/" route', async () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByText(/basket page/i)).toBeInTheDocument();
  });
  it('Renders Receipt on "/receipt" route', async () => {
    render(<MemoryRouter initialEntries={['/receipt']}><App /></MemoryRouter>)
    expect(screen.getByText(/receipt page/i)).toBeInTheDocument();
  });

})
