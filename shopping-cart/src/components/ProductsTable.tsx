import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Product } from './Product';
import { BasketTotal } from './BasketTotal';

export const ProductsTable = () => {
    const products = [
        {
            id: 0,
            image: wireless,
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: 1,
            image: cable,
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: 2,
            image: stand,
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
    ]
    let id = 0;

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Line Total</th>
                    </tr>
                    <Product product={products[id++]} />
                    <Product product={products[id++]} />
                    <Product product={products[id++]} />
                </tbody>
            </table>
            <BasketTotal />
        </>
    )
}