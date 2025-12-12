"use client"
import { useCartStore } from "@/store/cartStore";
function CheckoutSummary() {
    const { cart } = useCartStore();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="md:w-1/3 bg-gray-400/15 p-5 shadow-sm border-y-2 border-gray-600 rounded-2xl flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">ادامه فرایند خرید</h2>
          <p className="text-white text-lg font-semibold">
            جمع کل: {total.toLocaleString()} تومان
          </p>

          <button className="bg-orange-500 text-white p-3 rounded-xl font-bold hover:bg-orange-600">
            رفتن به پرداخت
          </button>

          <button
            className="bg-gray-400 text-white p-3 rounded-xl font-bold hover:bg-red-600"
            onClick={() => useCartStore.getState().clearCart()}
          >
            خالی کردن سبد خرید
          </button>
        </div>
  )
}

export default CheckoutSummary