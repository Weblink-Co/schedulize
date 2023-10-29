import Email from "next-auth/providers/email";

const handler = Email({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM
})

export default handler;
