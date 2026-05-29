import { Product } from "../components/BasketItem";
import { updateProducts } from "./BasketHelpers";

describe("Update products", () => {
    const input:Product[] = [
        {
            id: 0,
            image: "",
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: 1,
            image: "",
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: 2,
            image: "",
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
    ];
    const newProduct = {
        id: 1,
        image: "",
        name: "USB-C Charging Cable",
        quantity: 5,
        price: 9.99,
        lineTotal: 0,
    }

    it('Updates an existing product when id is matched', async () => {
        
        const output = updateProducts(input, newProduct);

        expect(output.find(p => p.id === 1)?.quantity).toBe(5);
    });

    it('Output array does not delete items', async () => {
        
        const output = updateProducts(input, newProduct);

        expect(output.length).toEqual(input.length);

    });


});

describe("Calculate subtotal", () => {
    const input:Product[] = [
        {
            id: 0,
            image: "",
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: 1,
            image: "",
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: 2,
            image: "",
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
    ];
    const newProduct = {
        id: 1,
        image: "",
        name: "USB-C Charging Cable",
        quantity: 5,
        price: 9.99,
        lineTotal: 0,
    }

    it('Updates an existing product when id is matched', async () => {
        
        const output = updateProducts(input, newProduct);

        expect(output.find(p => p.id === 1)?.quantity).toBe(5);
    });

    it('Output array does not delete items', async () => {
        
        const output = updateProducts(input, newProduct);

        expect(output.length).toEqual(input.length);

    });


});