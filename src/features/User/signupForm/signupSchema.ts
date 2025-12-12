import { z } from "zod"

// اسکیما ثبت‌نام
export const signupSchema = z
  .object({
    fullName: z.string().min(2, { message: "نام کامل باید حداقل ۲ حرف باشد" }),
    email: z.string().email({ message: "ایمیل نامعتبر است" }),
    password: z
      .string()
      .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" })
      .regex(/[A-Z]/, { message: "رمز عبور باید حداقل یک حرف بزرگ داشته باشد" })
      .regex(/[0-9]/, { message: "رمز عبور باید حداقل یک عدد داشته باشد" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن مطابقت ندارند",
    path: ["confirmPassword"],
  })

export type SignupFormInputs = z.infer<typeof signupSchema>
