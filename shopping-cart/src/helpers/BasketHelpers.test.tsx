import { Product } from "../components/BasketItem";
import { calculateBasketSummary, calculateSubtotal, calculateTotal, updateProducts, getOrderDate, createOrderId, createOrderNumber, postOrderConfirmation } from "./BasketHelpers";

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
            quantity: 3,
            price: 49.99,
            lineTotal: 149.97,
        },
        {
            id: 1,
            image: "",
            name: "USB-C Charging Cable",
            quantity: 4,
            price: 9.99,
            lineTotal: 39.96,
        },
        {
            id: 2,
            image: "",
            name: "Laptop Stand (Adjustable)",
            quantity: 4,
            price: 34.99,
            lineTotal: 139.96,
        }
    ];

    it('Calculates subtotal', async () => {
        
        const output = calculateSubtotal(input);

        expect(output).toBe(329.89);
    });

    it('Returns 0 for empty array', async () => {
        
        const output = calculateSubtotal([]);

        expect(output).toEqual(0);

    });
    
    it("Handles products with zero lineTotal", () => {
        const zeroInput: Product[] = [
            {
                id: 3,
                image: "",
                name: "Test Product",
                quantity: 0,
                price: 10,
                lineTotal: 0,
            }
        ];

        const output = calculateSubtotal(zeroInput);

        expect(output).toBe(0);
    });

});

describe("Calculate total", () => {

    it('Calculates correct total', async () => {
        const subtotal = 400;
        const shipping = 4.99;
        const output = calculateTotal(subtotal, shipping);

        expect(output).toBe(404.99);
    });

    it('Returns 0 if subtotal is 0', async () => {
        const subtotal = 0;
        const shipping = 4.99;
        const output = calculateTotal(subtotal, shipping);

        expect(output).toBe(0);
    });

});

describe("Calculate basket summary", () => {
    const input:Product[] = [
        {
            id: 0,
            image: "",
            name: "Wireless Headphones",
            quantity: 3,
            price: 49.99,
            lineTotal: 149.97,
        },
        {
            id: 1,
            image: "",
            name: "USB-C Charging Cable",
            quantity: 4,
            price: 9.99,
            lineTotal: 39.96,
        },
        {
            id: 2,
            image: "",
            name: "Laptop Stand (Adjustable)",
            quantity: 4,
            price: 34.99,
            lineTotal: 139.96,
        }
    ];

    it('Returns correct basket summary', async () => {
        const shipping = 4.99;
        const output = calculateBasketSummary(input, shipping);

        const expectedSummary = {
            subtotal: 329.89,
            shipping: shipping,
            total: 334.88
        }

        expect(output).toEqual(expectedSummary);
    });

    it('Returns basket summary correctly when shipping is 0', async () => {
        const shipping = 0;
        const output = calculateBasketSummary(input, shipping);

        const expectedSummary = {
            subtotal: 329.89,
            shipping: shipping,
            total: 329.89
        }

        expect(output).toEqual(expectedSummary);
    });

});

describe("Get order date", () => {

    it('Returns date in correct format', async () => {
        const input = new Date(2026, 5, 1);
        const output = getOrderDate(input);

        expect(output).toEqual("1 June 2026");
    });

    it('Returns different date in correct format', async () => {
        const input = new Date(2024, 11, 25);
        const output = getOrderDate(input);

        expect(output).toBe("25 December 2024");
    });

});

describe("Create order ID", () => {

    it('Creates order ID in correct format', async () => {
        const input = new Date(2026, 5, 1);
        const output = createOrderId(input);

        expect(output).toBe("ORD-20260601-0001");
    });

    it('Creates order ID for different dates in correct format', async () => {
        const input = new Date(2024, 11, 25);
        const output = createOrderId(input);

        expect(output).toBe("ORD-20241225-0001");
    });

});

// describe("Post order confirmation", () => {

//     it('Creates order ID in correct format', async () => {
//         const input = new Date(2026, 5, 1);
//         const output = createOrderId(input);

//         expect(output).toBe("ORD-20260601-0001");
//     });

//     it('Creates order ID for different dates in correct format', async () => {
//         const input = new Date(2024, 11, 25);
//         const output = createOrderId(input);

//         expect(output).toBe("ORD-20241225-0001");
//     });

// });