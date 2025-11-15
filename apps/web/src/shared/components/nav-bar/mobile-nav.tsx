import { Button } from "@repo/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { MenuIcon } from "lucide-react";

import { NAVMENULINKS } from "../../../constants";
import { Link } from "../../../i18n/navigation";
import EdHer from "../edher";
import LocaleSelect from "../locale-select";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="cursor-pointer">
          <MenuIcon className="size-6 text-silver" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-navy text-silver lg:hidden">
        <SheetHeader>
          <SheetTitle className="text-xl text-silver font-bold">
            <EdHer />
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 px-4 overflow-y-auto">
          {NAVMENULINKS.map(menu => (
            <div
              className="w-full text-center hover:bg-[#041740]"
              key={menu.text}
            >
              <Link
                href={menu.link}
                className="w-full block text-lg py-3 active:[#041740]"
              >
                {menu.text}
              </Link>
            </div>
          ))}
          <div className="w-full *:mx-auto bg-muted-navy">
            <LocaleSelect />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
