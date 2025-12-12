import { blogs } from "@/Items/HomeItems/blog";
import BlogGrid from "@/UI/blogs/BlogGrid";

export function BlogSection() {
  return (
    <section className="my-12 border-gray-500 rounded-2xl shadow-md shadow-gray-500 border-x-3 border-orange-500 p-6 md:px-10 text-right max-w-7xl mx-auto">
      <h2 className="text-2xl text-center text-[#E6E4B2] md:text-3xl font-bold mb-6">
        مجلات آنلاین فروشگاه
      </h2>

      <BlogGrid blogs={blogs} />
    </section>
  );
}
