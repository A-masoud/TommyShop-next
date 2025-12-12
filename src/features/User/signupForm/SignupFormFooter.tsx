import { DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SignupFormFooterProps {
  loading: boolean
}

export default function SignupFormFooter({ loading }: SignupFormFooterProps) {
  return (
    <DialogFooter className="mt-6 flex justify-between">
      <DialogClose asChild>
        <Button variant="outline" disabled={loading}>
          لغو
        </Button>
      </DialogClose>
      <Button type="submit" className="bg-[#FA6320] hover:opacity-90" disabled={loading}>
        {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
      </Button>
    </DialogFooter>
  )
}
