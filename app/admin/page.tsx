"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  Package,
  FileText,
  CreditCard,
  Users,
  TrendingUp,
  FileBarChart,
  Settings,
  Menu,
  X
} from "lucide-react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      setIsExpanded(!mobile)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const items = [
    {
      id: "dashboard",
      icon: BarChart3,
      label: "داشبورد",
      submenu: [
        "خلاصه وضعیت فروش",
        "مجموع فروش امروز / این ماه",
        "سفارش‌های جدید",
        "کاربران جدید",
      ],
    },
    {
      id: "products",
      icon: Package,
      label: "محصولات",
      submenu: [
        "لیست محصولات",
        "افزودن محصول",
        "ویرایش محصولات",
        "مدیریت موجودی",
      ],
    },
    {
      id: "orders",
      icon: FileText,
      label: "سفارش‌ها",
      submenu: [
        "سفارش‌های جدید",
        "در حال پردازش",
        "ارسال شده‌ها",
        "لغو شده‌ها",
      ],
    },
    { id: "stock", icon: FileText, label: "وضعیت انبار" },
    { id: "transactions", icon: CreditCard, label: "تراکنش‌ها" },
    { id: "users", icon: Users, label: "کاربران" },
    { id: "analysis", icon: TrendingUp, label: "تحلیل" },
    {
      id: "reports",
      icon: FileBarChart,
      label: "گزارشات",
      submenu: ["گزارش فروش", "محصولات پرفروش", "نمودار درآمد"],
    },
    {
      id: "settings",
      icon: Settings,
      label: "تنظیمات",
      submenu: ["لوگو و رنگ", "هزینه ارسال", "نقش‌ها"],
    },
  ]

  // =========================
  // Desktop Sidebar
  // =========================
  const SidebarContent = () => (
    <div className={`bg-zinc-900 text-white h-full ${isExpanded ? "w-64" : "w-20"} transition-all`}>
      <div className="p-4 font-bold text-lg flex justify-between">
        {isExpanded ? "پنل مدیریت" : ""}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <X /> : <Menu />}
          </Button>
        )}
      </div>

      <ScrollArea className="h-[calc(100%-60px)] px-2">
        <TooltipProvider>
          {items.map((item) => {
            const Icon = item.icon
            const hasSubmenu = item.submenu?.length

            return (
              <div key={item.id} className="mb-2">
                {/* Without submenu */}
                {!hasSubmenu && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={activeTab === item.id ? "secondary" : "ghost"}
                        className="w-full justify-start gap-3"
                        onClick={() => setActiveTab(item.id)}
                      >
                        <Icon className="w-5 h-5" />
                        {isExpanded && item.label}
                      </Button>
                    </TooltipTrigger>

                    {!isExpanded && (
                      <TooltipContent side="right">{item.label}</TooltipContent>
                    )}
                  </Tooltip>
                )}

                {/* With submenu */}
                {hasSubmenu && (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AccordionTrigger
                            className="flex gap-3 w-full"
                            onClick={() => isMobile && setIsExpanded(true)}
                          >
                            <Icon className="w-5 h-5" />
                            {isExpanded && item.label}
                          </AccordionTrigger>
                        </TooltipTrigger>

                        {!isExpanded && (
                          <TooltipContent side="right">{item.label}</TooltipContent>
                        )}
                      </Tooltip>

                      <AccordionContent>
                        {item.submenu.map((sub, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className={`w-full justify-start px-8 ${
                              activeTab === `${item.id}-${index}` ? "text-lime-400" : ""
                            }`}
                            onClick={() => setActiveTab(`${item.id}-${index}`)}
                          >
                            {sub}
                          </Button>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            )
          })}
        </TooltipProvider>
      </ScrollArea>
    </div>
  )

  // =========================
  // MOBILE VERSION
  // =========================
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button className="fixed top-4 right-4 z-50">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    )
  }

  return <SidebarContent />
}
