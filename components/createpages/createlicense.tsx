"use client";

import {
    CreateLicenseSchema,
    createLicenseSchema,
} from "@/lib/validation/license";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Nav from "@/app/sidenav/Nav";
import Side from "@/app/sidenav/Side";


export default function CreateLicense() {
    const form = useForm<CreateLicenseSchema>({
        resolver: zodResolver(createLicenseSchema),
        defaultValues: {
            softwareName: "",
            category: "",
            productKey: "",
            manufacturer: "",
            licensedto_name: "",
            licensedto_email: "",
            supplier: "",
            orderNo: "",
            purchaseDate: "",
            purchaseCost: "",
            expirationDate: "",
        },
    });

    async function handleOnSubmit(input: CreateLicenseSchema) {
        const response = await fetch("/api/license", {
            method: "POST",
            body: JSON.stringify(input),
        });

        if (!response.ok) throw Error("Status code: " + response.status);
    }

    return (
        <div className="flex min-h-screen w-full flex-col ">
            <Nav />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Side />
                <main className="flex items-center justify-center py-5">
                    <div className="mx-auto grid w-[600px] gap-6">
                        <h1 className="text-3xl font-bold">Create New License</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="softwareName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Software Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="...." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="productKey"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product Key </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="manufacturer"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Manufacturer</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="licensedto_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Licensed to (Name)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="licensedto_email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Licensed to (Email)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                      <FormField
                                    control={form.control}
                                    name="supplier"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Supplier</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="orderNo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Order Number</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Date</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseCost"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Cost</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="expirationDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Expiration Date</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className=" mt-4" type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </main>
            </div>
        </div>
    );
}
