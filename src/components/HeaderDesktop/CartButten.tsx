"use client"
import {ShoppingCart} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
export default function CartButton() {
  const { cart } = useCartStore();
  return (
    <Link href={"/cart"} className="relative inline-flex items-center mr-4 transition">
      <ShoppingCart className="text-white" size={22}/>
      <span className="absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full border bg-gray-900/65 border-[#FA6320] text-[10px] text-white">
      {cart.length}
      </span>
      
    </Link>
  );
}
