import { defaultEntities } from '@auth/mikro-orm-adapter'
import { appConfig } from '../../app.config'
import { Page } from '@server/db/entities/Page'
import { defineConfig } from '@mikro-orm/postgresql'

export const getOrmConfig = () =>
  defineConfig({
    clientUrl: appConfig.db.dbUrl,
    dbName: appConfig.db.dbName,
    entities: [...Object.values(defaultEntities), Page],
    discovery: { disableDynamicFileAccess: false },
    forceUtcTimezone: true,
  })
