"use client";
import Link from "next/link";

import Nav from "@/app/sidenav/Nav";

import {
  ArmchairIcon,
  ArrowUpRight,
  CarIcon,
  Droplets,
  File,
  Inbox,
  Keyboard,
  MicrowaveIcon,
  PackageIcon,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

import Barchart from "@/app/analyticcomponent/barchart";
import { Side } from "@/app/sidenav/side";



export async function Dashboard({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className=" absolute pt-16 w-64">
        <div className="flex justify-center bg-background px-4 md:px-6 bg-yellow-300 drop-shadow-lg font-bold ">
          <Side />
        </div>
      </div>
      <div>
        <main className="flex flex-1 pl-72 flex-col gap-4 p-4 md:gap-8 ">
          <div className="grid gap-1 md:grid-cols-2 md:gap-4 lg:grid-cols-9">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Assets</CardTitle>
                <PackageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              
              <CardContent>
                <div className="text-2xl font-bold">poop</div>
                <a
                  href="/assets"
                  className="text-sm underline-offset-8 underline text-primary font-bold "
                >
                  View All
                </a>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Licenses</CardTitle>
                <File className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">34</div>
              <a
                href="/license"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Accessories
                </CardTitle>
                <Keyboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">56</div>
              <a
                href="/accessories"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Consumables
                </CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">78</div>
              <a
                href="/consumables"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Component
                </CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">90</div>
              <a
                href="/component"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Furnitures
                </CardTitle>
                <ArmchairIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">12</div>
              <a
                href="/furniture"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Vehicles</CardTitle>
                <CarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">34</div>
              <a
                href="/vehicle"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">
                  Appliances
                </CardTitle>
                <MicrowaveIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">56</div>
              <a
                href="/appliance"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
              </a>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className=" text-base font-bold">Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <div className="text-2xl font-bold pl-6">123</div>
              <a
                href="/users"
                className="pl-6 text-sm underline-offset-8 underline text-primary font-bold"
              >
                View All
                </a>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Recent Assets from your Inventory
                  </CardDescription>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="ml-auto gap-1 bg-yellow-300 text-neutral-950"
                >
                  <Link href="/assets">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className=" h-96 w-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Serial</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    {children}
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Asset By Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Barchart />
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="flex items-center justify-center">
          <h1>&#169; Created by the OG OJT, happy coding &#128521;</h1>
        </footer>
      </div>
    </div>
  );
}