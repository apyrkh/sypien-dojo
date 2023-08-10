import { defaultEntities } from '@auth/mikro-orm-adapter'
import { defineConfig } from '@mikro-orm/postgresql'

export const getOrmConfig = () =>
  defineConfig({
    driverOptions:
      process.env.NODE_ENV !== 'production'
        ? undefined
        : {
            connection: {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
          },
    clientUrl: `${process.env.DATABASE_URL}?ssl=true`,
    entities: [...Object.values(defaultEntities)],
    discovery: { disableDynamicFileAccess: false },
    forceUtcTimezone: true,
  })
