import { getDiscountedProducts } from "@/features/Product/api/DiscountedProducts";
import ProductCard from "@/features/Product/components/ProductCard";
async function DiscountedProduct() {
  const discounted = await getDiscountedProducts();
  return (
    <div className="max-w-7xl mx-auto mt-20" >

      <h2 className="text-2xl text-[#E6E4B2] md:text-3xl mb-3.5 font-bold">
        پیشنهادات ویژه
      </h2>

      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {discounted.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="text-center mt-6">

      </div>
    </div>
  )
}

export default DiscountedProduct