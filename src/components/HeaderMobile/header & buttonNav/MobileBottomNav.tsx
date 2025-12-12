"use client";
import { IHeaderProps } from "@/types/Header & layout & Footer/Header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "../../../Items/HeaderItems/mobileBottomNavItem";
import CartButton from "../buttons/CartButton";
import CategoryButton from "../buttons/CategoryButton";
import SearchButton from "../buttons/SearchButton";

export default function MobileBottomNav({ scrolled, bottomRef }: IHeaderProps) {
  return (
    <nav
      ref={bottomRef}
      dir="rtl"
      className={cn(
        "lg:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur-md border-t",
        scrolled ? "bg-black/60 border-white/10" : "bg-black/50 border-white/5"
      )}
    >
      <ul className="grid grid-cols-5 px-2 py-2">
        

        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.label === "دسته‌ها")
            return <CategoryButton key={item.label} />

          if (item.label === "سبد") {
            return <CartButton key={item.label} />;
          }
        

          if (item.label === "جستجو")
            return <SearchButton key={item.label} />

          return (
            <li key={item.label} className="flex justify-center">
              <Link
                href={item.href}
                className="flex flex-col items-center gap-1 text-[11px] text-white/90"
              >
                <div className="p-2 rounded-2xl border border-white/10 bg-white/5">
                  <Icon size={item.size} />
                </div>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
