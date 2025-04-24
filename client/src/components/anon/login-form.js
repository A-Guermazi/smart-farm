//i didn't use this component

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";


//form not working at the moment

export function LoginForm({ onSubmit,
  className,
  ...props
}) {
  const signIn = (data) => {
    console.log("sign in")
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={signIn} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Link href="dashboard"><Button type="submit" className="w-full" >
          Login
        </Button>
        </Link>

      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline underline-offset-4">
          Submit A Demand
        </Link>
      </div>
    </form>
  );
}
