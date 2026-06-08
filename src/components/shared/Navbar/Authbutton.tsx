"use client"
import { CircleUserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Authbutton = () => {
  const { data: session, status } = useSession();
console.log("Session:", session);
console.log("Status:", status); 

  if (status === "loading") {
    return (
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10">
          <CircleUserRound size={18} className="text-ds-primary" />
        </span>
        <span className="text-sm font-bold text-ds-text">Loading...</span>
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10">
            <CircleUserRound size={18} className="text-ds-primary" />
          </span>
          <span className="text-sm font-bold text-ds-text">
            {session.user.name || session.user.email}
          </span>
        </div>
        <button
          type="button"
          onClick={() => signOut()}
          className="text-sm font-semibold text-ds-primary hover:underline"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="group flex items-center gap-2.5 transition-[transform,opacity] duration-200 ease-out cursor-pointer"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10 group-hover:bg-ds-primary/20">
        <CircleUserRound
          size={18}
          className="text-ds-primary transition-transform duration-200 group-hover:scale-110"
        />
      </span>
      <span className="text-sm font-bold text-ds-text group-hover:text-ds-primary">
        Login
      </span>
    </Link>
  );
};

export default Authbutton;