"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// تعریف اسکیما با Zod
const loginSchema = z.object({
  email: z.string().email({ message: "ایمیل نامعتبر است" }),
  password: z.string().min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" }),
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true)
    setError("")

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    setLoading(false)

    if (res?.error) {
      setError("ایمیل یا رمز عبور اشتباه است")
    } else if (res?.ok) {
      window.location.href = "/dashboard"
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center p-10 text-right">
      <DialogHeader>
        <DialogTitle className="text-3xl font-semibold mb-1 text-white">خوش آمدید</DialogTitle>
        <DialogDescription className="text-lg text-[#FA6320] font-bold mb-6">صفحه ورود</DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">ایمیل</Label>
          <Input
            id="email"
            type="email"
            placeholder="ایمیل را وارد کنید"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">رمز عبور</Label>
          <Input
            id="password"
            type="password"
            placeholder="رمز عبور را وارد کنید"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <DialogFooter className="mt-6 flex justify-between">
        <DialogClose asChild>
          <Button variant="outline" disabled={loading}>لغو</Button>
        </DialogClose>
        <Button type="submit" disabled={loading}>
          {loading ? "در حال ورود..." : "ورود"}
        </Button>
      </DialogFooter>
    </form>
  )
}
