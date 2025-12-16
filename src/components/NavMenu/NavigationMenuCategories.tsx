"use client"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { categories } from "@/Items/HeaderItems/navMenuItems"


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
