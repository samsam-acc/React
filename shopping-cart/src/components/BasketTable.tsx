import { BasketTableHeader } from './BasketTableHeader';
import { BasketTableItem } from './BasketTableItem';

export type Product = {
    id: number,
    image: string,
    name: string,
    quantity: number,
    price: number,
    lineTotal: number,

};

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