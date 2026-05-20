import { useState } from 'react';
import { Quantity } from './Quantity';

type Props = {
    image: string,
    price: number,
};

export const Product = (props: Props) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (qty: number) => {
        setQuantity(qty); 
    };

    let subtotal = (quantity * props.price).toFixed(2);

    return (
        <tr>
            <td><img src={props.image} alt="wireless headphones" width="80" height="80"/></td>
            <td>Wireless Headphones</td>
            <td><Quantity onChange={handleQuantityChange}/></td>
            <td>£{props.price}</td>
            <td>£{subtotal}</td>
        </tr>
    )
}