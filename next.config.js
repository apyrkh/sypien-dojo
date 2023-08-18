/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'scontent-waw1-1.xx.fbcdn.net',
      'cdn.discordapp.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
}

module.exports = nextConfig
