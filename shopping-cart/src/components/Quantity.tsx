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
    onChange: (qty: number) => void;
    onQuantityChange: (product: Product, q: number) => void;
};

export const Quantity = ( { onChange, onQuantityChange }: QuantityProps) => {
    const [qty, setQty] = useState(0);
    const increaseQty = () => {
        const newQty = qty + 1;
        setQty(newQty);
        onChange(newQty);
    };

    const decreaseQty = () => {
        const newQty = qty - 1;
        setQty(newQty);
        onChange(newQty);
        if(qty <= 0){
            setQty(0);
            onChange(0);
        }
    };

    return (
        <>
            <button onClick={increaseQty}>+</button>
            <span> { qty } </span>
            <button onClick={decreaseQty}>-</button>
        </>
        
    )
}