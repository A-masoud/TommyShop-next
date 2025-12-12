"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useProductSearch } from "../../../../hooks/useProductSearch";
import SearchResultItem from "@/features/Product/components/SearchResultItem";

export default function SearchSheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { query, setQuery, results, loading } = useProductSearch();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="top"
        className="h-[50vh] overflow-y-auto bg-neutral-900/80 border-[#FA6320]"
      >
        <SheetHeader>
          <SheetTitle className="text-center text-[#E6E4B2]">جستجوی محصول</SheetTitle>
        </SheetHeader>

        <div className="mt-4 px-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجو..."
            className="w-full p-3 rounded-xl bg-neutral-800 text-gray-200 border border-[#FA6320]/50"
          />
        </div>

        <div className="mt-4 px-4 space-y-3">
          {query.length === 0 && (
            <p className="text-center text-gray-500">برای نمایش نتایج تایپ کن...</p>
          )}

          {loading && (
            <p className="text-center text-gray-400">در حال جستجو...</p>
          )}

          {!loading && query && results.length === 0 && (
            <p className="text-center text-gray-500">نتیجه‌ای پیدا نشد...</p>
          )}

          {!loading &&
            results.map((product) => (
              <SearchResultItem
                key={product._id}
                product={product}
                onClick={() => setOpen(false)}
              />
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
