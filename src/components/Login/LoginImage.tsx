import Image from "next/image"

export default function LoginImage() {
  return (
    <div className="relative w-full h-full lg:block hidden">
      <Image
        src="/IMG/Login/handsome-muscular-young-man-posing.jpg"
        alt="Login Illustration"
        fill
        className="object-cover"
      />
    </div>
  )
}
