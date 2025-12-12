"use client";
import { FC } from "react";
import { useCartStore } from "@/store/cartStore";
import CartProduct from "../../features/Product/components/CartProduct";

const CartItem: FC = () => {
  const { cart } = useCartStore();

  return (
    <div className="flex flex-col mx-auto gap-4 h-[600px] overflow-y-scroll no-scrollbar border-y-2 border-gray-600 rounded-2xl p-4">
      {cart.length === 0 ? (
        <p className="text-center text-white text-lg mt-10">
          سبد خرید خالی می‌باشد
        </p>
      ) : (
        cart.map((item) => <CartProduct key={item.id} item={item} />)
      )}
    </div>
  );
};

export default CartItem;
