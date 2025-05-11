"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from "@/components/anon/FormField";
import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
// import { getAuth, signUpWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import axios from "axios"
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function Page() {
    const router = useRouter();
    const formSchema = z.object({
        name: z.string().min(3).max(50),
        lastName: z.string().min(3).max(50),

        email: z.string().email(),

        password: z.string().min(2).max(50),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
        },
    });


    const signUp = async (data) => {
        const { name, lastName, email, password } = data
        try {
            axios.post("http://localhost:3001/auth/", data).then((response) => {
                if (response.data.error) { alert(response.data.error); }
                else {
                    router.push("/signin")
                }
            }


            )
            // router.push('/dashboard');

        } catch (err) {

            console.log(err.message);

        }

    }
    return (
        <Card className="max-w-sm w-full mx-auto mt-10 min-w-[700px]  gap-10 p-6 md:p-15">
            <CardHeader className="flex justify-center items-center gap-2 md:justify-start">

                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <div
                            className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Back To Home
                    </Link>

                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">

                        <Form className="grid gap-10" {...form}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Login to your account</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Enter your email below to login to your account
                                </p>
                            </div>

                            <form className="w-full mt-4 grid gap-6" onSubmit={form.handleSubmit(signUp)}>
                                <FormField name="name" control={form.control} label="Name" placeholder="Ali" />
                                <FormField name="lastName" control={form.control} label="Last Name" placeholder="Harbi" />

                                <FormField name="email" control={form.control} label="Email" placeholder="m@example.com" />
                                <div>
                                    <FormField name="password" type="password" control={form.control} label="Password" placeholder="Password" />
                                    <Link href="#" className="text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Button type="submit" className='w-full'>
                                    signup
                                </Button>
                            </form>
                        </Form>



                        {/* <LoginForm onSubmit={signUp} /> */}


                    </div>
                </div>
            </CardContent>






        </Card >
    );
}
