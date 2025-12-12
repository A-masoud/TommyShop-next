"use client"
import { IProductProps } from "@/features/Product/types/product";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

export function PriceAndAddToCart({ price,_id,name,image_url }: IProductProps) {
  const addToCart = useCartStore((state)=>state.addToCart)
 
  const handleAddToCart = () => {
    addToCart({
      id:_id,
      title:name,
      price:price,
      image:image_url
    });

 
    toast.success(`${name} به سبد خرید اضافه شد!`);
  }

  return (
    <div className="flex justify-between items-center p-2 rounded-2xl bg-neutral-900 mt-5">
      <button
        className="bg-white p-5 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
        type="button"
        onClick={handleAddToCart} // استفاده از تابع جدید
      >
        <div className="bg-[var(--quaternary-color)] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
            fill="#000000"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14l.84-2h8.9c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.33 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 13.37 5.48 15 7 15h12v-2H7.42c-.14 0-.25-.11-.26-.24z" />
          </svg>
        </div>
        <p className="translate-x-2 text-sm text-right">افزودن به سبد خرید</p>
      </button>

      <div className="text-right">
        <p className="text-gray-400">قیمت</p>
        <span className="text-2xl font-bold">
          {typeof price === "number" ? price.toLocaleString("fa") : "—"} تومان
        </span>
      </div>
    </div>
  );
}
