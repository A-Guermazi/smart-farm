"use client"
import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/anon/login-form"
import Image from "next/image";
import Link from "next/link";

export default function page() {
    const signIn = (data) => {
        console.log(data)
        alert("data")

    }
    return (
        <div className="grid lg:grid-cols-2 h-[93vh]">
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
                        <LoginForm onSubmit={signIn} />
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <Image
                    src="/signin-bg.jpg"
                    alt="Image"
                    width={500}
                    height={600}
                    priority={true}
                    quality={40}
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />

            </div>





        </div>
    );
}
