import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Product } from './Product';

type Props = {
    image: string,
    price: number,
}

export const ProductsTable = () => {
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
                    <Product image={wireless} price={49.99}/>
                    <Product image={cable} price={9.99}/>
                    <Product image={stand} price={34.99}/>
                </tbody>
            </table>
        </>
    )
}