"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ICategoryItem } from "@/types/Home/category";
import "swiper/css";
import "swiper/css/navigation";

export default function CategorySliderClient({ categories }: ICategoryItem) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
      className="category-swiper"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <Link href={`/products/${category.name}`}>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer border border-gray-800 relative w-[200px] h-[150px] md:h-[180px]">
              <Image src={category.image} alt={category.name} fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end justify-center">
                <span className="text-[#FA6320] font-bold md:text-lg pb-3 drop-shadow-md">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
