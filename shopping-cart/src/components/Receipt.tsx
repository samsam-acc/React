import { OrderSummaryItem } from './OrderSummaryItem';

export const Receipt = () => {
    return (
        <div className='receipt'>
            <div>
                <strong>Order Confirmation</strong><br />
                <em>Thank you for your order!</em>
            </div>
            <hr />
            <div>
                <strong>Order #</strong> ORD-20260505-7842
                <strong>Date:</strong> 5 May 2026
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
                        <OrderSummaryItem />
                        <OrderSummaryItem />
                        <OrderSummaryItem />
                    </tbody>
                </table>
            </div>
            <div>
                <table className="summary">
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>£ 0</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>£ 4.99</td>
                        </tr>
                        <tr className="total-row">
                            <th>Total</th>
                            <th>£ 0</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}