import { useState } from "react";
import SearchSheet from "../sheets/SearchSheet";
import { Search } from "lucide-react";


function SearchButton() {
    const [openSearch, setOpenSearch] = useState(false);
    const item ={ icon: Search, size: 24, label: "جستجو", href: "/search" }
    const Icon =item.icon
  return (
    <li key={item.label} className="flex justify-center">
    <button
      onClick={() => setOpenSearch(true)}
      className="flex flex-col items-center gap-1 text-[11px] text-white/90"
    >
      <div className="p-2 rounded-2xl border border-white/10 bg-white/5">
        <Icon size={item.size} />
      </div>
      {item.label}
    </button>

    <SearchSheet open={openSearch} setOpen={setOpenSearch} />
  </li>
  )
}

export default SearchButton