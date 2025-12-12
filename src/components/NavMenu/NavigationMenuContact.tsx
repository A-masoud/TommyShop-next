"use client"
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuContact() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="/contactUs">تماس با ما</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
