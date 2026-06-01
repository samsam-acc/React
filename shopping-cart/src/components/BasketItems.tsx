import { Quantity } from './Quantity';

export type Product = {
    id: number,
    image: string,
    name: string,
    quantity: number,
    price: number,
    lineTotal: number,

};

type Props = {
    products: Product[];
    onQuantityChange: (product: Product, q: number) => void;
}

export const BasketItem = ({products, onQuantityChange}: Props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Line Total</th>
                </tr>
                
                {products.map((product) => (
                    <tr>
                        <td><img src={product.image} alt="${product.name}" width="80" height="80" className="boxed" /></td>
                        <td>{product.name}</td>
                        <td><Quantity product={product} onQuantityChange={onQuantityChange}/></td>
                        <td>£ {product.price}</td>
                    <td>£ {(product.lineTotal).toFixed(2)}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )
}