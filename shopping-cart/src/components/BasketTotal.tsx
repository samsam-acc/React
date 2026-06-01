type Summary = {
    subtotal: number,
    shipping: number,
    total: number,
}

type Props = {
    summary: Summary;
}



export const BasketTotal = ({summary}: Props) => {
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