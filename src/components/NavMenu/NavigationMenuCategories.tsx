"use client"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

const categories = [
  { title: "تیشرت و پولوشرت", href: "/shop/tshirt", description: "مدل‌های جدید تیشرت، پولوشرت و اسپرت مردانه" },
  { title: "پیراهن مردانه", href: "/shop/shirt", description: "پیراهن رسمی، چهارخونه، اسپرت و یقه‌دار" },
  { title: "شلوار جین و پارچه‌ای", href: "/shop/pants", description: "شلوار جین، اسلش، کتان و روزمره" },
  { title: "هودی و سویشرت", href: "/shop/hoodie", description: "هودی، دورس، پلیور و سویشرت اسپرت" },
  { title: "کاپشن و بارانی", href: "/shop/jacket", description: "کاپشن زمستانی، بارانی، پافر و کت‌های گرم" },
  { title: "اکسسوری مردانه", href: "/shop/accessories", description: "کمربند، کیف، کلاه، دستبند و سایر اکسسوری‌ها" },
]

export default function NavigationMenuCategories() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>دسته‌بندی</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {categories.map((item) => (
            <li key={item.title}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>
                  <div className="text-sm font-medium leading-none">{item.title}</div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{item.description}</p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
