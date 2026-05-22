import { useState } from 'react';
import { Quantity } from './Quantity';

type Props = {
    //add name
    id: number
    image: string,
    price: number,
};

type LineTotalProps = {
    onChange: (id: number, lineTotal: number) => void;
};

type ProductProps = Props & LineTotalProps;

export const Product = (productProps: ProductProps) => {
    const [quantity, setQuantity] = useState(0);
    const handleQuantityChange = (qty: number) => {
        setQuantity(qty); 
    };

    let lineTotal = quantity * productProps.price;
    productProps.onChange(productProps.id, lineTotal);

    return (
        <tr>
            <td><img src={productProps.image} alt="wireless headphones" width="80" height="80"/></td>
            <td>Wireless Headphones</td>
            <td><Quantity onChange={handleQuantityChange}/></td>
            <td>£{productProps.price}</td>
            <td>£{lineTotal.toFixed(2)}</td>
        </tr>
    )
}