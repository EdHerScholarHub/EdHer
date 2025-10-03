import Link from "next/link";

import EdHer from "../edher";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function NavBar() {
  return (
    <nav className=" bg-navy">
      <div className="flex justify-between p-4 max-w-[1440px] mx-auto relative z-10">
        <div className="">
          <Link href="/en/home" className="text-xl font-black text-background">
            <EdHer />
          </Link>
        </div>

        <div>
          <div className="lg:hidden">
            <MobileNav />
          </div>

          <div className="hidden lg:block">
            <DesktopNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
