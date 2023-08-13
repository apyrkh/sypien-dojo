import { Entity, Index, PrimaryKey, Property, Unique } from '@mikro-orm/core'

@Entity()
@Index({ properties: ['provider', 'providerAccountId', 'pageId'] })
@Unique({ properties: ['provider', 'providerAccountId', 'pageId'] })
export class Page {
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID()

  @Property({ type: 'string' })
  provider!: string

  @Property({ type: 'string' })
  providerAccountId!: string

  @Property({ type: 'string' })
  pageId!: string

  @Property({ type: 'string' })
  pageName!: string

  @Property({ type: 'string', nullable: true })
  accessToken!: string

  @Property({ type: 'integer', nullable: true })
  expiresAt!: number

  @Property({ type: 'string', nullable: true })
  tokenType!: string
}
