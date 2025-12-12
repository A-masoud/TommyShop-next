"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type SizeSelectorProps = {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
};

export function SizeSelector({ sizes, selectedSize, setSelectedSize }: SizeSelectorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemHeight = 56;
  const [pad, setPad] = useState(0);
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, sizes.indexOf(selectedSize))
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setPad(Math.max(0, Math.round(el.clientHeight / 2 - itemHeight / 2)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const scroller = containerRef.current;
    if (!scroller) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const rect = scroller.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        let bestIdx = 0,
          bestDist = Infinity;
        itemsRef.current.forEach((item, idx) => {
          if (!item) return;
          const r = item.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - centerY);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = idx;
          }
        });
        if (bestIdx !== activeIndex) {
          setActiveIndex(bestIdx);
          setSelectedSize(sizes[bestIdx]);
        }
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [activeIndex, sizes, setSelectedSize]);

  const scrollToIndex = (i: number) =>
    itemsRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  itemsRef.current = [];

  const padStyle = useMemo(
    () => ({ paddingTop: pad, paddingBottom: pad }),
    [pad]
  );

  return (
    <div className="relative text-rightzz rounded-2xl w-16 h-full">
      <span className="text-gray-500">سایز</span>
      <div
        ref={containerRef}
        style={padStyle}
        className="h-[180px] overflow-y-scroll no-scrollbar bg-neutral-900 snap-y snap-mandatory rounded-2xl"        role="listbox"
        aria-activedescendant={`size-${activeIndex}`}
      >
        {sizes.map((size, i) => {
          const active = i === activeIndex;
          return (
            <div
              key={size}
              id={`size-${i}`}
            //   ref={(el) => (itemsRef.current[i] = el)}
              role="option"
              aria-selected={active}
              onClick={() => {
                setActiveIndex(i);
                setSelectedSize(size);
                scrollToIndex(i);
              }}
              className={[
                "snap-center h-12 flex items-center justify-center font-semibold text-base relative",
                "transition-transform duration-150",
                active ? "scale-110" : "opacity-60",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute inset-x-2 inset-y-2 rounded-xl shadow-lg",
                  active ? "bg-white z-0" : "bg-transparent",
                ].join(" ")}
              />
              <span
                className={
                  active
                    ? "text-neutral-900 relative z-10"
                    : "text-indigo-200/80 relative z-10"
                }
              >
                {size}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
