import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core'
import { Page } from '@server/db/entities/Page'

@Entity()
@Unique({ properties: ['page', 'providerPostId'] })
export class PagePost {
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID()

  @ManyToOne(() => Page)
  page: Page

  @Property({ type: 'string', columnType: 'varchar(32)' })
  providerPostId: string

  @Property({ type: 'string', columnType: 'text' })
  message: string

  @Property({ type: 'json', nullable: true })
  photos?: { id: string; height: number; width: number }[]

  @Property({ type: 'datetime' })
  createdAt: Date
}
