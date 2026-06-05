import { Summary } from "../types/Summary";
import { useBasket } from '../context/BasketProvider';


export const BasketTotal = () => {
    const { summary } = useBasket();

    return (
        <div>
            <table className="summary">
                <tbody>
                    <tr>
                        <th>Subtotal</th>
                        <td>£ {(summary.subtotal).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>£ {summary.shipping}</td>
                    </tr>
                    <tr className="total-row">
                        <th>Total</th>
                        <th>£ {(summary.total).toFixed(2)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}