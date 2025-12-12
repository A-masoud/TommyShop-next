"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useProductSearch } from "../../../hooks/useProductSearch";
import SearchResultItem from "@/features/Product/components/SearchResultItem";

export default function DesktopSearch() {
  const { query, setQuery, results, loading } = useProductSearch();
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)} // 
        placeholder="دنبال چی می‌گردی؟"
        className="peer w-full rounded-2xl bg-white/5 text-white placeholder-white/80 border border-white/30 outline-none py-2.5 pr-10 pl-4 focus:bg-white/10 focus:border-white/20 transition"

      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FA6320]">
        <Search />
      </div>

      {/* Results Dropdown */}
      {focused && query.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-neutral-900/90 border border-white/20 rounded-xl max-h-80 overflow-y-auto shadow-lg">
          {loading && <p className="p-3 text-center text-gray-400">در حال جستجو...</p>}

          {!loading && results.length === 0 && (
            <p className="p-3 text-center text-gray-500">نتیجه‌ای پیدا نشد...</p>
          )}

          {!loading &&
            results.map((product) => (
              <SearchResultItem
                key={product._id}
                product={product}
                onClick={() => setFocused(false)}
              />
            ))}
        </div>
      )}
    </div>
  );
}
