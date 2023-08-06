import { getOrm } from '../db/orm' // or any other driver package

// https://mikro-orm.io/docs/schema-generator/#using-schemagenerator-programmatically
;(async () => {
  const orm = await getOrm()

  const generator = orm.getSchemaGenerator()

  const dropDump = await generator.getDropSchemaSQL()
  console.log(dropDump)

  const createDump = await generator.getCreateSchemaSQL()
  console.log(createDump)

  const updateDump = await generator.getUpdateSchemaSQL()
  console.log(updateDump)

  // or you can run those queries directly, but be sure to check them first!
  await generator.dropSchema()
  await generator.createSchema()
  await generator.updateSchema()

  // in tests it can be handy to use those:
  await generator.refreshDatabase() // ensure db exists and is fresh
  await generator.clearDatabase() // removes all data

  await orm.close(true)
})()
