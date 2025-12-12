import Link from "next/link";
import { getDiscountedProducts } from "@/features/Product/api/DiscountedProducts";
import ProductsGrid from "@/UI/FeaturedProducts/ProductsGrid";

export default async function FeaturedProducts() {
  const discounted = await getDiscountedProducts();

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 md:px-10">
      <div className="mb-6 flex items-center justify-between gap-2.5">
        <h2 className="text-2xl text-[#E6E4B2] md:text-3xl font-bold">
          پیشنهادات ویژه
        </h2>
        <Link
          href="/discountedProducts"
          className="text-sm text-orange-500 hover:underline"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductsGrid products={discounted} />
    </section>
  );
}
