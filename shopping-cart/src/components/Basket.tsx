import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { BasketTable } from './BasketTable';
import { BasketTotal } from './BasketTotal';
import { updateProducts, calculateBasketSummary, createOrderNumber, postOrderConfirmation } from '../helpers/BasketHelpers';
import { Product } from '../types/Product';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkout } from '../types/Checkout';
import { productsData } from '../data/products';
import { useBasket } from '../context/BasketProvider';

export const Basket = () => {
    const { products, summary, updateQuantity } = useBasket();

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