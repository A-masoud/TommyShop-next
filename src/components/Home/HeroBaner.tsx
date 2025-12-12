import { SocialCard } from "@/UI/HeroBanner/BanerSocialCart"
import SwiperHero from "@/UI/Category/SwiperHero"
import HerobanerButton from "@/UI/HeroBanner/HerobanerButton"

const images = [
  "/IMG/HeroBannerIMG/image_2025-09-15_21-30-10.png",
  "/IMG/HeroBannerIMG/Untitled-1.png",
]

export default function HeroBanner() {
  return (
    <div className="relative  overflow-hidden rounded-md lg:mt-16">

      <SwiperHero images={images} />

      <SocialCard />

      <HerobanerButton />

    </div>
  )
}
