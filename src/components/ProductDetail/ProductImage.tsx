"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type ProductImageProps = {
  images?: string[];
  alt: string;
};

export function ProductImage({ images = [], alt }: ProductImageProps) {
  const [main, setMain] = useState(images[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-800 via-neutral-900 to-gray-950 rounded-2xl gap-2.5 p-3.5 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        
        {/* عکس اصلی */}
        <div
          className="relative w-full cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src={main}
            alt={alt}
            className="w-full md:h-[300px] rounded-lg object-contain border-2 border-gray-700 shadow-inner transition-shadow duration-300 hover:shadow-lg"
          />
        </div>

        {/* Swiper برای تصاویر کوچک - حداکثر 3 تصویر همزمان */}
        <div className="w-full max-w-xs mt-2">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides={true}  // وسط‌چین شدن تصاویر
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-20 object-contain rounded-md border border-gray-500 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-red-500"
                  onClick={() => setMain(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* لایت‌باکس */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <img
            src={main}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl transform scale-90 transition-transform duration-300 hover:scale-100"
          />
        </div>
      )}
    </>
  );
}
