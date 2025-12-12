"use client";
import { FC, MouseEvent } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { CartProductProps } from "@/types/Cart/CartItem";

const CartProduct: FC<CartProductProps> = ({ item }) => {
  const { increase, decrease, removeFromCart } = useCartStore();

  const handleClick = (e: MouseEvent<HTMLButtonElement>, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return (
    <Link
      href={`/productDetail/${item.id}`}
      className="flex flex-row items-center gap-0.5 sm:items-stretch justify-between bg-gray-400/20 rounded-2xl p-2 hover:bg-gray-400/40 transition"
    >
      <img
        src={item.image}
        className="w-20 h-20 sm:w-30 sm:h-30 rounded-xl object-cover"
      />

      <div className="flex-1 flex flex-col justify-between sm:mr-4 text-center sm:text-right mt-3 sm:mt-0">
        <h2 className="text-[12px] sm:text-lg font-semibold text-white">
          {item.title}
        </h2>
        <p className="text-[11px] sm:text-[13px] text-gray-400 font-bold">
          {item.price} تومان
        </p>
      </div>

      <div className="flex items-center sm:gap-3 mt-3 sm:mt-0">
        <button
          onClick={(e) => handleClick(e, () => decrease(item.id))}
          className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-neutral-200 text-neutral-700 rounded-sm text-xl"
        >
          -
        </button>

        <span className="sm:text-lg font-bold text-white w-8 text-center">
          {item.quantity}
        </span>

        <button
          onClick={(e) => handleClick(e, () => increase(item.id))}
          className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center bg-orange-500 text-white rounded-sm text-xl"
        >
          +
        </button>
      </div>

      <button
        onClick={(e) => handleClick(e, () => removeFromCart(item.id))}
        className="text-red-500 text-sm mt-4 p-2.5 sm:mt-0 sm:ml-4 hover:text-red-700"
      >
        حذف
      </button>
    </Link>
  );
};

export default CartProduct;
