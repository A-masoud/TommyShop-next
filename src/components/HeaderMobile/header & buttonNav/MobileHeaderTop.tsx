import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "../../../../public/IMG/Logo/tommy shop logo.png";
import { IHeaderProps } from "@/types/Header & layout & Footer/Header";

export default function MobileHeaderTop({ scrolled, topRef }: IHeaderProps) {
  return (
    <header
      ref={topRef}
      dir="rtl"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className={cn(
        "lg:hidden fixed top-0 inset-x-0 z-50",
        "h-14 bg-amber-500 flex items-center",
        "backdrop-blur-md border-b",
        scrolled ? "bg-black/60 border-white/10" : "bg-black/30 border-white/5"
      )}
    >
      <div className="flex items-center justify-between w-full px-4">
        <div className="w-9 grid place-items-center">
          <div className="w-15 rounded-full overflow-hidden">
            <Image src={logo} alt="logo" width={40} height={40} />
          </div>
        </div>

        <h1 className="text-white font-bold tracking-tight text-base">
          پوشاک تامی
        </h1>

        <div className="w-9" aria-hidden />
      </div>
    </header>
  );
}

