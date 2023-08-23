import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core'

@Entity()
@Unique({ properties: ['provider', 'providerPageId'] })
export class Page {
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID()

  @Property({ type: 'string' })
  provider: string

  @Property({ type: 'string' })
  providerPageId: string

  @Property({ type: 'string' })
  name: string

  @Property({ type: 'string', columnType: 'varchar(455)' })
  accessToken: string

  @Property({ type: 'datetime' })
  tokenExpiresAt: Date

  @Property({ type: 'string' })
  tokenType: string

  @Property({ type: 'datetime', nullable: true })
  lastSynchronizedAt?: Date
}
