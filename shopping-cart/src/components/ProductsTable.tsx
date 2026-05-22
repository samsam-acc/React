import wireless from './../assets/wireless.jpg';
import cable from './../assets/cable.jpg';
import stand from './../assets/stand.jpg';
import { Product } from './Product';
import { useState } from 'react';

export const ProductsTable = () => {
    let id = 0;

    // const lineTotals = [0,0,0];
    const [lineTotals, setLineTotals] = useState<number[]>([]);
    console.log(lineTotals);

    const handleLineTotalChange = (id: number, lineTotal: number) => {
        // setLineTotals([1,2,3]);
        // console.log("Line total: " + lineTotals);
        setLineTotals((prev) => {
            const updated = [...prev];
            updated[id] = lineTotal;
            return updated;
        });
    };
    
    const subtotal = lineTotals.reduce(
        (sum, lineTotal) => sum + (lineTotal || 0),
        0
    );
    

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Line Total</th>
                    </tr>
                    <Product id={id} image={wireless} price={49.99} onChange={() => handleLineTotalChange}/>
                    <Product id={id++} image={cable} price={9.99} onChange={() => handleLineTotalChange}/>
                    <Product id={id++} image={stand} price={34.99} onChange={() => handleLineTotalChange}/>
                    
                </tbody>
            </table>
            <p>subtotal: {subtotal}</p>
        </>
    )
}

