import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Product } from './Product';
import { BasketTotal } from './BasketTotal';
import { use, useState } from 'react';

type Product = {
    id: number;
    image: string;
    name: string;
    quantity: number;
    price: number;
    lineTotal: number;
}

export const ProductsTable = () => {
    const updateQuantity = (product: Product, q: number) => {
        product.quantity = q;
        product.lineTotal = q * product.price;
        const newP = products.map(p => {
            if(p.id === product.id){
                return product;
            }
            else{
                return p;
            }
        })
        setProducts(newP);
        updateSummary();
    }

    const updateSummary = () => {
        let s = 0, t = 0;
        for(const p of products){
            s += p.lineTotal;
        }
        t = s + summary.shipping;
        const sum = {
            subtotal: s,
            shipping: summary.shipping,
            total: t,
        }
        setSummary(sum);
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

    let id = 0;
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Line Total</th>
                    </tr>
                    <Product product={products[id++]} onQuantityChange={updateQuantity} />
                    <Product product={products[id++]} onQuantityChange={updateQuantity} />
                    <Product product={products[id++]} onQuantityChange={updateQuantity} />
                </tbody>
            </table>
            <BasketTotal summary={summary}/>
            <button>Proceed to Checkout</button>
        </>
    )
}