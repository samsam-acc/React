import { render, screen } from "@testing-library/react";
import { BasketTable } from "./BasketTable";
import { Product } from "../types/Product";
import { mockProducts } from "../mocks/mockProducts";
import { BasketProvider } from "../context/BasketProvider";

jest.mock('./BasketTableHeader', () => ({
    BasketTableHeader: () => <div>Basket Table Header</div>
}))

type Props = {
    id: number,
}

jest.mock('./BasketTableItem', () => ({
    BasketTableItem: ({id}: Props) => 
        <div data-testId={`BasketTableItem-${mockProducts[id].id}`}>
            <div data-testId={`id-${mockProducts[id].id}`}>{mockProducts[id].id}</div>
            <div data-testId={`image-${mockProducts[id].id}`}>{mockProducts[id].image.url}</div>
            <div data-testId={`name-${mockProducts[id].id}`}>{mockProducts[id].name}</div>
            <div data-testId={`quantity-${mockProducts[id].id}`}>{mockProducts[id].quantity}</div>
            <div data-testId={`price-${mockProducts[id].id}`}>{mockProducts[id].price}</div>
            <div data-testId={`lineTotal-${mockProducts[id].id}`}>{mockProducts[id].lineTotal}</div>
        </div>
}))

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe('BasketTable component', () => {
    it('Renders a table', async () => {
        render(<BasketProvider><BasketTable /></BasketProvider>)

        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it('Renders BasketTableHeader', async () => {
        render(<BasketProvider><BasketTable /></BasketProvider>)

        expect(screen.getByText(/basket table header/i)).toBeInTheDocument();
    });

    it('Renders product data passed to BasketTableItem', async () => {
        render(<BasketProvider><BasketTable /></BasketProvider>)
        
        mockProducts.forEach(p => {
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