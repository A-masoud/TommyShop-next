import { FooterLink } from "@/types/Header & layout & Footer/FooterLink";

export default function FooterColumn({ title, items }:FooterLink) {
    return (
      <div className="text-center md:text-right p-4 sm:p-6">
        <h3 className="text-[11px] sm:text-xs tracking-widest text-zinc-100/90 pb-2 border-b border-white/10 mb-3 sm:mb-4">
          {title}
        </h3>
  
        <ul className="divide-y divide-white/10">
          {items.map((item) => (
            <li key={item} className="py-2 sm:py-2.5">
              <a className="text-zinc-200 text-[13px] sm:text-sm" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  