import Link from "next/link";

import {
  LineChart,
  Package,
  Settings,
  Users2,
  ActivityIcon,
  KeyboardIcon,
  Droplets,
  InboxIcon,
  FilePlusIcon,
  HomeIcon,
  File,
  ArmchairIcon,
  DropletsIcon,
  Car,
  CarIcon,
  MicrowaveIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

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

import React from "react";

export default function Side() {
  return (
    <div className="flex h-full">
      <aside className="absolute inset-y-16 left-0 z-10 hidden w-14 h-full flex-col bg-background sm:flex bg-yellow-300 ">
        <nav className="flex flex-col items-center gap-4">
          {menu2.map((menu2: string, index: number) => {
            return (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/${menu2.toLowerCase()}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        {menu2 === "Dashboard" && (
                          <HomeIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Activity" && (
                          <ActivityIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Assets" && <Package className="h-5 w-5" />}

                        {menu2 === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu2 === "License" && <File className="h-5 w-5" />}
                        {menu2 === "Accessories" && (
                          <KeyboardIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Consumables" && (
                          <DropletsIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Component" && (
                          <InboxIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Furnitures" && (
                          <ArmchairIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Vehicles" && (
                          <CarIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Appliances" && (
                          <MicrowaveIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Users" && <Users2 className="h-5 w-5" />}
                        {menu2 === "Settings" && (
                          <Settings className="h-5 w-5" />
                        )}
                        <span className="sr-only">{menu2}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{menu2}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
