export interface Product {
    id: string;
    name: string;
    price: number;
  }
  

  export async function ProductsBySearch(q: string): Promise<Product[]> {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/search?q=${encodeURIComponent(q)}`
      );
  
      if (!res.ok) {
        throw new Error("خطا در دریافت محصولات");
      }
  
      const data: Product[] = await res.json();
      return data;
    } catch (err) {
      console.error("Search error:", err);
      return [];
    }
  }
  