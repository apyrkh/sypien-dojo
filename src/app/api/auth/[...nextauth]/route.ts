import { nextAuthAdapter } from '@server/db/nextAuthAdapter'
import { createUpdatePage } from '@server/db/services/pageService'
import { getExtendedAccessToken } from '@server/fb/services/fbOauthService'
import { getPageData } from '@server/fb/services/fbPageService'
import dayjs from 'dayjs'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import Facebook from 'next-auth/providers/facebook'
import { appConfig } from '../../../../../app.config'

export const authOptions: NextAuthOptions = {
  // @ts-expect-error: issues in adapter
  adapter: nextAuthAdapter,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account || !account.access_token) return false

      // @TODO: remove consoles
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)

      try {
        const pageData = await getPageData(
          appConfig.fb.watchedPagesIds[0],
          account.access_token,
        )

        // @TODO: implement to not extend token every time
        const extendedToken = await getExtendedAccessToken(
          pageData.access_token,
        )

        await createUpdatePage({
          provider: account.provider,
          providerPageId: pageData.id,
          name: pageData.name,
          accessToken: extendedToken.access_token,
          tokenExpiresAt: dayjs()
            .add(extendedToken.expires_in, 'seconds')
            .toDate(),
          tokenType: extendedToken.token_type,
        })

        return true
      } catch (e) {
        console.error(e)

        return false
      }
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
      clientId: appConfig.fb.appId,
      clientSecret: appConfig.fb.appSecret,
      authorization:
        'https://www.facebook.com/v17.0/dialog/oauth?scope=email,pages_show_list,pages_read_user_content',
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
