import fetchProductByID from "@/features/Product/api/ProductById";
import { ProductImage } from "@/components/ProductDetail/ProductImage";
import { ProductTitleAndPopularity } from "@/components/ProductDetail/ProductTitleAndPopularity";
import ProductClientPart from "@/components/ProductDetail/ProductClientPart";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProductByID(id);

  const imgs: string[] =
    product.images && product.images.length > 0
      ? product.images
      : product.image_url
      ? [product.image_url]
      : ["/placeholder.png"];

  return (
    <div className="text-white md:max-h-[700px] flex flex-col md:flex-row items-center justify-center mt-10 p-4">
      <div className="max-w w-full bg-black rounded-2xl p-6 md:flex-row shadow-lg md:flex md:gap-6">

        <div className="md:w-1/3 flex justify-center">
          <ProductImage images={imgs} alt={product.name} />
        </div>

        <div className="md:w-2/3 h-full">
          <ProductTitleAndPopularity
            title={product.name}
            category={product.category}
            popularity={product.popularity || "0%"}
          />

          <ProductClientPart product={product} />
        </div>

      </div>
    </div>
  );
}
