import { Product } from '../types/Product';
import { BasketTableHeader } from './BasketTableHeader';
import { BasketTableItem } from './BasketTableItem';

type Props = {
    products: Product[];
    onQuantityChange: (product: Product, q: number) => void;
}

export const BasketTable = ({products, onQuantityChange}: Props) => {
    return (
        <table>
            <BasketTableHeader />
            <tbody>
                {products.map((product) => (
                    <BasketTableItem key={product.id} product={product} onQuantityChange={onQuantityChange}/>
                ))}
            </tbody>
        </table>
    )
}