import NextAuth from 'next-auth'
import Facebook from 'next-auth/providers/facebook'
import { nextAuthAdapter } from '@db/nextAuthAdapter'

const handler = NextAuth({
  // @ts-expect-error: issues in adapter
  adapter: nextAuthAdapter,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)
      return true
    },
    // async redirect({ baseUrl, ...qq }) {
    //   console.log('redirect', qq)
    //   return baseUrl
    // },
    //   async session({ session, ...qq }) {
    //     console.log('session', qq)
    //     return session
    //   },
    //   async jwt({ token, ...qq }) {
    //     console.log('jwt', qq)
    //     return token
    //   },
  },
  providers: [
    // facebook #_=_
    // https://github.com/nextauthjs/next-auth/issues/532
    // https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url
    Facebook({
      // @ts-expect-error: it is required
      clientId: process.env.FACEBOOK_ID,
      // @ts-expect-error: it is required
      clientSecret: process.env.FACEBOOK_SECRET,
      authorization:
        'https://www.facebook.com/v17.0/dialog/oauth?scope=email,pages_show_list,pages_read_user_content',
    }),
  ],
})

export { handler as GET, handler as POST }
