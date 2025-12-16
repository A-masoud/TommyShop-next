"use client"

import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import FormInput from "@/features/User/signupForm/FormInput"
import LoginFormFooter from "@/features/User/loginForm/LoginFormFooter"
import { useLoginForm } from "../../../hooks/Auth/useLoginForm"

export default function LoginForm() {
  const { register, handleSubmit, errors, loading, error, onSubmit } = useLoginForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center p-10 text-right">
      <DialogHeader>
        <DialogTitle className="text-3xl font-semibold mb-1 text-white">
          خوش آمدید
        </DialogTitle>
        <DialogDescription className="text-lg text-[#FA6320] font-bold mb-6">
          صفحه ورود
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <FormInput
          id="email"
          label="ایمیل"
          type="email"
          placeholder="ایمیل را وارد کنید"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          id="password"
          label="رمز عبور"
          type="password"
          placeholder="رمز عبور"
          register={register}
          error={errors.password?.message}
        />
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <LoginFormFooter loading={loading} />
    </form>
  )
}
