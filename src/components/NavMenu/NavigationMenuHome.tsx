"use client"
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuHome() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="/">خانه</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
