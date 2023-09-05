import { defaultEntities } from '@auth/mikro-orm-adapter'
import { defineConfig } from '@mikro-orm/postgresql'
import { Page } from '@server/db/entities/Page'
import { PagePost } from '@server/db/entities/PagePost'
import { appConfig } from '../../app.config'

export const getOrmConfig = () =>
  defineConfig({
    clientUrl: appConfig.db.dbUrl,
    dbName: appConfig.db.dbName,
    user: appConfig.db.dbUser,
    password: appConfig.db.dbPassword,
    entities: [...Object.values(defaultEntities), Page, PagePost],
    discovery: { disableDynamicFileAccess: false },
    forceUtcTimezone: true,
  })
