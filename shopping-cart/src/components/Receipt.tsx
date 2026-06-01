import { Navigate, useLocation } from 'react-router-dom';
import { OrderSummaryItem } from './OrderSummaryItem';

export const Receipt = () => {
    const location = useLocation();
    const checkoutConfirmation = location.state?.checkoutConfirmation;
    
    if (!checkoutConfirmation) {
        return <Navigate to="/" replace />;
    }

    let id = 0;

    return (
        <div className='receipt'>
            <div>
                <strong>Order Confirmation</strong><br />
                <em>Thank you for your order!</em>
            </div>
            <hr />
            <div>
                <strong>Order #</strong> { checkoutConfirmation.orderInfo.orderId } <br />
                <strong>Date:</strong> { checkoutConfirmation.orderInfo.date }
            </div>
            <hr />
            <div>
                <strong>Delivery Address</strong>
                <hr />
                John Smith <br />
                42 Example Street <br />
                London, EC1A 1BB <br />
                United Kingdom
            </div>
            <hr />
            <div>
                <strong>Order Summary</strong>
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Line Total</th>
                        </tr>
                        <OrderSummaryItem product={ checkoutConfirmation.products[id++] }/>
                        <OrderSummaryItem product={ checkoutConfirmation.products[id++] }/>
                        <OrderSummaryItem product={ checkoutConfirmation.products[id++] }/>
                    </tbody>
                </table>
            </div>
            <div>
                <table className="summary">
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>£ { (checkoutConfirmation.summary.subtotal).toFixed(2) }</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>£ { checkoutConfirmation.summary.shipping }</td>
                        </tr>
                        <tr className="total-row">
                            <th>Total</th>
                            <th>£ { (checkoutConfirmation.summary.total).toFixed(2) }</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}