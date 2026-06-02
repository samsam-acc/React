import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { BasketTable } from './BasketTable';
import { BasketTotal } from './BasketTotal';
import { updateProducts, calculateBasketSummary, createOrderNumber, postOrderConfirmation } from '../helpers/BasketHelpers';
import type { Product } from './BasketTable';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Summary = {
    subtotal: number,
    shipping: number,
    total: number,
}

export type OrderInfo = {
    orderId: string,
    date: string,
}

export type Checkout = {
    orderInfo: OrderInfo,
    products: Product[],
    summary: Summary,
}

export const Basket = () => {
    const updateQuantity = (product: Product, newQuantity: number) => {
        product.quantity = newQuantity;
        product.lineTotal = newQuantity * product.price;
        
        setProducts(updateProducts(products, product));
        setSummary(calculateBasketSummary(products, summary.shipping))
    }

    const [products, setProducts] = useState([
        {
            id: 0,
            image: wireless,
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: 1,
            image: cable,
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: 2,
            image: stand,
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
    ]);

    const [summary, setSummary] = useState({
        subtotal: 0,
        shipping: 4.99,
        total: 0,
    })

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const orderInfo = createOrderNumber();
        const checkout:Checkout = {orderInfo, products, summary};

        const result = await postOrderConfirmation(checkout);

        navigate("/receipt", { state: { checkoutConfirmation: result } });
    }

    
    return (
        <div className='basket' >
            <strong>Shopping Basket</strong>
            <hr />
            <form onSubmit={handleSubmit}>
                <BasketTable products={products} onQuantityChange={updateQuantity} />
                <hr />
                <BasketTotal summary={summary}/>
                <hr />
                <button type="submit">Proceed to Checkout</button>
            </form>
        </div>
    )
}