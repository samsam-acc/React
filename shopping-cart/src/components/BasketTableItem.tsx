import { Quantity } from './Quantity';
import { useBasket } from "./../context/BasketProvider"

type Props = {
    id: number,
}

export const BasketTableItem = ({id}: Props) => {
    const { products } = useBasket();
    const product = products[id];

    return (
        <tr key={product.id}>
            <td><img src={product.image.url} alt={`${product.image.name}`} width="80" height="80" className="boxed" /></td>
            <td>{product.name}</td>
            <td><Quantity id={id}/></td>
            <td>£ {product.price}</td>
            <td>£ {(product.lineTotal).toFixed(2)}</td>
        </tr>
    )
}