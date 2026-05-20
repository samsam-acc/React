import { Quantity } from './Quantity';

type Props = {
    image: string,
    price: number,
}

export const Product = (props: Props) => {
    return (
        <tr>
            <td><img src={props.image} alt="wireless headphones" width="80" height="80"/></td>
            <td>Wireless Headphones</td>
            <td><Quantity /></td>
            <td>£{props.price}</td>
            <td>£99.98</td>
        </tr>
        
    )
}