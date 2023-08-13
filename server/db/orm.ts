import { MikroORM } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { getOrmConfig } from './ormConfig'

let orm: MikroORM<PostgreSqlDriver>
export const getOrm = async () => {
  if (!orm) {
    orm = await MikroORM.init<PostgreSqlDriver>(getOrmConfig())
  }

  return orm
}
