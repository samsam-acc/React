import { Product } from '../types/Product';
import wirelessImg from '../assets/wireless.jpg';
import cableImg from '../assets/cable.jpg';
import standImg from '../assets/stand.jpg';

export const productsData: Product[] = [
  {
            id: "0",
            image: {
                name: "Wireless Headphones",
                url: wirelessImg,
                fileType: "jpg",
            },
            name: "Wireless Headphones",
            quantity: 0,
            price: 49.99,
            lineTotal: 0,
        },
        {
            id: "1",
            image: {
                name: "USB-C Charging Cable",
                url: cableImg,
                fileType: "jpg",
            },
            name: "USB-C Charging Cable",
            quantity: 0,
            price: 9.99,
            lineTotal: 0,
        },
        {
            id: "2",
            image: {
                name: "Laptop Stand (Adjustable)",
                url: standImg,
                fileType: "jpg",
            },
            name: "Laptop Stand (Adjustable)",
            quantity: 0,
            price: 34.99,
            lineTotal: 0,
        }
]