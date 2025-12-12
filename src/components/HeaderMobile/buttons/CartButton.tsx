import Link from 'next/link'
import { ShoppingCart } from "lucide-react";
import { useCartStore } from '@/store/cartStore';

function CartButton() {
    const { cart } = useCartStore()
    const cartButton = { icon: ShoppingCart, size: 22, label: "سبد", href: "/cart" }
    const CartIcon = cartButton.icon
    return (
        <li>
            <Link href={cartButton.href}
                className="flex flex-col  items-center justify-center gap-1 text-[11px] text-white/90"
            >
                <span className="absolute top-0  flex h-4 min-w-4 px-1 items-center justify-center rounded-full border bg-gray-900/65 border-[#FA6320] text-[10px] text-white">
                    {cart.length}
                </span>
                <div className="p-2 rounded-2xl border border-white/10 bg-white/5">
                    <CartIcon size={cartButton.size} />
                </div>
                {cartButton.label}
            </Link>

        </li>
    )
}

export default CartButton