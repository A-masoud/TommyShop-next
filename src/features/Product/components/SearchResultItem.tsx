"use client";

import Link from "next/link";

export default function SearchResultItem({
  product,
  onClick,
}: {
  product: any;
  onClick?: () => void;
}) {
  return (
    <Link
      href={`/productDetail/${product._id}`}
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/50 border border-white/10 hover:bg-neutral-700/50 transition"
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <span className="text-gray-300">{product.name}</span>
    </Link>
  );
}
