import { ArrowUpRight } from "lucide-react"

function HerobanerButton() {
  return (
    <div className="absolute z-10 bottom-0 left-0 sm:h-20 bg-black p-1.5 sm:pt-2.5 sm:pr-2.5 pl-0 pb-0">
    <button className="flex justify-center items-center border-4 border-[#FA6320] text-[8px] sm:text-sm md:text-xl rounded-bl-md md:rounded-bl-2xl sm:gap-2 h-full hover:brightness-110 hover:animate-pulse font-bold px-4 py-2 sm:p-2 sm:px-6 bg-gray-300 shadow-lg shadow-orange-600/50">
      درباره تامی شاپ
      <ArrowUpRight className="text-gray-700 w-5 sm:w-10" />
    </button>
  </div>
  )
}

export default HerobanerButton