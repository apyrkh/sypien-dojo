import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core'

@Entity()
@Unique({ properties: ['provider', 'providerAccountId', 'pageId'] })
export class Page {
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID()

  @Property({ type: 'string' })
  provider: string

  @Property({ type: 'string' })
  providerAccountId: string

  @Property({ type: 'string' })
  pageId: string

  @Property({ type: 'string' })
  pageName: string

  @Property({ type: 'string', serializer: (value) => `***${value.slice(-4)}` })
  accessToken: string

  @Property({ type: 'datetime' })
  expiresAt: Date

  @Property({ type: 'string' })
  tokenType: string

  @Property({ type: 'datetime', nullable: true })
  lastSynchronizedAt?: Date
}
