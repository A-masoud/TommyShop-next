"use client"

import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import FormInput from "@/features/User/signupForm/FormInput"
import SignupFormFooter from "@/features/User/signupForm/SignupFormFooter"
import { useSignupForm } from "@/features/User/hooks/useSignupForm"

export default function SignupForm() {
  const { register, handleSubmit, errors, loading, error, onSubmit } = useSignupForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center p-10 text-right">
      <DialogHeader>
        <DialogTitle className="text-3xl font-semibold mb-1 text-[#E6E4B2]">خوش آمدید</DialogTitle>
        <DialogDescription className="text-lg text-white font-bold mb-6">ساخت حساب کاربری</DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <FormInput id="fullName" label="نام کامل" placeholder="نام و نام خانوادگی" register={register} error={errors.fullName?.message} />
        <FormInput id="email" label="ایمیل" type="email" placeholder="ایمیل خود را وارد کنید" register={register} error={errors.email?.message} />
        <FormInput id="password" label="رمز عبور" type="password" placeholder="رمز عبور دلخواه" register={register} error={errors.password?.message} />
        <FormInput id="confirmPassword" label="تکرار رمز عبور" type="password" placeholder="دوباره وارد کنید" register={register} error={errors.confirmPassword?.message} />
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <SignupFormFooter loading={loading} />
    </form>
  )
}
