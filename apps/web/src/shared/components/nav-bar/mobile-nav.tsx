import { Button } from "@repo/ui/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { ChevronDown, MenuIcon } from "lucide-react";

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
          {
            NAVMENULINKS.map(menu => (
              menu.subMenu
                ? (
                    <div key={menu.text} className="w-full text-center">
                      <Collapsible>
                        <CollapsibleTrigger className="peer w-full data-[state=open]:bg-[#041740] data-[state=open]:[&_svg]:rotate-180 transition-all group flex justify-center items-center gap-3 py-3 text-lg hover:bg-[#041740] active:bg=[#041740]">
                          <p>{menu.text}</p>
                          <ChevronDown className="" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="">
                          {
                            menu.subMenu.map(subMenu => (
                              <div key={subMenu.text} className="w-full text-center hover:bg-[#041740] active:bg=[#041740]">
                                <Link href={subMenu.link} className="w-full block py-3">{subMenu.text}</Link>
                              </div>
                            ))
                          }
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )
                : (
                    <div className="w-full text-center hover:bg-[#041740]" key={menu.text}>
                      <Link href={menu.link} className="w-full block text-lg py-3 active:[#041740]">{menu.text}</Link>
                    </div>
                  )
            ))
          }
          <div className="w-full *:mx-auto bg-muted-navy">
            <LocaleSelect />
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}
