
import Image from "next/image";
import Link from "next/link";

import {
  Droplets,
  Menu,
  Package2,
  Search,
  Home,
  LineChart,
  Package,
  Users2,
  PackagePlus,
  KeyboardIcon,
  InboxIcon,
  FilePlusIcon,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { UserButton, useAuth } from "@clerk/nextjs";

const menu2 = [
  "Dashboard",
  "Activity",
  "Assets",
  "Analytics",
  "License",
  "Accessories",
  "Consumables",
  "Component",
  "Furnitures",
  "Vehicles",
  "Appliances",
  "Users",
  "Settings",
];
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => { return (
    
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    
  )
})
ListItem.displayName = "ListItem"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu" 

import React from "react";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string, }[] = [

  {
    title: "Assets",
    href: "/assets",
    description:
      "Tangible items or equipment that are stocked within the system",
  },
  {
    title: "License",
    href: "/license",
    description:
      " Legal authorization of digital resources within an organization",
  },
  {
    title: "Accessories",
    href: "/accessories", 
    description:
      "Additional peripherals and supplementary items",
  },
  {
    title: "Consumables",
    href: "/consumables",
    description: "Other supplies that are regularly depleted and need replenishment",
  },
  {
    title: "Component",
    href: "/component",
    description:
      "Elements that make up larger systems, like CPUs",
  },
  {
    title: "Furniture",
    href: "/furniture",
    description:
      "Movable objects used to enhance the environment within a workspace",
  },
  {
    title: "Vehicle",
    href: "/Dashboard",
    description:
      "Means of transportation designed to carry people or goods",
  },
  {
    title: "Appliances",
    href: "/Dashboard",
    description:
      "Electronic devices designed for specific functions",
  },
]

export default function Nav() {
  const {userId}=useAuth()
  return (
    <div className="flex flex-col gap-4  w-full">
      <header className="top-0 flex h-16 items-center justify-center gap-4 bg-background px-4 md:px-6 bg-yellow-300 drop-shadow-lg w-full">
        <div className="flex flex-row items-center justify-center">
          <Image
            alt="UAS logo"
            className="mr-5"
            height="64"
            src="/uas-logo-dark.png"
            width="64"
          />
          <a href="/dashboard" className="font-bold">
            UAS INVENTORY SYSTEM
          </a>
        </div>
        <div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <h1 className="font-bold">|</h1>
            <Link
              href="/dashboard"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Dashboard</p>
            </Link>
            <Link
              href="/activity"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Activity</p>
            </Link>
            <Link
              href="/analytics"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Analytics</p>
            </Link>
            <Link
              href="/users"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Users</p>
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-3 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              </Link>
              {menu2.map((menu2: string, index: number) => {
                return (
                  <div key={index}>
                    <Link
                      href={`/${menu2.toLowerCase()}`}
                      className="flex items-center gap-4 px-2.5 hover:text-foreground"
                    >
                      {menu2 === "Dashboard" && (
                        <>
                          <Home className="h-5 w-5" />
                          <span>DASHBOARD</span>
                        </>
                      )}
                      {menu2 === "Activity" && (
                        <>
                          <Package className="h-5 w-5" />
                          <span>ACTIVITY</span>
                        </>
                      )}
                      {menu2 === "Assets" && (
                        <>
                          <Users2 className="h-5 w-5" />
                          <span>ASSETS</span>
                        </>
                      )}
                      {menu2 === "Analytics" && (
                        <>
                          <LineChart className="h-5 w-5" />
                          <span>ANALYTICS</span>
                        </>
                      )}
                      {menu2 === "License" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>LICENSE</span>
                        </>
                      )}
                      {menu2 === "Accessories" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>ACCESSORIES</span>
                        </>
                      )}
                      {menu2 === "Component" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>COMPONENT</span>
                        </>
                      )}
                      {menu2 === "Furnitures" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>FURNITURE</span>
                        </>
                      )}
                      {menu2 === "Vehicles" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>VEHICLES</span>
                        </>
                      )}
                      {menu2 === "Appliances" && (
                        <>
                          <Activity className="h-5 w-5" />
                          <span>APPLIANCES</span>
                        </>
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-auto items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>INVENTORY</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenu>
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">Create New</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <a href="/createpages/createassets">Assets</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createlicense">License</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createaccessories">Accessories</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createconsumables">Consumables</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createcomponent">Component</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createfurniture">Furniture</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createvehicle">Vehicle</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createappliances">Appliances</a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        {
          !userId && <Link href={"/sign-in"}><Button>Sign In</Button></Link>
        }
        {
          userId && <UserButton/>
        }
        
      </header>
    </div>
  );
}
