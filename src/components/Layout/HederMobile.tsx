"use client";
import useHeaderScroll from "../../../hooks/useHeaderScroll";
import useHeaderMeasure from "../../../hooks/useHeaderMeasure";

import MobileHeaderTop from "../HeaderMobile/header & buttonNav/MobileHeaderTop";
import MobileBottomNav from "../HeaderMobile/header & buttonNav/MobileBottomNav";

export default function HeaderDown() {
  const scrolled = useHeaderScroll();
  const { topRef, bottomRef, topH } = useHeaderMeasure();

  return (
    <>
      <MobileHeaderTop scrolled={scrolled} topRef={topRef} />

      <div className="lg:hidden" style={{ height: topH }} aria-hidden />

      <MobileBottomNav scrolled={scrolled} bottomRef={bottomRef} />


    </>
  );
}
