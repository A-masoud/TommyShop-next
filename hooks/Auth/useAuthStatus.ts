"use client";

import { useSession } from "next-auth/react";

export default function useAuthStatus() {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isLoggedIn = !!session?.user;

  return { session, isLoading, isLoggedIn };
}
