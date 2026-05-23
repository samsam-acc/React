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
    onQuantityChange: (product: Product, q: number) => void;
}

export const Product = (props: Props) => {

    return (
        <tr>
            <td><img src={props.product.image} alt="${props.product.productName}" width="80" height="80"/></td>
            <td>{props.product.name}</td>
            <td><Quantity product={props.product} onQuantityChange={props.onQuantityChange}/></td>
            <td>£{props.product.price}</td>
            <td>£100</td>
        </tr>
    )
}