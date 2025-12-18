"use client";
import { useState } from "react";
import { SizeSelector } from "@/components/ProductDetail/SizeSelector";
import { ColorAndQuantitySelector } from "@/components/ProductDetail/ColorAndQuantitySelector";
import { ProductDescription } from "@/components/ProductDetail/ProductDescription";
import { PriceAndAddToCart } from "@/components/ProductDetail/PriceAndAddToCart";
import { IProductDetail } from "@/features/Product/types/productDetail";

export default function ProductClientPart({ product }: { product: IProductDetail }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <>
      <div className="flex h-52 mt-3.5 gap-2">
        <SizeSelector
          sizes={product.sizes || []}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ColorAndQuantitySelector
          colors={product.colors || []}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <ProductDescription
          description={
            product.description || "توضیحی برای این محصول موجود نیست."
          }
        />
      </div>

      <PriceAndAddToCart 
      price={product.price ?? 0} 
      name={product.name ?? ""} 
      image_url={product.image_url ?? ""} 
      _id={product._id}  
/>
    </>
  );
}
