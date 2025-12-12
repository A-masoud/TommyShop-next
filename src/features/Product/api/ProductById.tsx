import { IProductDetail } from "../types/productDetail"; 

export default async function fetchProductByID(id: string): Promise<IProductDetail> {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id: ${id}`);
  }

  const data: IProductDetail = await res.json();
  return data;
}
