"use client";
import React, { Suspense } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from "./FormField";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";



export default function DemandForm() {
    const formSchema = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        address: z.string().min(2).max(50),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            adress: "",
        },
    });


    const onSubmit = (data) => {

    }

    return (
        <div className="grid gap-5">
            <div className='max-w-3xl mx-auto text-center'>
                <h1 className='font-bold text-5xl'>Request Your Smart Farming Solution</h1>
                <p className='font-light text-2xl my-2'>
                    Fill out the form to enhance efficiency and maximize your farm’s potential!

                </p>

            </div>
            <Card>
                <CardContent>
                    <div className="card-border  lg:min-w-[566px]">
                        <div className="flex flex-col  gap-6 card py-14 px-10" >

                            <Form className="w-full space-y-6 mt-4 form"{...form}>
                                <form className="w-full space-y-6 mt-4 form" onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField name="name" control={form.control} />
                                    <FormField name="email" control={form.control} />
                                    <FormField name="address" control={form.control} />
                                    <Button type="submit" className='w-full'>
                                        Submit
                                    </Button>
                                </form>
                            </Form>



                            {/* <p className="text-center">
                            hjksqdf
                        </p> */}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
