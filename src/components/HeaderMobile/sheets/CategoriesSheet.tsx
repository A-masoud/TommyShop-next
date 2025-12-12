"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  { title: "لباس مردانه", items: ["تیشرت", "شلوار", "پیراهن", "هودی", "ژاکت"] },
  { title: "اکسسوری", items: ["کمربند", "ساعت", "کلاه", "کیف"] },
  { title: "کفش", items: ["اسپرت", "روزمره", "بوت", "صندل"] },
];

export default function CategoriesSheet({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="h-[100vh] overflow-y-auto bg-neutral-900/80 border-[#FA6320]">
        <SheetHeader>
          <SheetTitle className="text-center text-[#E6E4B2]">دسته‌بندی محصولات</SheetTitle>
        </SheetHeader>

        <Accordion type="single" collapsible className="mt-4 text-neutral-400">
          {categories.map((cat, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#FA6320] rounded-2xl"
            >
              <AccordionTrigger className="text-right">{cat.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pr-4 text-sm">
                  {cat.items.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={`/category/${sub}`}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-gray-300"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
