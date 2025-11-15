"use client";

import { Button } from "@repo/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@repo/ui/components/navigation-menu";
import { usePathname } from "next/navigation";

import { NAVMENULINKS } from "../../../constants";
import { Link } from "../../../i18n/navigation";
import LocaleSelect from "../locale-select";

export default function DesktopNav() {
  const route = usePathname();
  const isActiveRoute = (link: string) => route.includes(link);
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="[&_button]:text-silver [&_button]:bg-navy [&_svg]:size-5">
        {NAVMENULINKS.map(menu => (
          <NavigationMenuItem key={menu.text}>
            <Button
              variant="default"
              className={`hover:bg-transparent shadow-none group relative ${isActiveRoute(menu.link) ? "!text-silver" : "!text-silver/60 hover:!text-silver"}`}
            >
              <Link href={menu.link}>{menu.text}</Link>

              {isActiveRoute(menu.link) && (
                <span className="w-[90%] h-0.5 bg-silver absolute bottom-0" />
              )}
            </Button>
          </NavigationMenuItem>
        ))}
        <NavigationMenu>
          <LocaleSelect />
        </NavigationMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
