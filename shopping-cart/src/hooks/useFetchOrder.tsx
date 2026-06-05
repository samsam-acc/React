import { Checkout } from "../types/Checkout"

function useFetchOrder(){
    
}

export const postOrderConfirmation = async (checkout: Checkout) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkout)
    })
    .then(res => res.json())
}