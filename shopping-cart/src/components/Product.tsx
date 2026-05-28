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

export const Product = ({product, onQuantityChange}: Props) => {

    return (
        <tr>
            <td><img src={product.image} alt="${props.product.productName}" width="80" height="80" className="boxed" /></td>
            <td>{product.name}</td>
            <td><Quantity product={product} onQuantityChange={onQuantityChange}/></td>
            <td>£ {product.price}</td>
            <td>£ {(product.lineTotal).toFixed(2)}</td>
        </tr>
    )
}