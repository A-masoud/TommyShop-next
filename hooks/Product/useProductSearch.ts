import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { ProductsBySearch, Product } from "@/features/Product/api/ProductBySearch";

export function useProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      loadProducts(debouncedQuery);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  async function loadProducts(q: string) {
    setLoading(true);
    const data = await ProductsBySearch(q);
    setResults(data);
    setLoading(false);
  }

  return {
    query,
    setQuery,
    results,
    loading,
  };
}
