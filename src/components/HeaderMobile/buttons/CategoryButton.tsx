import { useState } from "react";
import CategoriesSheet from "../sheets/CategoriesSheet";
import { ListTree } from "lucide-react";
function CategoryButton() {
  const [openCat, setOpenCat] = useState(false);
  const item = { icon: ListTree, size: 22, label: "دسته‌ها", href: "/categories" }
  const Icon = item.icon
  return (
    <li className="flex justify-center">
      <button
        onClick={() => setOpenCat(true)}
        className="flex flex-col items-center gap-1 text-[11px] text-white/90"
      >
        <div className="p-2 rounded-2xl border border-white/10 bg-white/5">
          <Icon size={item.size} />
        </div>
        {item.label}
      </button>

      <CategoriesSheet open={openCat} setOpen={setOpenCat} />
    </li>
  )
}

export default CategoryButton