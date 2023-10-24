const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  transpilePackages: ["@schedulize/prisma", "ui"],
})
