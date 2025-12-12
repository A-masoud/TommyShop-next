"use client";

import { useEffect, useState } from "react";

export function useProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim().length > 0) fetchProducts(query);
      else setResults([]);
    }, 1000);

    return () => clearTimeout(delay);
  }, [query]);

  async function fetchProducts(q: string) {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/products/search?q=${encodeURIComponent(q)}`
      );

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }

  return {
    query,
    setQuery,
    results,
    loading,
  };
}
