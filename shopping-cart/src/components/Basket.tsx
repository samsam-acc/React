import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { BasketItem } from './BasketItem';
import { BasketTotal } from './BasketTotal';
import { updateProducts, calculateBasketSummary,getOrderDate, createOrderId } from '../helpers/BasketHelpers';
import type { Product } from './BasketItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const getOrderConfirmation = () => {

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

    const createOrderNumber = () => {
        const current = new Date();

        const date = getOrderDate(current);
        const orderId = createOrderId(current);

        const order = {
            orderId: orderId,
            date: date,
        }
        return order;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const order = createOrderNumber();
        const checkout = {order, products, summary};

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(checkout)
        })
        .then(res => res.json())
        .then(data => {
        console.log('response:', data);
        });
        navigate("/receipt");
    }

    

    let id = 0;
    
    return (
        <div className='basket' >
            <strong>Shopping Basket</strong>
            <hr />
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Line Total</th>
                        </tr>
                        <BasketItem product={products[id++]} onQuantityChange={updateQuantity} />
                        <BasketItem product={products[id++]} onQuantityChange={updateQuantity} />
                        <BasketItem product={products[id++]} onQuantityChange={updateQuantity} />
                    </tbody>
                </table>
                <hr />
                <BasketTotal summary={summary}/>
                <hr />
                <button type="submit">Proceed to Checkout</button>
            </form>
        </div>
    )
}