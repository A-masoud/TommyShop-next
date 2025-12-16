"use client"
import { useIsMobile } from "../../../hooks/UI/use-mobile"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"

import NavigationMenuHome from "../NavMenu/NavigationMenuHome"
import NavigationMenuContact from "../NavMenu/NavigationMenuContact"
import dynamic from "next/dynamic"


const NavigationMenuCategories = dynamic(() => import("../NavMenu/NavigationMenuCategories"), { ssr: false })
const NavigationMenuDeals = dynamic(() => import("../NavMenu/NavigationMenuDeals"), { ssr: false })
const NavigationMenuVlogs = dynamic(() => import("../NavMenu/NavigationMenuVlogs"), { ssr: false })

export default function NavMenu() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap flex-row-reverse text-right">
        <NavigationMenuHome />
        <NavigationMenuCategories />
        <NavigationMenuDeals />
        <NavigationMenuVlogs />
        <NavigationMenuContact />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
