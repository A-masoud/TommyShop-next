import { BlogSection } from "@/components/Home/BlogSection"
import CategorySlider  from "@/components/Home/CategorySlider"
import FeaturedProducts from "@/components/Home/FeaturedProducts"
import  HeroBanner  from "@/components/Home/HeroBaner"
import { StoreFeatures } from "@/components/Home/StoreFeatures"

function Home() {
  return (
    <div>
      <HeroBanner/>
      <CategorySlider/>
      <FeaturedProducts/>
      <BlogSection/>
      <StoreFeatures/>
    </div>
  )
}

export default Home