import { Quantity } from './Quantity';
import { Product } from "../types/Product";


type Props = {
    product: Product;
    onQuantityChange: (product: Product, q: number) => void;
}

export const BasketTableItem = ({product, onQuantityChange}: Props) => {
    return (
        <tr key={product.id}>
            <td><img src={product.image} alt="${product.name}" width="80" height="80" className="boxed" /></td>
            <td>{product.name}</td>
            <td><Quantity product={product} onQuantityChange={onQuantityChange}/></td>
            <td>£ {product.price}</td>
            <td>£ {(product.lineTotal).toFixed(2)}</td>
        </tr>
    )
}