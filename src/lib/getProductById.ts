import { products } from "../data/products";
import type { PerfumeProduct } from "../types/product";

export function getProductById(id: string): PerfumeProduct | undefined {
  return products.find((product) => product.id === id);
}
