import NextAuth, { NextAuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@schedulize/prisma";

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ]
};


const handler = NextAuth(nextAuthOptions);


export { handler as GET, handler as POST }
