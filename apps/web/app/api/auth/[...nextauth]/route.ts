import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@schedulize/prisma";

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const userInDB = await prisma.user.findUnique({ where: { email: user.email } });
      if (!userInDB) return false;
      return true;
    }
  }
};


const handler = NextAuth(nextAuthOptions);


export { handler as GET, handler as POST }
