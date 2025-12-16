"use client";
import { useEffect, useRef, useState } from "react";

export default function useHeaderMeasure() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [topH, setTopH] = useState(0);
  const [bottomH, setBottomH] = useState(0);

  useEffect(() => {
  
    const measure = () => {
      if (topRef.current) setTopH(topRef.current.offsetHeight);
      if (bottomRef.current) {
        const h = bottomRef.current.offsetHeight;
        setBottomH(h);
        document.documentElement.style.setProperty("--tabbar-h", `${h}px`);
      }
    };

 
    const initTimeout = setTimeout(measure, 50);

  
    const topObserver = new ResizeObserver(measure);
    const bottomObserver = new ResizeObserver(measure);

    if (topRef.current) topObserver.observe(topRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(initTimeout);
      topObserver.disconnect();
      bottomObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return { topRef, bottomRef, topH, bottomH };
}
