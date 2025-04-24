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
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import axios from "axios"


export default function Page() {
    const router = useRouter();
    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(2).max(50),
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const signIn = async (data) => {
        const { email, password } = data
        try {
            axios.post("http://localhost:3001/auth/login", data).then((response) => {
                if (response.data.error) { alert(response.data.error); }
                else {
                    localStorage.setItem("accessToken", response.data.accessToken);
                    console.log(response.data)
                    if (response.data.farmId) { router.push("/dashboard") }
                    else { router.push("/assosiateFarm") }
                }
            }


            )
            // router.push('/dashboard');

        } catch (err) {

            console.log(err.message);
            alert("user not exist")
        }

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

                        <Form className="grid gap-10" {...form}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Login to your account</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Enter your email below to login to your account
                                </p>
                            </div>

                            <form className="w-full mt-4 grid gap-6" onSubmit={form.handleSubmit(signIn)}>

                                <FormField name="email" control={form.control} label="Email" placeholder="m@example.com" />
                                <div>
                                    <FormField name="password" control={form.control} label="Password" placeholder="Password" />
                                    <Link href="#" className="text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Button type="submit" className='w-full'>
                                    Login
                                </Button>
                            </form>
                        </Form>




                        {/* <LoginForm onSubmit={signIn} /> */}


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
