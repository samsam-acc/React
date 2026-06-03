import { render, screen } from "@testing-library/react";
import { BasketTable } from "./BasketTable";
import { Product } from "../types/Product";

jest.mock('./BasketTableHeader', () => ({
    BasketTableHeader: () => <div>Basket Table Header</div>
}))

type Props = {
    product: Product,
}

jest.mock('./BasketTableItem', () => ({
    BasketTableItem: ({product}: Props) => 
        <div data-testId={`BasketTableItem-${product.id}`}>
            <div data-testId={`id-${product.id}`}>{product.id}</div>
            <div data-testId={`image-${product.id}`}>{product.image.url}</div>
            <div data-testId={`name-${product.id}`}>{product.name}</div>
            <div data-testId={`quantity-${product.id}`}>{product.quantity}</div>
            <div data-testId={`price-${product.id}`}>{product.price}</div>
            <div data-testId={`lineTotal-${product.id}`}>{product.lineTotal}</div>
        </div>
}))


const onQuantityChange = jest.fn();

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe('BasketTable component', () => {
    const products:Product[] = [
        {
            id: "0",
            image: {
                name: "Wireless Headphones",
                url: "./../assets/wireless.jpg",
                fileType: "jpg",
            },
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: "1",
            image: {
                name: "Wireless Headphones",
                url: "./../assets/wireless.jpg",
                fileType: "jpg",
            },
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: "2",
            image: {
                name: "Wireless Headphones",
                url: "./../assets/wireless.jpg",
                fileType: "jpg",
            },
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
    ];

    it('Renders a table', async () => {
        render(<BasketTable products={products} onQuantityChange={onQuantityChange}/>)

        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it('Renders BasketTableHeader', async () => {
        render(<BasketTable products={products} onQuantityChange={onQuantityChange}/>)

        expect(screen.getByText(/basket table header/i)).toBeInTheDocument();
    });

    it('Renders product data passed to BasketTableItem', async () => {
        render(<BasketTable products={products} onQuantityChange={onQuantityChange}/>)
        
        products.forEach(p => {
            expect(screen.getByTestId(`BasketTableItem-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`id-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`name-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`quantity-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`price-${p.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`lineTotal-${p.id}`)).toBeInTheDocument();
        })
    });
})