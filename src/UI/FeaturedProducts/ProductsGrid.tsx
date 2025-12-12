"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/features/Product/components/ProductCard";

export default function ProductsGrid({ products }) {
  const [columns, setColumns] = useState(2); 

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setColumns(4);      // lg:grid-cols-4
      else if (window.innerWidth >= 768) setColumns(3);  // md:grid-cols-3
      else setColumns(2);                               // grid-cols-2
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limit = columns === 3 ? 6 : 4;
  const sliced = products.slice(0, limit);

  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sliced.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
