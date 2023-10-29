import Google from "next-auth/providers/google";

const handler = Google({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
})

export default handler;
