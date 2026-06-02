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
    onQuantityChange: (product: Product, q: number) => void;
};

export const Quantity = ( {product, onQuantityChange }: QuantityProps) => {
    const increaseQty = () => {
        const newQty = product.quantity + 1;
        onQuantityChange(product, newQty)
    };

    const decreaseQty = () => {
        const newQty = product.quantity +- 1;
        onQuantityChange(product, newQty)
        if(product.quantity <= 0){
            onQuantityChange(product, 0)
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