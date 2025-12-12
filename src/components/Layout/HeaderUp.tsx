"use client"
import Logo from "../HeaderDesktop/Logo";
import NavMenu from "../HeaderDesktop/NavMenu";
import SearchBox from "../HeaderDesktop/SerchBox";
import UserMenu from "../HeaderDesktop/UserMenu";
import CartButton from "../HeaderDesktop/CartButten";


export default function HeaderUp() {
  return (
    <header
      dir="rtl"
      className="hidden lg:block fixed top-0 left-0 right-0 z-50 w-full transition-[background,box-shadow,border] duration-300 backdrop-blur-md border-b bg-black/30 border-white/5"
    >
      <div className="mx-auto max-w-none px-6">
        <div className=" flex items-center justify-between gap-4">

          <Logo />

          <NavMenu />

          <div className="flex items-center gap-2 ">


            <SearchBox />


            <UserMenu />

            <CartButton />
          </div>

        </div>
      </div>
    </header>
  );
}
