import Link from "next/link";
import { IProductCardProps } from "../types/ProductCart";
import { Heart, Share2, Bookmark } from "lucide-react";

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Link href={`/productDetail/${product._id}`}>
      <div className="relative h-auto lg:h-full bg-gray-400/10 rounded-xl shadow-md shadow-gray-500 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">

        <div className="absolute top-3 right-3 bg-[#FA6320] text-white text-sm font-bold px-2 py-1 rounded-lg z-10">
          %{product.discount.toLocaleString("fa-IR")}
        </div>

        <div className="absolute top-0 left-0 bg-gray-400/20 flex flex-col gap-2 z-10">
          <button className="p-2 rounded-full hover:bg-white transition">
            <Heart size={18} className="text-[#FA6320]" />
          </button>

          <button className="p-2 rounded-full hover:bg-white transition">
            <Share2 size={18} className="text-[#FA6320]" />
          </button>

          <button className="p-2 rounded-full hover:bg-white transition">
            <Bookmark size={18} className="text-[#FA6320]" />
          </button>
        </div>

        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-64 sm:h- object-cover rounded-xl"
        />

        <div className="p-4 text-center text-gray-400">
          <h3 className="font-semibold text-sm md:text-md mb-2 line-clamp-1" style={{ direction: "rtl", unicodeBidi: "embed" }}>
            {product.name} {product.model ? `مدل ${product.model}` : ""}
          </h3>

          <div className="mb-3">
            <p className="text-gray-500 line-through mb-1" style={{ direction: "rtl", unicodeBidi: "plaintext" }}>
              {product.price.toLocaleString("fa-IR")} تومان
            </p>
            <p className="font-bold text-[#FA6320]" style={{ direction: "rtl", unicodeBidi: "plaintext" }}>
              {product.finalPrice.toLocaleString("fa-IR")} تومان
            </p>
          </div>

          <button className="w-full bg-[#FA6320] text-black py-2 rounded-lg hover:bg-white transition" />
        </div>
      </div>
    </Link>
  );
}
