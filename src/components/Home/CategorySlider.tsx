import SwiperCategory from "@/UI/HeroBanner/SwiperCategory";
import { categories } from "@/Items/HomeItems/category";
import { ICategoryItem } from "@/types/Home/category";
export default function CategorySlider() {
  return (
    <section className="my-10  w-full max-w-7xl mx-auto">
      <h2 className="text-2xl text-[#E6E4B2] text-right md:text-3xl font-bold mr-2 mb-6">
        دسته‌بندی پوشاک
      </h2>
      <div className="bg-gray-300 py-2 px-1 border-[#FA6320] border-2  rounded-xl">
        <SwiperCategory  categories={categories}  />
      </div>
      
    </section>
  );
}
