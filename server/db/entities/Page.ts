import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core'

@Entity()
@Unique({ properties: ['provider', 'pageId'] })
export class Page {
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID()

  @Property({ type: 'string' })
  provider: string

  @Property({ type: 'string' })
  pageId: string

  @Property({ type: 'string' })
  pageName: string

  @Property({ type: 'string', columnType: 'varchar(455)' })
  accessToken: string

  @Property({ type: 'datetime' })
  expiresAt: Date

  @Property({ type: 'string' })
  tokenType: string

  @Property({ type: 'datetime', nullable: true })
  lastSynchronizedAt?: Date
}
