import { Checkout } from "../components/Basket";
import { Product } from "../components/BasketItems";


export const updateProducts = (products: Product[], newProduct: Product) => {
    return products.map(p => {
        if(p.id === newProduct.id){
            return newProduct;
        }
        else{
            return p
        }
    })
}

export const calculateSubtotal = (products: Product[]) => {
    let subtotal = 0;
    for(const p of products){
        subtotal += p.lineTotal;
    }
    return subtotal
}

export const calculateTotal = (subtotal: number, shipping: number) => {
    let total = 0;
    if(subtotal>0){
        total = subtotal + shipping;
    }
    return total;
}

export const calculateBasketSummary = (products: Product[], shipping: number) => {
    const subtotal = calculateSubtotal(products);
    const total = calculateTotal(subtotal, shipping);
    const summary = {
        subtotal: subtotal,
        shipping: shipping,
        total: total,
    }
    return summary
}

export const getOrderDate = (date: Date) => {
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);
    const day = date.getDate();
    // const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

export const createOrderId = (date: Date) => {
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = date.getFullYear();

    const dateSection = `${year}${month}${day}`
    return "ORD-" + dateSection + "-" + "0001";
}

export const createOrderNumber = () => {
    const current = new Date();

    const date = getOrderDate(current);
    const orderId = createOrderId(current);

    const orderInfo = {
        orderId: orderId,
        date: date,
    }
    return orderInfo;
}

export const postOrderConfirmation = async (checkout: Checkout) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkout)
    })
    .then(res => res.json())
}

// export const postOrderConfirmation = async (checkout: Checkout) => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(checkout)
//     })
//     return res.json();
// }

