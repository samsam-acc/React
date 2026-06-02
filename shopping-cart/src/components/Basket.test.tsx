import { render, screen } from "@testing-library/react";
import { Basket } from "./Basket";

jest.mock('./BasketTable', () => ({
    BasketTable: ({products}: any) => <div data-testId="BasketTable" >
        {products.map((p, index) => {
            <div data-testId={`product-${index}`}>
                <div data-testId={`id-${index}`}>{p.id}</div>
                <div data-testId={`image-${index}`}>{p.image}</div>
                <div data-testId={`name-${index}`}>{p.name}</div>
                <div data-testId={`quantity-${index}`}>{p.quantity}</div>
                <div data-testId={`price-${index}`}>{p.price}</div>
                <div data-testId={`lineTotal-${index}`}>{p.lineTotal}</div>
            </div>
        })}
    </div>
}))

jest.mock('./BasketTotal', () => ({
    BasketTotal: () => 
        <div>
            <p>Subtotal: </p>
        </div>
}))

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe('Basket component', () => {
    it('Renders header and button', async () => {
        render(<Basket />);

        expect(screen.getByText("Shopping Basket")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /proceed to checkout/i })).toBeInTheDocument();
    });

    it('Renders information passed to BasketTable', async () => {
        render(<Basket />);

        expect(screen.getByTestId("BasketTable")).toBeInTheDocument();
        [1,2,3].forEach(n => {
            expect(screen.getByTestId(`product-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`id-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`name-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`quantity-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`price-${n}`)).toBeInTheDocument();
            expect(screen.getByTestId(`lineTotal-${n}`)).toBeInTheDocument();
        })
    });

    it('', async () => {
        
    });

    it('', async () => {
        
    });

    it('Handle submit', async () => {
        
    });


})