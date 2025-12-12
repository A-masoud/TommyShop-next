import Image from "next/image";
import { IBlogItem } from "@/features/Blog/types/blog";

export function BlogCard({ image, title, desc }: IBlogItem) {
  return (
    <div className="relative rounded-xl shadow-sm hover:shadow-md overflow-hidden group cursor-pointer">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      <div className="absolute bottom-0 z-10 p-4 text-white text-right">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm mb-3">{desc}</p>
        <button className="text-[#FA6320] hover:scale-110 font-semibold hover:underline transition">
          مطالعه بیشتر →
        </button>
      </div>
    </div>
  );
}
