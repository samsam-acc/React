import { render, screen } from "@testing-library/react";
import { Basket } from "./Basket";
import { Product } from "./../../types/Product";
import { BasketProvider } from './../../context/BasketProvider';
import { mockProducts } from "../../mocks/mockProducts";
import { mockSummary } from "../../mocks/mockSummary";

jest.mock('./../BasketTable', () => ({
    BasketTable: () => <div data-testId="BasketTable" >
        {mockProducts.map((p, index) => (
            <div data-testId={`product-${index}`} key={`product-${index}`}>
                <div data-testId={`id-${index}`}>{p.id}</div>
                <div data-testId={`image-${index}`}>{p.image.url}</div>
                <div data-testId={`name-${index}`}>{p.name}</div>
                <div data-testId={`quantity-${index}`}>{p.quantity}</div>
                <div data-testId={`price-${index}`}>{p.price}</div>
                <div data-testId={`lineTotal-${index}`}>{p.lineTotal}</div>
            </div>
    ))}
    </div>
}))


jest.mock('./../BasketTotal', () => ({
    BasketTotal: () => 
        <div data-testId="BasketTotal">
            <div data-testId="subtotal">{mockSummary.subtotal}</div>
            <div data-testId="shipping">{mockSummary.shipping}</div>
            <div data-testId="total">{mockSummary.total}</div>
        </div>
}))

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe('Basket component', () => {
    it('Renders header and button', async () => {
        render(<BasketProvider><Basket /></BasketProvider>);

        expect(screen.getByText("Shopping Basket")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /proceed to checkout/i })).toBeInTheDocument();
    });

    it('Renders information passed to BasketTable', async () => {
        render(<BasketProvider><Basket /></BasketProvider>);

        expect(screen.getByTestId("BasketTable")).toBeInTheDocument();
        [0,1,2].forEach(n => {
            expect(screen.getByTestId(`product-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`id-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`name-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`quantity-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`price-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`lineTotal-${n}`)).toBeInTheDocument();
        })
    });

    it('Renders information passed to BasketTotal', async () => {
        render(<BasketProvider><Basket /></BasketProvider>);

        expect(screen.getByTestId("BasketTotal")).toBeInTheDocument();
        expect(screen.getByTestId("subtotal")).toHaveTextContent("0");
        expect(screen.getByTestId("shipping")).toHaveTextContent("4.99");
        expect(screen.getByTestId("total")).toHaveTextContent("0");
    });

    it('Button submits form', async () => {
        
    });

    it('Handle submit', async () => {
        
    });


})