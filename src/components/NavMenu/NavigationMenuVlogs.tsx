"use client"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuVlogs() {
  return (
    <NavigationMenuItem className="hidden md:block">
      <NavigationMenuTrigger>ولاگ‌ها</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-4">
          <li>
            <NavigationMenuLink asChild><Link href="#">استایل روز</Link></NavigationMenuLink>
            <NavigationMenuLink asChild><Link href="#">ترندهای مردانه</Link></NavigationMenuLink>
            <NavigationMenuLink asChild><Link href="#">نکات مد و فشن</Link></NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
