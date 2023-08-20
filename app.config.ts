export const appConfig = {
  isDev: process.env.NODE_ENV !== 'production',
  db: {
    dbUrl: process.env.DATABASE_URL!,
    dbName: process.env.DATABASE_NAME!,
    dbUser: process.env.DATABASE_USER!,
    dbPassword: process.env.DATABASE_PASSWORD!,
  },
  fb: {
    appId: process.env.FACEBOOK_ID!,
    appSecret: process.env.FACEBOOK_SECRET!,
    watchedPagesIds: process.env.FACEBOOK_WATCHED_PAGES_IDS!.split(','),
  },
  token: {
    secret: process.env.TOKEN_SECRET!,
    vector: process.env.TOKEN_VECTOR!,
  },
}
