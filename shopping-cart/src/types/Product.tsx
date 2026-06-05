import { Image } from "./Image";

export type Product = {
    id: string,
    image: Image,
    name: string,
    quantity: number,
    price: number,
    lineTotal: number,
};