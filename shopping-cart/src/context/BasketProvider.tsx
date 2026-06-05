import { createContext, useContext, useState, ReactNode } from "react";
import { productsData } from "../data/products";
import { Product } from "../types/Product";
import { summaryData } from "../data/summary";
import { Summary } from "../types/Summary";
import { calculateBasketSummary, updateProducts } from "../helpers/BasketHelpers";

type BasketContextType = {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  summary: Summary,
  setSummary: React.Dispatch<React.SetStateAction<Summary>>,
  // addToBasket: (item: any) => void;
  updateQuantity: (product: Product, newQuantity: number) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState(productsData);
  const [summary, setSummary] = useState(summaryData);

  const updateQuantity = (product: Product, newQuantity: number) => {
        product.quantity = newQuantity;
        product.lineTotal = newQuantity * product.price;
        
        setProducts(updateProducts(products, product));
        setSummary(calculateBasketSummary(products, summary.shipping))
    }

  return (
    <BasketContext.Provider value={{ products, setProducts, summary, setSummary, updateQuantity }}>{children}</BasketContext.Provider>
  )
};

export const useBasket = () =>  {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};