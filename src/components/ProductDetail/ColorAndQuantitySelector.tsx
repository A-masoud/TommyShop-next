type Props = {
    colors: string[];
    selectedColor: string;
    setSelectedColor: (v: string) => void;
    quantity: number;
    setQuantity: (v: number) => void;
  }
  

export function ColorAndQuantitySelector({ colors, selectedColor, setSelectedColor, quantity, setQuantity }:(Props)) {
    return (
      <div className="w-4/12 flex flex-col pb-1.5 gap-2 text-right">
        <h3 className="text-gray-500"> رنگ و تعداد</h3>
        <select
          className="w-full rounded-3xl p-1.5 bg-neutral-900 text-white"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
  
        {/* تعداد */}
        <div className="relative flex items-center bg-neutral-900 p-2 rounded-2xl gap-2 h-full mt-2">

          <div className="flex h-20 md:h-full w-full md:w-auto md:flex-col items-center gap-5">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="w-1/2 h-full md:w-10 md:h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-lg"
              aria-label="decrease quantity"
            >
              -
            </button>
  
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-1/2 h-full md:w-10 md:h-10 flex items-center justify-center bg-neutral-700 rounded-lg text-lg"
              aria-label="increase quantity"
            >
              +
            </button>
          </div>
  
          <span className="text-xl absolute left-1/2 -translate-x-1/2 pointer-events-none md:static md:mx-auto ">
            {quantity}
          </span>
        </div>
      </div>
    );
  }
  