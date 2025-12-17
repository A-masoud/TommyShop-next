"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "@/features/Blog/components/BlogCart";
import { IBlogItem } from "@/features/Blog/types/blog";

interface BlogGridProps {
  blogs: IBlogItem[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setColumns(3);      // lg:grid-cols-3
      else if (window.innerWidth >= 640) setColumns(2);  // sm:grid-cols-2
      else setColumns(1);                                // grid-cols-1
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limit = columns === 3 ? 3 : 4;
  const sliced = blogs.slice(0, limit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sliced.map((blog) => (
        <BlogCard
          key={blog.id}
          image={blog.image}
          title={blog.title}
          desc={blog.desc}
        />
      ))}
    </div>
  );
}
