import { MikroORM } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { getOrmConfig } from './ormConfig'

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
