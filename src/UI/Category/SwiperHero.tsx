"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

export default function SwiperHero({ images }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`banner-${i}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
