"use client";

import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number = 700) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export function useProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    if (debouncedQuery.trim().length > 0) {
      fetchProducts(debouncedQuery);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

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
