"use client";

import { Button } from "@repo/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/navigation-menu";
import { usePathname } from "next/navigation";

import { NAVMENULINKS } from "../../../constants";
import { Link } from "../../../i18n/navigation";
import LocaleSelect from "../locale-select";

export default function DesktopNav() {
  const route = usePathname();
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="[&_button]:text-silver [&_button]:bg-navy [&_svg]:size-5">

        {
          NAVMENULINKS.map(menu => (
            menu.subMenu
              ? (
                  <NavigationMenuItem key={menu.text}>
                    <NavigationMenuTrigger className={`hover:!bg-transparent focus-within:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!text-silver ${route.includes(menu.text.toLowerCase()) ? "!text-silver" : "!text-silver/60 hover:!text-silver"}`}>
                      {menu.text}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!bg-silver">
                      <ul className="grid w-max gap-1">
                        {
                          menu.subMenu.map(subMenu => (
                            <li key={subMenu.text}>
                              <NavigationMenuLink asChild>
                                <Link href={subMenu.link} className="px-4 text-navy hover:bg-slate-200">
                                  {subMenu.text}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))
                        }
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              : (
                  <NavigationMenuItem key={menu.text}>
                    <Button variant="default" className={`hover:bg-transparent group relative ${route.includes(menu.text.toLowerCase()) ? "!text-silver" : "!text-silver/60 hover:!text-silver"}`}>
                      <Link href={menu.link}>{menu.text}</Link>

                      { route.includes(menu.text.toLowerCase()) && <span className="w-[90%] h-0.5 bg-silver absolute bottom-0" />}
                    </Button>
                  </NavigationMenuItem>
                )
          ))
        }
        <NavigationMenu>
          <LocaleSelect />
        </NavigationMenu>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
