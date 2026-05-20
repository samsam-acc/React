import { useState } from "react";

export const Quantity = () => {
    const [qty, setQty] = useState(0);
    const increaseQty = () => {
        setQty(qty + 1);
    };

    const decreaseQty = () => {
        setQty(qty - 1);
        if(qty <= 0){
            setQty(0);
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