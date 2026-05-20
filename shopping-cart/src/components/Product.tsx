import { Quantity } from './Quantity';


export const Product = () => {
    return (
        <tr>
            {/* <td><img src={props.image} alt="wireless headphones" width="80" height="80"/></td> */}
            <td>Wireless Headphones</td>
            <td><Quantity /></td>
            <td>£49.99</td>
            <td>£99.98</td>
        </tr>
        
    )
}