import { render, screen } from "@testing-library/react";
import { Product } from "../types/Product";
import { BasketTableItem } from "./BasketTableItem";

type Props = {
    product: Product,
}

jest.mock('./Quantity', () => ({
    Quantity: ({product}: Props) => <div>product.quantity</div>
}))

const onQuantityChange = jest.fn();

describe('Quantity component', () => {
    const product = {
        id: "0",
        image: "",
        name: "Wireless Headphones",
        quantity: 0,
        price: 49.99,
        lineTotal: 0,
    };

    it('Renders each product property correctly', async () => {
        render(<BasketTableItem product={product} onQuantityChange={onQuantityChange}/>);

        // expect(screen.getByRole("img")).toHaveTextContent(product.name);
        // expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
        // expect(screen.getByRole("row")).toBeInTheDocument();
    });
})