"use client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import SignupForm from "@/components/SignUp/SignupForm" 
import SignupImage from "@/components/SignUp/SignupImage" 
export default function SignupUI() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ثبت‌نام</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl p-0">
        <div className="grid md:grid-cols-2 min-h-[500px] bg-neutral-700/30 border border-white rounded-3xl shadow-lg overflow-hidden">
          <SignupForm />
          <SignupImage />
        </div>
      </DialogContent>
    </Dialog>
  )
}
