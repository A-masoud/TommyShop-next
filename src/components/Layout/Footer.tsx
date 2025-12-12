
import SocialItem from "../Footer/SocialItem";
import FooterColumn from "../Footer/FooterColumn";

import { socials } from "../../Items/FooterItems/Socials";
import { footerLinks } from "../../Items/FooterItems/footerLinks";

export default function Footer() {
  return (
    <footer className="relative">

      {/* شبکه‌های اجتماعی */}
      <div className="container mx-auto max-w-none px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl shadow-sm shadow-orange-500  md:rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md divide-y divide-white/10 md:divide-y-0 md:divide-x [direction:rtl]">
          {socials.map((s) => (
            <SocialItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ستون‌های اطلاعاتی */}
      <div className="w-full mt-2 mb-10">
        <div className="container mx-auto  max-w-none px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 border border-white/10 rounded-2xl shadow-sm shadow-orange-500 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {footerLinks.map((col) => (
              <FooterColumn key={col.title} {...col} />
            ))}
          </div>

          <div className="border-t border-white/10 py-4 text-xs text-zinc-400 text-center">
            © {new Date().getFullYear()} تامی شاپ — تمامی حقوق محفوظ است.
          </div>
        </div>
      </div>

    </footer>
  );
}
