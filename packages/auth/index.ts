import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@schedulize/database";
import { NextAuthOptions } from "next-auth";
import { Email, Google } from "./providers";

export type { Session } from "next-auth";
export * from "next-auth/react";

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Email,
    Google
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const userInDB = await prisma.user.findUnique({ where: { email: user.email } });
      if (!userInDB) return false;
      return true;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  }
};

export const handler = NextAuth(nextAuthOptions);

