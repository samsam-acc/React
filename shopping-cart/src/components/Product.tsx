import { useState } from 'react';
import { Quantity } from './Quantity';

type Product = {
    id: number,
    image: string,
    name: string,
    quantity: number,
    price: number,
    lineTotal: number,

};

type Props = {
    product: Product;
}

export const Product = (props: Props) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (qty: number) => {
        setQuantity(qty); 
    };

    let subtotal = (quantity * props.product.price).toFixed(2);

    return (
        <tr>
            <td><img src={props.product.image} alt="${props.product.productName}" width="80" height="80"/></td>
            <td>{props.product.name}</td>
            <td><Quantity onChange={handleQuantityChange}/></td>
            <td>£{props.product.price}</td>
            <td>£{subtotal}</td>
        </tr>
    )
}