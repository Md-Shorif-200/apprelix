import { loginUser } from "@/modules/auth/services/authService";

import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const payload = {
          email: credentials?.email || "",
          password: credentials?.password || "",
        };
        try {
          const user = await loginUser(payload);

          if (!user) {
            return null;
          }

          return {
            ...user,
            id: user._id,
            name: user.fullName,
            phone: user.phone,
            image: user.profilePhoto?.url || null,
          };
        } catch {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.picture = user.image;

        token.role = user.role;
        token.phone = user.phone;
      }

      if (trigger === "update" && session?.user) {
        token.name = session.user.name;
        token.picture = session.user.image;
      }

      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.image = token.picture as string;
        session.user.name = token.name;

        session.user.role = token.role as "buyer" | "supplier" | "admin";
        session.user.phone = token.phone as string;
      }
      return session;
    },
  },
};
