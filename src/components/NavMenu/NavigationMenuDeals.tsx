"use client"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuDeals() {
  return (
    <NavigationMenuItem className="hidden md:block">
      <NavigationMenuTrigger>شگفت‌انگیزها</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">تخفیف‌های امروز</div>
                <div className="text-muted-foreground">محصولات با بیشترین تخفیف ویژه امروز</div>
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">پرفروش‌ترین‌ها</div>
                <div className="text-muted-foreground">لباس‌هایی که بیشترین خرید را داشته‌اند</div>
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">جدیدترین‌ها</div>
                <div className="text-muted-foreground">تازه‌ترین مدل‌های اضافه‌شده به فروشگاه</div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
