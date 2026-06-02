import { Product } from "./Product";
import { OrderInfo } from "./OrderInfo";
import { Summary } from "./Summary";

export type Checkout = {
    orderInfo: OrderInfo,
    products: Product[],
    summary: Summary,
}