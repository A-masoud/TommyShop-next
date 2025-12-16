"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { loginSchema, LoginFormInputs } from "../../src/features/User/Schema/loginSchema"

export function useLoginForm() {
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

  return {
    register,
    handleSubmit,
    errors,
    loading,
    error,
    onSubmit,
  }
}
