import { Product } from "./BasketItems"
type props = {
    product: Product
}

export const OrderSummaryItem = ({product}: props) => {
    return (
        <>
            <tr>
                <td>{ product.name }</td>
                <td>{ product.quantity }</td>
                <td>{ product.price }</td>
                <td>{ (product.lineTotal).toFixed(2) }</td>
            </tr>
        </>
    )
}