import { loginUser } from "@/modules/auth/services/authService";
import type { NextAuthOptions, Session } from "next-auth";
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
            name: `${user.firstName} ${user.lastName}`,
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
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: { id?: string; role?: string; phone?: string };
    }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.phone = user.phone;
      }

      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT & { id?: string; role?: string; phone?: string };
    }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        role: token.role as string,
        phone: token.phone as string,
      };

      return session;
    },
  },
};
