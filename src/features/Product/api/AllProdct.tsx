import { IProductProps } from "@/features/Product/types/product";

export async function fetchAllProducts(): Promise<IProductProps[]> {
  const res = await fetch("http://localhost:5000/api/products?sort=newest", {
    next: { revalidate: 60 },
  });

  return res.json();
}