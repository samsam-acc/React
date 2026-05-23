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
        <>
            <p><strong>Subtotal</strong> £{(summary.subtotal).toFixed(2)}</p>
            <p><strong>Shipping</strong> £{summary.shipping}</p>
            <p><strong>Total</strong> £{(summary.total).toFixed(2)}</p>
        </>
    )
}