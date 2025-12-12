import { ILayoutProps } from "@/types/Header & layout & Footer/layout"
import HeaderUp from "./HeaderUp"
import Footer from "./Footer"
import HeaderMobile from "./HederMobile"
import Providers from "@/features/User/components/Providers"
import { Toaster } from "sonner";
function Layout({ children }: ILayoutProps) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Providers>
        <HeaderUp />
        <HeaderMobile />
        {children}
        <Toaster position="top-center" richColors />
        <Footer />
      </Providers>
    </div>
  )
}

export default Layout