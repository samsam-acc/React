import { BasketTotal } from "./BasketTotal"
import { ProductsTable } from "./ProductsTable"



export const Basket = () => {
    return (
        <>
            <h1>Shopping Basket</h1>
            <ProductsTable />
            <BasketTotal />
            <button type="button">Proceed to Checkout</button>
        </>
        
    )
}