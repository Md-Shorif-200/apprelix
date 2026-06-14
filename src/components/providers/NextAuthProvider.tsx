"use client";

import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider refetchOnWindowFocus={false} refetchInterval={0}>
      {children}
    </SessionProvider>
  );
};

export default NextAuthProvider;
