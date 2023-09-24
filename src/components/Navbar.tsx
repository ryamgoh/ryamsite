import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <div className="bg-transparent flex items-center justify-between">
      <Button>Ryann</Button>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button>Ryann</Button>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
        <ModeToggle />
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
