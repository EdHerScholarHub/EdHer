import { Link } from "../../../i18n/navigation";
import EdHer from "../edher";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function NavBar() {
  return (
    <nav className=" bg-navy w-full top-0 sticky z-10">
      <div className="flex justify-between p-4 max-w-[1440px] h-[68px] w-full mx-auto">
        <div className="">
          <Link href="/home" className="text-xl font-black text-background">
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
