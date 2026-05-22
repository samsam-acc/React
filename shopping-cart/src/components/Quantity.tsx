import { on } from "events";
import { useState } from "react";

type Product = {
    id: number,
    image: string,
    name: string,
    quantity: number,
    price: number,
    lineTotal: number,

};

type QuantityProps = {
    product: Product;
    onChange: (qty: number) => void;
    onQuantityChange: (product: Product, q: number) => void;
};

export const Quantity = ( {product, onChange, onQuantityChange }: QuantityProps) => {
    // const [qty, setQty] = useState(0);
    const increaseQty = () => {
        const newQty = product.quantity + 1;
        // setQty(newQty);
        // onChange(newQty);
        onQuantityChange(product, newQty)
    };

    const decreaseQty = () => {
        const newQty = product.quantity +- 1;
        // setQty(newQty);
        // onChange(newQty);
        onQuantityChange(product, newQty)
        if(product.quantity <= 0){
            // setQty(0);
            // onChange(0);
            onQuantityChange(product, 0)
        }
    };

    return (
        <>
            <button onClick={increaseQty}>+</button>
            <span> { product.quantity } </span>
            <button onClick={decreaseQty}>-</button>
        </>
        
    )
}