import NextAuth from 'next-auth'
import Facebook from 'next-auth/providers/facebook'

const handler = NextAuth({
  providers: [
    Facebook({
      // @ts-expect-error: it is required
      clientId: process.env.FACEBOOK_ID,
      // @ts-expect-error: it is required
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
})

export { handler as GET, handler as POST }
