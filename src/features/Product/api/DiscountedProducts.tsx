import { fetchAllProducts } from "./AllProdct";
import { IProductProps } from "@/features/Product/types/product";

export async function getDiscountedProducts(): Promise<(IProductProps & { finalPrice: number })[]> {
  const products = await fetchAllProducts();

  return products
    .filter((p) => p.discount > 0)
    .map((p) => ({
      ...p,
      finalPrice: p.price - (p.price * p.discount) / 100,
    }));
}