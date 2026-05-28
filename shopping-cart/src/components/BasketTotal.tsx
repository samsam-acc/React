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
        <div className="summary">
            <strong>Subtotal</strong> £{(summary.subtotal).toFixed(2)} <br />
            <strong>Shipping</strong> £{summary.shipping} <br />
            <hr />
            <strong>Total</strong> £{(summary.total).toFixed(2)}
        </div>
    )
}