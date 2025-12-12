import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import LoginForm from "@/components/Login/LoginForm"
import LoginImage from "@/components/Login/LoginImage"

export default function LoginUI() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ورود</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0">
        <div className="grid md:grid-cols-2 min-h-[500px] bg-neutral-700/30 border border-white rounded-3xl overflow-hidden shadow-lg">
          <LoginForm />
          <LoginImage />
        </div>
      </DialogContent>
    </Dialog>
  )
}
