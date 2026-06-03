import { BasketTableHeader } from './BasketTableHeader';
import { BasketTableItem } from './BasketTableItem';
import { useBasket } from '../context/BasketProvider';

export const BasketTable = () => {
    const { products } = useBasket();

    return (
        <table>
            <BasketTableHeader />
            <tbody>
                {products.map((product) => (
                    <BasketTableItem key={product.id} id={Number(product.id)}/>
                ))}
            </tbody>
        </table>
    )
}