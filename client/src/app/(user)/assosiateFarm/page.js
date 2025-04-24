"use client"
import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from "@/components/anon/FormField";
import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Page() {

    const router = useRouter();
    const formSchema = z.object({
        name: z.string().min(3),
        code: z.string().min(3),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            code: "",
        },
    });


    const submit = async (data) => {
        const { name, code } = data
        try {
        } catch (err) {

            console.log(err.message);
        }

    }
    return (
        <div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <div
                            className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Back To Home
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <Form className="grid gap-10" {...form}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Request to join a farm</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Enter the farm data below to login to it
                                </p>
                            </div>
                            <form className="w-full mt-4 grid gap-6" onSubmit={form.handleSubmit(submit)}>
                                <FormField name="name" control={form.control} label="name" placeholder="ahmed farm" />
                                <FormField name="code" control={form.control} label="Farm Code" placeholder="dsh4#56t6" />
                                <Button type="submit" className='w-full'>
                                    submit
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}
