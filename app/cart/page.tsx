import CartItem from "@/components/Cart/CartItem";
import CheckoutSummary from "@/components/Cart/CheckoutSummary";

export default function CartPage() {
  return (
    <div className="p-5 mt-2 md:mt-12 bg-black  ">
      <h1 className="text-2xl font-bold mb-5 text-[#E6E4B2]">🛒 سبد خرید</h1>
      <div className="flex flex-col md:flex-row gap-3.5 mx-auto">
        <CartItem />
        <CheckoutSummary />
      </div>
    </div>
  );
}
