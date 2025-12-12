import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/IMG/tommy shop logo.png"
      alt="Tommy Shop"
      width={60}
      height={40}
      className="rounded-full object-coverw-15  grid place-items-center font-black"
    />
  );
}
