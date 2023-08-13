import { getOrm } from '@server/db/orm'

// https://mikro-orm.io/docs/schema-generator/#using-schemagenerator-programmatically
;(async () => {
  const orm = await getOrm()

  const generator = orm.getSchemaGenerator()

  const updateDump = await generator.getUpdateSchemaSQL()
  console.log(updateDump)

  await generator.updateSchema()

  await orm.close(true)
})()
