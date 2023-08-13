import { MikroOrmAdapter } from '@auth/mikro-orm-adapter'
import { User } from './entities/User'
import { getOrmConfig } from './ormConfig'

export const nextAuthAdapter = MikroOrmAdapter(getOrmConfig(), {
  entities: { User },
})
