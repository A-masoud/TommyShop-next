"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LoggedInMenu() {
  return (
    <div className="flex items-center gap-3 text-white">
      <Link
        href="/profile"
        className="px-3 py-2 border border-gray-500  rounded-sm hover:bg-gray-700"
      >
        پروفایل
      </Link>

      <button
        onClick={() => signOut()}
        className="px-3 py-2 border border-gray-500 rounded-sm hover:bg-gray-700"
      >
        خروج
      </button>
    </div>
  );
}
