import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Quantity } from './Quantity';
import { Product } from './Product';



export const ProductsTable = () => {
    return (
        <>
            <table>
                <tbody>
                    <Product />
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
                        <td><Quantity /></td>
                        <td>£49.99</td>
                        <td>£99.98</td>
                    </tr>
                    <tr>
                        <td><img src={cable} alt="USB-C Charging Cable" width="80" height="80"/></td>
                        <td>USB-C Charging Cable</td>
                        <td><Quantity/></td>
                        <td>£9.99</td>
                        <td>£9.99</td>
                    </tr>
                    <tr>
                        <td><img src={stand} alt="Laptop Stand (Adjustable)" width="80" height="80"/></td>
                        <td>Laptop Stand (Adjustable)</td>
                        <td><Quantity/></td>
                        <td>£34.99</td>
                        <td>£34.99</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}