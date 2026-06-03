import { useBasket } from "./../context/BasketProvider"

type Props = {
    id: number,
}

export const Quantity = ({id}: Props) => {
    const { products, updateQuantity } = useBasket();
    const product = products[id];

    const increaseQty = () => {
        const newQty = product.quantity + 1;
        updateQuantity(product, newQty)
    };

    const decreaseQty = () => {
        const newQty = product.quantity +- 1;
        updateQuantity(product, newQty)
        if(product.quantity <= 0){
            updateQuantity(product, 0)
        }
    };

    return (
        <div className="boxed">
            <button type="button" className="unstyled-btn" onClick={increaseQty}>+] </button>
            <span> { product.quantity } </span>
            <button type="button" className="unstyled-btn" onClick={decreaseQty}>[-</button>
        </div>
        
    )
}