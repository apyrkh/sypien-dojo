import { MikroORM } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import path from 'path'
import { getOrmConfig } from './ormConfig'

// @TODO: only for running scripts read env variables
if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dotenv = require('dotenv')
  dotenv.config({
    debug: true,
    path: path.resolve(process.cwd(), '.env.local'),
  })
}

let orm: MikroORM<PostgreSqlDriver>
export const getOrm = async () => {
  if (!orm) {
    orm = await MikroORM.init<PostgreSqlDriver>(getOrmConfig())

    // @TODO: remove auto-generate schemas after development phase
    const generator = orm.getSchemaGenerator()
    // await generator.dropSchema()
    // await generator.createSchema()
    await generator.updateSchema()
  }

  return orm
}
