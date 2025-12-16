"use client";

import Login from "../../../app/(login)/Login";
import Signup from "../../../app/(signup)/Signup";
import LoggedInMenu from "../../features/User/components/LoggedInMenu";
import useAuthStatus from "../../../hooks/Auth/useAuthStatus";

export default function UserMenu() {
  const { isLoading, isLoggedIn } = useAuthStatus();

  if (isLoading) {
    return <div className="text-white">در حال بررسی...</div>;
  }

  if (isLoggedIn) {
    return <LoggedInMenu />;
  }

  return (
    <div className="flex items-center gap-2">
      <Login />
      <Signup />
    </div>
  );
}
