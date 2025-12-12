import { SocialLink } from "@/types/Header & layout & Footer/FooterSocialLink";
export default function SocialItem({ label, href, Icon }:SocialLink) {
  return (
    <a
      href={href}
      className="flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-black/40 text-zinc-300"
    >
      <span className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />}
        <span className="text-[13px] sm:text-sm leading-5">{label}</span>
      </span>

      <svg
        className="size-4 sm:size-[18px] md:size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}
