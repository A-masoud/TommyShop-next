import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  error?: string
  register: any
}

export default function FormInput({ id, label, type = "text", placeholder, error, register }: FormInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
