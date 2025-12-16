"use client"

import { Button } from "@/components/ui/button"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"

export default function LoginFormFooter({ loading }: { loading: boolean }) {
  return (
    <DialogFooter className="mt-6 flex justify-between">
      <DialogClose asChild>
        <Button variant="outline" disabled={loading}>
          لغو
        </Button>
      </DialogClose>

      <Button type="submit" disabled={loading}>
        {loading ? "در حال ورود..." : "ورود"}
      </Button>
    </DialogFooter>
  )
}
