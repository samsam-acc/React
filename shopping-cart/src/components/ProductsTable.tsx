import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Product } from './Product';
import { BasketTotal } from './BasketTotal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        if(s>0){
            t = s + summary.shipping;
        }
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

    const navigate = useNavigate();

    const createOrderNumber = () => {
        const current = new Date();
        const random4Digits = Math.floor(1000 + Math.random() * 9000);

        const year = current.getFullYear();
        const monthN = String(current.getMonth()+1).padStart(2,'0');
        const day = String(current.getDate()).padStart(2,'0');

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[current.getMonth()];

        const date = `${current.getDate()} ${month} ${year}`;

        const dateSection = `${year}${monthN}${day}`
        const orderNumber = "ORD-" + dateSection + "-" + random4Digits;
        
        const order = {
            orderId: orderNumber,
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
                        <Product product={products[id++]} onQuantityChange={updateQuantity} />
                        <Product product={products[id++]} onQuantityChange={updateQuantity} />
                        <Product product={products[id++]} onQuantityChange={updateQuantity} />
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