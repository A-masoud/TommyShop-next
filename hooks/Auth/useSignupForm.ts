"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { signupSchema, SignupFormInputs } from "../../src/features/User/Schema/signupSchema"

export function useSignupForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormInputs) => {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.fullName, email: data.email, password: data.password }),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || "مشکلی پیش آمده")
        setLoading(false)
        return
      }

      const loginRes = await signIn("credentials", { redirect: false, email: data.email, password: data.password })
      setLoading(false)

      if (loginRes?.ok) window.location.href = "/dashboard"
      else setError("ثبت‌نام انجام شد اما ورود خودکار موفق نبود")
    } catch {
      setError("خطا در اتصال به سرور")
      setLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    loading,
    error,
    onSubmit,
  }
}
