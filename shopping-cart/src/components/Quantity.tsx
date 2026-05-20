import { useState } from "react";

type QuantityProps = {
    onChange: (qty: number) => void;
};

export const Quantity = ({ onChange }: QuantityProps) => {
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